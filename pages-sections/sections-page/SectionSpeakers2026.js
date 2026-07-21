/* eslint-disable */
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { symposium2026 as ev, speakers2026 } from "../../data/symposium2026.js";
import { trackEvent, setTag } from "../../lib/clarity.js";

const spotlight = speakers2026.filter((s) => s.spotlight);
const rest = speakers2026.filter((s) => !s.spotlight);

/** "PhD, CHI-Spanish · Martti" — whichever pieces this speaker actually has. */
const affiliation = (s) => [s.credentials, s.role, s.org].filter(Boolean).join(" · ");

function Objectives({ items }) {
  return (
    <ul className="objectives">
      {items.map((o, i) => (
        <li key={i}>
          <i className="fas fa-check" aria-hidden="true" />
          <span>{o}</span>
        </li>
      ))}
      <style jsx>{`
        .objectives {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .objectives li {
          display: flex;
          gap: 11px;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #46566b;
        }
        .objectives :global(i) {
          flex: none;
          margin-top: 4px;
          width: 17px;
          height: 17px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #e6f4fb;
          color: #0b6ba8;
          font-size: 0.5rem;
        }
      `}</style>
    </ul>
  );
}

/** Full session detail, opened from any speaker card. */
function SpeakerModal({ speaker, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="sp26-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="sp26-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={`${speaker.name} — ${speaker.session}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="close" onClick={onClose} aria-label="Close session details">
          <i className="fas fa-times" aria-hidden="true" />
        </button>

        <div className="sheetGrid">
          <div className="sheetArt">
            <Image
              src={speaker.flyer}
              alt={`Session flyer for ${speaker.name}: ${speaker.session}`}
              width={1200}
              height={1200}
              sizes="(max-width: 767px) 92vw, 420px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div className="sheetBody">
            <span className="tag">Featured Speaker</span>
            <h3 className="name">{speaker.name}</h3>
            {affiliation(speaker) && <p className="affil">{affiliation(speaker)}</p>}

            <h4 className="session">{speaker.session}</h4>
            {speaker.sessionNote && <p className="note">{speaker.sessionNote}</p>}

            <p className="objTitle">What you will take away</p>
            <Objectives items={speaker.objectives} />

            <a
              className="modalCta"
              href={ev.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("symposium_2026_register_modal");
                setTag("speaker", speaker.slug);
              }}
            >
              Register for the symposium
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        /* Both live on framer-motion components, so styled-jsx can't scope them —
           see the note in the speakers stylesheet below. */
        :global(.sp26-backdrop) {
          position: fixed;
          inset: 0;
          z-index: 1400;
          background: rgba(6, 32, 63, 0.72);
          backdrop-filter: blur(5px);
          display: grid;
          place-items: center;
          padding: 24px;
          overflow-y: auto;
        }
        :global(.sp26-sheet) {
          position: relative;
          width: 100%;
          max-width: 900px;
          background: #ffffff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 40px 90px rgba(2, 16, 33, 0.45);
          margin: auto;
        }
        .close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: rgba(6, 32, 63, 0.6);
          color: #fff;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background 0.2s ease;
        }
        .close:hover {
          background: rgba(6, 32, 63, 0.85);
        }
        .sheetGrid {
          display: grid;
          grid-template-columns: 380px 1fr;
        }
        .sheetArt {
          background: #0a3c73;
          display: flex;
          align-items: center;
        }
        .sheetBody {
          padding: 38px 38px 40px;
          max-height: 82vh;
          overflow-y: auto;
        }
        .tag {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 999px;
          background: #fff6e2;
          color: #a9750a;
          font-size: 0.63rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .name {
          margin: 16px 0 0;
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.2;
          color: #06203f;
        }
        .affil {
          margin: 8px 0 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0b6ba8;
        }
        .session {
          margin: 24px 0 0;
          font-size: 1.08rem;
          font-weight: 700;
          line-height: 1.45;
          color: #1d2f45;
        }
        .note {
          margin: 6px 0 0;
          font-size: 0.82rem;
          font-style: italic;
          color: #7b8794;
        }
        .objTitle {
          margin: 26px 0 14px;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #8794a3;
        }
        .modalCta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 30px;
          padding: 14px 28px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd875 0%, #f0ab21 100%);
          color: #06203f !important;
          font-size: 0.92rem;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 10px 26px rgba(240, 171, 33, 0.34);
          transition: transform 0.25s ease;
        }
        .modalCta:hover {
          transform: translateY(-2px);
          text-decoration: none;
          color: #06203f !important;
        }
        @media (max-width: 767px) {
          :global(.sp26-backdrop) {
            padding: 0;
            align-items: start;
          }
          :global(.sp26-sheet) {
            border-radius: 0;
            min-height: 100%;
          }
          .sheetGrid {
            grid-template-columns: 1fr;
          }
          .sheetArt {
            max-height: 46vh;
            overflow: hidden;
          }
          .sheetBody {
            padding: 28px 22px 40px;
            max-height: none;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function SectionSpeakers2026() {
  const [active, setActive] = React.useState(null);

  const open = (s) => {
    setActive(s);
    trackEvent("symposium_2026_speaker_open");
    setTag("speaker", s.slug);
  };

  return (
    <section className="speakers" id="speakers-2026">
      <div className="wrap">
        {/* A <div>, not a <header>: Header.js resolves the site bar with
            getElementsByTagName("header")[0], so stray headers are best avoided. */}
        <motion.div
          className="sp26-head"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="kicker">The 2026 Lineup</span>
          <h2 className="title">Featured Speakers</h2>
          <p className="lede">
            Eight sessions from the people shaping language access — federal policy,
            accreditation, ethics, remote interpreting, and the responsible use of AI.
          </p>
        </motion.div>

        {/* ------------------------------------------------------- SPOTLIGHT */}
        <div className="spotlightRow">
          {spotlight.map((s, i) => (
            <motion.article
              className="sp26-spot"
              key={s.slug}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="spotBtn" onClick={() => open(s)}>
                <div className="spotArt">
                  <Image
                    src={s.portrait}
                    alt={s.name}
                    width={600}
                    height={800}
                    sizes="(max-width: 767px) 40vw, 230px"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="spotBody">
                  <h3 className="spotName">{s.name}</h3>
                  {affiliation(s) && <p className="spotAffil">{affiliation(s)}</p>}
                  <p className="spotSession">{s.session}</p>
                  <span className="more">
                    Session details
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </motion.article>
          ))}
        </div>

        {/* ------------------------------------------------------------ GRID */}
        <div className="grid">
          {rest.map((s, i) => (
            <motion.article
              className="sp26-card"
              key={s.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="cardBtn" onClick={() => open(s)}>
                <div className="cardArt">
                  <Image
                    src={s.portrait}
                    alt={s.name}
                    width={600}
                    height={800}
                    sizes="(max-width: 599px) 92vw, (max-width: 959px) 44vw, 300px"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span className="scrim" aria-hidden="true" />
                </div>
                <div className="cardBody">
                  <h3 className="cardName">{s.name}</h3>
                  {affiliation(s) && <p className="cardAffil">{affiliation(s)}</p>}
                  <p className="cardSession">{s.session}</p>
                  <span className="more">
                    Session details
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <SpeakerModal speaker={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

      <style jsx>{`
        .speakers {
          background: #f6f9fc;
          padding: 92px 0 96px;
          /* clears the fixed site header when jumping from the hero anchor */
          scroll-margin-top: 80px;
        }
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* styled-jsx cannot scope a class it finds on a component (motion.*), only
           on plain DOM tags — so classes applied to framer-motion elements are
           prefixed and matched with :global(). */
        :global(.sp26-head) {
          max-width: 720px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .kicker {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b98a12;
        }
        .kicker::after {
          content: "";
          display: block;
          width: 52px;
          height: 3px;
          margin: 12px auto 0;
          border-radius: 2px;
          background: linear-gradient(90deg, #ffd875, #f0ab21);
        }
        .title {
          margin: 20px 0 0;
          font-size: clamp(2rem, 4vw, 2.9rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #06203f;
        }
        .lede {
          margin: 16px 0 0;
          font-size: 1.02rem;
          line-height: 1.7;
          color: #5a6b7d;
        }

        /* -------- spotlight -------- */
        .spotlightRow {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 26px;
          margin-bottom: 30px;
        }
        :global(.sp26-spot) {
          margin: 0;
        }
        .spotBtn {
          display: grid;
          grid-template-columns: 230px 1fr;
          width: 100%;
          padding: 0;
          border: 1px solid #e4ecf3;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          text-align: left;
          cursor: pointer;
          font: inherit;
          box-shadow: 0 8px 26px rgba(6, 32, 63, 0.07);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .spotBtn:hover,
        .spotBtn:focus-visible {
          transform: translateY(-6px);
          box-shadow: 0 22px 48px rgba(6, 32, 63, 0.16);
          border-color: #f0ab21;
        }
        .spotArt {
          position: relative;
          background: #0a3c73;
          min-height: 300px;
          overflow: hidden;
        }
        .spotBtn:hover .spotArt :global(img) {
          transform: scale(1.05);
        }
        .spotArt :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .spotBody {
          padding: 30px 28px;
          display: flex;
          flex-direction: column;
        }
        .spotName {
          margin: 0;
          font-size: 1.42rem;
          font-weight: 800;
          line-height: 1.25;
          color: #06203f;
        }
        .spotAffil {
          margin: 8px 0 0;
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.5;
          color: #0b6ba8;
        }
        .spotSession {
          margin: 18px 0 0;
          font-size: 0.97rem;
          font-weight: 600;
          line-height: 1.5;
          color: #35485e;
        }

        /* -------- grid -------- */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        :global(.sp26-card) {
          margin: 0;
        }
        .cardBtn {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 0;
          border: 1px solid #e4ecf3;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          text-align: left;
          cursor: pointer;
          font: inherit;
          box-shadow: 0 8px 26px rgba(6, 32, 63, 0.07);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .cardBtn:hover,
        .cardBtn:focus-visible {
          transform: translateY(-6px);
          box-shadow: 0 22px 48px rgba(6, 32, 63, 0.16);
          border-color: #f0ab21;
        }
        .cardArt {
          position: relative;
          aspect-ratio: 3 / 4;
          background: #0a3c73;
          overflow: hidden;
        }
        .cardArt :global(img) {
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cardBtn:hover .cardArt :global(img) {
          transform: scale(1.05);
        }
        .scrim {
          position: absolute;
          inset: auto 0 0 0;
          height: 38%;
          background: linear-gradient(
            to top,
            rgba(6, 32, 63, 0.5),
            rgba(6, 32, 63, 0)
          );
          pointer-events: none;
        }
        .cardBody {
          padding: 24px 22px 26px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .cardName {
          margin: 0;
          font-size: 1.16rem;
          font-weight: 800;
          line-height: 1.25;
          color: #06203f;
        }
        .cardAffil {
          margin: 7px 0 0;
          font-size: 0.78rem;
          font-weight: 600;
          line-height: 1.5;
          color: #0b6ba8;
        }
        .cardSession {
          margin: 15px 0 0;
          font-size: 0.9rem;
          line-height: 1.55;
          color: #46566b;
        }

        .more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 20px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #b98a12;
        }
        .more :global(i) {
          font-size: 0.7rem;
          transition: transform 0.25s ease;
        }
        .cardBtn:hover .more :global(i),
        .spotBtn:hover .more :global(i) {
          transform: translateX(4px);
        }

        @media (max-width: 959px) {
          .speakers {
            padding: 68px 0 72px;
          }
          .spotlightRow {
            grid-template-columns: 1fr;
          }
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 599px) {
          .wrap {
            padding: 0 18px;
          }
          .spotBtn {
            grid-template-columns: 130px 1fr;
          }
          .spotArt {
            min-height: 0;
          }
          .spotBody {
            padding: 22px 20px;
          }
          .spotName {
            font-size: 1.16rem;
          }
          /* Single column at phone width would blow the 3:4 portraits up to full
             bleed — go horizontal instead, matching the spotlight cards. */
          .grid {
            grid-template-columns: 1fr;
          }
          .cardBtn {
            display: grid;
            grid-template-columns: 130px 1fr;
          }
          .cardArt {
            aspect-ratio: auto;
            min-height: 100%;
          }
          .cardArt :global(img) {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .cardBody {
            padding: 22px 20px;
          }
          .cardName {
            font-size: 1.08rem;
          }
        }
      `}</style>
    </section>
  );
}
