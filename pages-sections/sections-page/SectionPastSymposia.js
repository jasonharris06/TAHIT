/* eslint-disable */
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageGallery from "react-image-gallery";

import Data from "../../data/pastSymposia.json";
import galleryImages from "../../data/symposiumPhotoGallery.json";
import { trackEvent } from "../../lib/clarity.js";

// The 9th Annual Symposium (2015, Galveston) is the one with a photo gallery.
const GALLERY_INDEX = 8;

/** One tile in the grid. Uses shared `layoutId`s so it can morph into the modal. */
function SymposiumTile({ item, index, onSelect }) {
  return (
    <motion.button
      type="button"
      className="ps-tile"
      layoutId={`symp-card-${index}`}
      onClick={() => onSelect(index)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      aria-label={`View details for the ${item.symposium}`}
    >
      <motion.div className="ps-tileArt" layoutId={`symp-art-${index}`}>
        <Image
          src={item.image}
          alt={item.symposium}
          fill
          sizes="(max-width: 599px) 90vw, (max-width: 959px) 45vw, 30vw"
          style={{ objectFit: "cover" }}
        />
        <span className="ps-tileScrim" aria-hidden="true" />
        {index === GALLERY_INDEX && (
          <span className="ps-galleryBadge">
            <i className="fas fa-images" aria-hidden="true" /> Photos
          </span>
        )}
      </motion.div>

      <motion.div className="ps-tileMeta" layoutId={`symp-meta-${index}`}>
        <h3 className="ps-tileTitle">{item.symposium}</h3>
        <p className="ps-tileSub">
          <i className="fas fa-map-marker-alt" aria-hidden="true" />
          {item.host} · {item.dates}
        </p>
      </motion.div>
    </motion.button>
  );
}

/** The expanded, shared-layout detail card. Morphs out of the tile it came from. */
function SymposiumModal({ item, index, onClose, onOpenGallery }) {
  const facts = [
    { icon: "fas fa-map-marker-alt", label: "Host City", value: item.host },
    { icon: "fas fa-building", label: "Venue", value: item.venue },
    { icon: "fas fa-users", label: "Attendance", value: `${item.attendance} attendees` },
    { icon: "far fa-calendar-alt", label: "Dates", value: item.dates }
  ];

  return (
    <div className="ps-modalWrap" role="dialog" aria-modal="true">
      <motion.div
        className="ps-modalCard"
        layoutId={`symp-card-${index}`}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div className="ps-modalArt" layoutId={`symp-art-${index}`}>
          <Image
            src={item.image}
            alt={item.symposium}
            fill
            sizes="(max-width: 767px) 92vw, 420px"
            style={{ objectFit: "cover" }}
          />
          <span className="ps-modalArtScrim" aria-hidden="true" />
        </motion.div>

        <div className="ps-modalBody">
          <motion.div layoutId={`symp-meta-${index}`}>
            <span className="ps-modalTag">Past Symposium</span>
            <h3 className="ps-modalTitle">{item.symposium}</h3>
          </motion.div>

          <motion.ul
            className="ps-modalFacts"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            {facts.map((f) => (
              <li key={f.label}>
                <i className={f.icon} aria-hidden="true" />
                <div>
                  <span className="ps-factLabel">{f.label}</span>
                  <span className="ps-factValue">{f.value}</span>
                </div>
              </li>
            ))}
          </motion.ul>

          {index === GALLERY_INDEX && (
            <motion.button
              type="button"
              className="ps-galleryCta"
              onClick={onOpenGallery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.3 }}
            >
              <i className="fas fa-images" aria-hidden="true" />
              View Photo Gallery
            </motion.button>
          )}
        </div>

        <button className="ps-modalClose" onClick={onClose} aria-label="Close details">
          <i className="fas fa-times" aria-hidden="true" />
        </button>
      </motion.div>
    </div>
  );
}

/** Full-screen photo gallery, animated in with Framer Motion. */
function GalleryModal({ onClose }) {
  return (
    <motion.div
      className="ps-galleryBackdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="ps-gallerySheet"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ps-galleryHead">
          <h4>9th Annual Symposium · Photo Gallery</h4>
          <button className="ps-galleryClose" onClick={onClose} aria-label="Close gallery">
            <i className="fas fa-times" aria-hidden="true" />
          </button>
        </div>
        <ImageGallery
          showFullscreenButton={false}
          showPlayButton={false}
          startIndex={3}
          items={galleryImages}
        />
      </motion.div>
    </motion.div>
  );
}

export default function SectionPastSymposia() {
  const [selected, setSelected] = React.useState(null);
  const [galleryOpen, setGalleryOpen] = React.useState(false);

  const modalOpen = selected !== null || galleryOpen;

  // Lock body scroll and wire up Escape while any overlay is open.
  React.useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (galleryOpen) setGalleryOpen(false);
      else setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [modalOpen, galleryOpen]);

  const openCard = (i) => {
    setSelected(i);
    trackEvent(`past_symposium_open_${i + 1}`);
  };
  const openGallery = () => {
    setGalleryOpen(true);
    trackEvent("past_symposium_gallery_open");
  };

  return (
    <section className="ps-past" id="past-symposia">
      <div className="ps-hero">
        <div className="ps-glowA" aria-hidden="true" />
        <div className="ps-glowB" aria-hidden="true" />
        <motion.header
          className="ps-head"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="ps-eyebrow">Our History</span>
          <h1 className="ps-headline">
            Past <span className="ps-accent">TAHIT</span> Symposia
          </h1>
          <p className="ps-lede">
            Nearly two decades of bringing Texas healthcare interpreters and
            translators together. Select any year to explore the details.
          </p>
        </motion.header>
      </div>

      <div className="ps-body">
        <div className="ps-wrap">
          <motion.div
            className="ps-grid"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {Data.map((item, index) => (
              <SymposiumTile
                key={index}
                item={item}
                index={index}
                onSelect={openCard}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Shared-layout detail modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="backdrop"
            className="ps-backdrop"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selected !== null && (
          <SymposiumModal
            key="modal"
            item={Data[selected]}
            index={selected}
            onClose={() => setSelected(null)}
            onOpenGallery={openGallery}
          />
        )}
      </AnimatePresence>

      {/* Photo gallery modal */}
      <AnimatePresence>
        {galleryOpen && <GalleryModal onClose={() => setGalleryOpen(false)} />}
      </AnimatePresence>

      {/* Global because most nodes here are framer-motion components, which
          styled-jsx will not scope. Class names are prefixed `ps-` to avoid
          collisions with other sections. */}
      <style jsx global>{`
        .ps-past {
          position: relative;
        }
        .ps-hero {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding: 168px 24px 120px;
          text-align: center;
          background:
            radial-gradient(120% 80% at 50% 120%, #0b3f6e 0%, rgba(11, 63, 110, 0) 60%),
            linear-gradient(168deg, #070d1e 0%, #0a1730 45%, #071426 100%);
          color: #ffffff;
        }
        .ps-glowA,
        .ps-glowB {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          filter: blur(20px);
        }
        .ps-glowA {
          top: -20%;
          left: 8%;
          width: 620px;
          height: 620px;
          background: radial-gradient(
            circle,
            rgba(31, 127, 212, 0.36) 0%,
            rgba(31, 127, 212, 0) 68%
          );
        }
        .ps-glowB {
          bottom: -28%;
          right: -6%;
          width: 560px;
          height: 560px;
          background: radial-gradient(
            circle,
            rgba(245, 194, 76, 0.14) 0%,
            rgba(245, 194, 76, 0) 68%
          );
        }
        .ps-body {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #f4f8fc 0%, #eef4fa 100%);
          padding: 72px 0 108px;
        }
        .ps-wrap {
          position: relative;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .ps-head {
          position: relative;
          max-width: 680px;
          margin: 0 auto;
        }
        .ps-eyebrow {
          display: inline-block;
          margin: 0;
          font-size: clamp(0.72rem, 1.5vw, 0.86rem);
          font-weight: 700;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.62);
        }
        .ps-headline {
          margin: 18px 0 0;
          font-family: "Roboto", "Helvetica", Arial, sans-serif;
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #ffffff;
        }
        .ps-accent {
          background: linear-gradient(120deg, #ffd875 0%, #f0ab21 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ps-lede {
          margin: 24px auto 0;
          max-width: 600px;
          font-size: clamp(0.98rem, 1.7vw, 1.12rem);
          line-height: 1.72;
          color: rgba(255, 255, 255, 0.74);
        }
        .ps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        /* ---- tiles ---- */
        .ps-tile {
          position: relative;
          display: block;
          width: 100%;
          padding: 0;
          margin: 0;
          border: 1px solid rgba(6, 32, 63, 0.08);
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          text-align: left;
          cursor: pointer;
          box-shadow: 0 18px 40px rgba(6, 32, 63, 0.1);
        }
        .ps-tileArt {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #0a3c73;
        }
        .ps-tileScrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(6, 32, 63, 0) 45%,
            rgba(6, 32, 63, 0.55) 100%
          );
        }
        .ps-galleryBadge {
          position: absolute;
          top: 12px;
          right: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 11px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.92);
          color: #0b6ba8;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .ps-tileMeta {
          padding: 18px 20px 22px;
        }
        .ps-tileTitle {
          margin: 0;
          font-size: 1.12rem;
          font-weight: 800;
          line-height: 1.3;
          color: #06203f;
        }
        .ps-tileSub {
          margin: 8px 0 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0b6ba8;
        }

        /* ---- detail modal ---- */
        .ps-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1400;
          background: rgba(6, 32, 63, 0.72);
          backdrop-filter: blur(5px);
        }
        .ps-modalWrap {
          position: fixed;
          inset: 0;
          z-index: 1410;
          display: grid;
          place-items: center;
          padding: 24px;
          pointer-events: none;
        }
        .ps-modalCard {
          position: relative;
          width: 100%;
          max-width: 720px;
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 40px 90px rgba(2, 16, 33, 0.45);
          pointer-events: auto;
          display: grid;
          grid-template-columns: 300px 1fr;
        }
        .ps-modalArt {
          position: relative;
          min-height: 320px;
          background: #0a3c73;
        }
        .ps-modalArtScrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(6, 32, 63, 0) 55%,
            rgba(6, 32, 63, 0.35) 100%
          );
        }
        .ps-modalBody {
          padding: 34px 34px 36px;
        }
        .ps-modalTag {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 999px;
          background: #fff6e2;
          color: #a9750a;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .ps-modalTitle {
          margin: 14px 0 0;
          font-size: 1.5rem;
          font-weight: 800;
          line-height: 1.2;
          color: #06203f;
        }
        .ps-modalFacts {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: grid;
          gap: 16px;
        }
        .ps-modalFacts li {
          display: flex;
          gap: 13px;
          align-items: flex-start;
        }
        .ps-modalFacts > li > i {
          flex: none;
          margin-top: 2px;
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: #e6f4fb;
          color: #0b6ba8;
          font-size: 0.8rem;
        }
        .ps-factLabel {
          display: block;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8496a9;
        }
        .ps-factValue {
          display: block;
          margin-top: 2px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #1d2f45;
        }
        .ps-galleryCta {
          margin-top: 28px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 22px;
          border: none;
          border-radius: 999px;
          background: linear-gradient(135deg, #0b6ba8, #0f7fc4);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 14px 30px rgba(11, 107, 168, 0.35);
        }
        .ps-modalClose {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: rgba(6, 32, 63, 0.6);
          color: #fff;
          cursor: pointer;
          font-size: 0.95rem;
        }
        .ps-modalClose:hover {
          background: rgba(6, 32, 63, 0.85);
        }

        /* ---- gallery modal ---- */
        .ps-galleryBackdrop {
          position: fixed;
          inset: 0;
          z-index: 1420;
          background: rgba(6, 32, 63, 0.78);
          backdrop-filter: blur(5px);
          display: grid;
          place-items: center;
          padding: 24px;
          overflow-y: auto;
        }
        .ps-gallerySheet {
          position: relative;
          width: 100%;
          max-width: 900px;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 40px 90px rgba(2, 16, 33, 0.5);
          margin: auto;
        }
        .ps-galleryHead {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
          background: linear-gradient(135deg, #06203f, #0b6ba8);
        }
        .ps-galleryHead h4 {
          margin: 0;
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
        }
        .ps-galleryClose {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.16);
          color: #fff;
          cursor: pointer;
        }
        .ps-galleryClose:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 959px) {
          .ps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .ps-modalCard {
            grid-template-columns: 1fr;
            max-width: 460px;
          }
          .ps-modalArt {
            min-height: 200px;
          }
          .ps-modalBody {
            padding: 26px 24px 30px;
          }
        }
        @media (max-width: 599px) {
          .ps-hero {
            padding: 138px 24px 84px;
          }
          .ps-body {
            padding: 56px 0 80px;
          }
          .ps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
