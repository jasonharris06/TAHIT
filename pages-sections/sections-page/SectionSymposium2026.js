/* eslint-disable */
import React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";

import { symposium2026 as ev } from "../../data/symposium2026.js";
import { trackEvent } from "../../lib/clarity.js";

const pad = (n) => String(n).padStart(2, "0");

/** Countdown to the symposium. Renders nothing until mounted so SSR/CSR match. */
function Countdown({ target }) {
  const [left, setLeft] = React.useState(null);

  React.useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      if (diff <= 0) {
        setLeft(null);
        return;
      }
      setLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!left) return null;

  const units = [
    { value: left.days, label: left.days === 1 ? "Day" : "Days" },
    { value: pad(left.hours), label: "Hours" },
    { value: pad(left.minutes), label: "Minutes" },
    { value: pad(left.seconds), label: "Seconds" }
  ];

  return (
    <div className="countdown" aria-label="Time remaining until the symposium">
      {units.map((u) => (
        <div className="unit" key={u.label}>
          <span className="value">{u.value}</span>
          <span className="label">{u.label}</span>
        </div>
      ))}
      <style jsx>{`
        .countdown {
          display: flex;
          gap: 10px;
          margin-top: 34px;
          flex-wrap: wrap;
        }
        .unit {
          min-width: 78px;
          padding: 12px 8px 10px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(6px);
          text-align: center;
        }
        .value {
          display: block;
          font-size: 1.7rem;
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
          font-variant-numeric: tabular-nums;
        }
        .label {
          display: block;
          margin-top: 4px;
          font-size: 0.62rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.62);
        }
        @media (max-width: 599px) {
          .unit {
            min-width: 0;
            flex: 1 1 0;
          }
          .value {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Full-screen PDF viewer for the program flyer. Portalled to <body> because the
 * hero copy sits inside a transformed motion.div, which would otherwise become
 * the containing block for position: fixed.
 */
function FlyerModal({ url, title, onClose }) {
  const closeRef = React.useRef(null);

  React.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current && closeRef.current.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="backdrop" onClick={onClose}>
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bar">
          <span className="barTitle">{title}</span>
          <div className="barActions">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={() => trackEvent("symposium_2026_flyer_download_modal")}
            >
              <i className="fas fa-download" aria-hidden="true" />
              Download
            </a>
            <button type="button" ref={closeRef} onClick={onClose} aria-label="Close flyer">
              <i className="fas fa-times" aria-hidden="true" />
            </button>
          </div>
        </div>
        <iframe className="frame" src={url} title={title} />
      </div>
      <style jsx>{`
        .backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(3, 12, 26, 0.82);
          backdrop-filter: blur(4px);
        }
        .dialog {
          display: flex;
          flex-direction: column;
          width: min(1100px, 100%);
          height: min(92vh, 1400px);
          border-radius: 16px;
          overflow: hidden;
          background: #06203f;
          box-shadow: 0 40px 90px rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.16);
        }
        .bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px 14px 12px 20px;
          color: #ffffff;
        }
        .barTitle {
          font-size: 0.95rem;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .barActions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: none;
        }
        .barActions a,
        .barActions button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 38px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: transparent;
          color: #ffffff !important;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
        }
        .barActions button {
          width: 38px;
          padding: 0;
        }
        .barActions a:hover,
        .barActions button:hover,
        .barActions a:focus-visible,
        .barActions button:focus-visible {
          background: rgba(255, 255, 255, 0.12);
          text-decoration: none;
        }
        .frame {
          flex: 1;
          width: 100%;
          border: 0;
          background: #525659;
        }
      `}</style>
    </div>,
    document.body
  );
}

const FACTS = [
  {
    icon: "fas fa-calendar-alt",
    label: "When",
    value: ev.dateLabel,
    detail: `Doors at ${ev.timeLabel}`
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Where",
    value: ev.venue,
    detail: ev.city
  },
  {
    icon: "fas fa-bullseye",
    label: "This year's focus",
    value: "Federal updates & the road ahead",
    detail: "Policy, accreditation, ethics, remote & AI interpreting"
  }
];

export default function SectionSymposium2026() {
  const [flyerOpen, setFlyerOpen] = React.useState(false);
  const closeFlyer = React.useCallback(() => setFlyerOpen(false), []);

  // Phones and tablets don't render PDFs inside an iframe reliably (iOS shows
  // only page one, Android shows nothing), so there the link just opens the
  // PDF in a new tab and we only intercept it on wider screens.
  const viewFlyer = (e) => {
    trackEvent("symposium_2026_flyer_view");
    if (window.matchMedia("(min-width: 960px)").matches) {
      e.preventDefault();
      setFlyerOpen(true);
    }
  };

  return (
    <section className="symposium" id="symposium-2026">
      {/* ---------------------------------------------------------------- HERO */}
      <div className="glowA" aria-hidden="true" />
      <div className="glowB" aria-hidden="true" />

      <div className="wrap">
        <div className="hero">
          <motion.div
            className="heroCopy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">
              <span className="dot" />
              {ev.edition} · {ev.name}
            </span>

            <h1 className="headline">
              {ev.themeTitle}
              <span className="headlineSub">{ev.themeSubtitle}</span>
            </h1>

            <ul className="meta">
              <li>
                <i className="fas fa-calendar-alt" aria-hidden="true" />
                {ev.dateLabel}
              </li>
              <li>
                <i className="far fa-clock" aria-hidden="true" />
                {ev.timeLabel}
              </li>
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                {ev.venue}, {ev.city}
              </li>
            </ul>

            <div className="ctaRow">
              <a
                className="btnPrimary"
                href={ev.flyerUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() => trackEvent("symposium_2026_flyer_download_hero")}
              >
                <i className="fas fa-download" aria-hidden="true" />
                Download the Program Flyer
              </a>
              <a className="btnGhost" href="#speakers-2026">
                Meet the speakers
              </a>
            </div>

            <p className="flyerNote">
              Registration is now closed. Use the <strong>Download</strong> button to save the
              full 28-page program to your device <span className="flyerMeta">(PDF, 57 MB)</span>
              {" "}— or{" "}
              <a
                className="flyerLink"
                href={ev.flyerUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={viewFlyer}
              >
                <i className="far fa-eye" aria-hidden="true" />
                view it here on the site
              </a>
              .
            </p>

            <Countdown target={ev.startsAt} />
          </motion.div>

          <motion.div
            className="s26-heroArt"
            initial={{ opacity: 0, y: 40, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={ev.flyerUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={viewFlyer}
              className="posterLink"
              aria-label={`View the ${ev.edition} ${ev.name} program flyer`}
            >
              <Image
                src={ev.saveTheDateImage}
                alt={`${ev.edition} ${ev.name} — ${ev.themeTitle}: ${ev.themeSubtitle}. ${ev.dateLabel} at ${ev.venue}, ${ev.city}.`}
                width={1200}
                height={1200}
                priority
                sizes="(max-width: 959px) 90vw, 460px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </a>
          </motion.div>
        </div>

        {/* ------------------------------------------------------------ FACTS */}
        <motion.div
          className="s26-facts"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {FACTS.map((f) => (
            <div className="fact" key={f.label}>
              <i className={f.icon} aria-hidden="true" />
              <div>
                <span className="factLabel">{f.label}</span>
                <p className="factValue">{f.value}</p>
                <p className="factDetail">{f.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {flyerOpen && (
        <FlyerModal
          url={ev.flyerUrl}
          title={`${ev.edition} ${ev.name} — Program Flyer`}
          onClose={closeFlyer}
        />
      )}

      <style jsx>{`
        .symposium {
          position: relative;
          overflow: hidden;
          background: radial-gradient(
              120% 90% at 78% 8%,
              #0f7fc4 0%,
              rgba(15, 127, 196, 0) 55%
            ),
            linear-gradient(160deg, #06203f 0%, #0a3c73 46%, #0b6ba8 100%);
          padding: 96px 0 108px;
          color: #ffffff;
        }
        .glowA,
        .glowB {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(10px);
        }
        .glowA {
          top: -18%;
          right: -8%;
          width: 620px;
          height: 620px;
          background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.22) 0%,
            rgba(56, 189, 248, 0) 68%
          );
        }
        .glowB {
          bottom: -26%;
          left: -12%;
          width: 560px;
          height: 560px;
          background: radial-gradient(
            circle,
            rgba(245, 194, 76, 0.16) 0%,
            rgba(245, 194, 76, 0) 68%
          );
        }
        .wrap {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 64px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 7px 16px 7px 12px;
          border-radius: 999px;
          background: rgba(245, 194, 76, 0.12);
          border: 1px solid rgba(245, 194, 76, 0.42);
          color: #f5c24c;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f5c24c;
          box-shadow: 0 0 0 0 rgba(245, 194, 76, 0.7);
          animation: pulse 2.4s ease-out infinite;
        }
        @keyframes pulse {
          70% {
            box-shadow: 0 0 0 10px rgba(245, 194, 76, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(245, 194, 76, 0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .dot {
            animation: none;
          }
        }

        .headline {
          margin: 22px 0 0;
          font-size: clamp(2.4rem, 5.2vw, 3.9rem);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .headlineSub {
          display: block;
          margin-top: 14px;
          font-size: clamp(1.02rem, 1.9vw, 1.42rem);
          line-height: 1.4;
          font-weight: 500;
          letter-spacing: 0;
          color: #ffd98a;
        }

        .meta {
          list-style: none;
          margin: 28px 0 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px 26px;
        }
        .meta li {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.86);
        }
        .meta :global(i) {
          color: #7fd4ff;
          font-size: 0.92rem;
        }

        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }
        .btnPrimary {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 17px 34px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd875 0%, #f0ab21 100%);
          color: #06203f !important;
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-decoration: none;
          box-shadow: 0 14px 34px rgba(240, 171, 33, 0.36);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .btnPrimary:hover,
        .btnPrimary:focus-visible {
          transform: translateY(-3px);
          box-shadow: 0 20px 44px rgba(240, 171, 33, 0.48);
          color: #06203f !important;
          text-decoration: none;
        }
        .btnPrimary :global(i) {
          transition: transform 0.25s ease;
        }
        .btnPrimary:hover :global(i) {
          transform: translateX(4px);
        }
        .btnGhost {
          display: inline-flex;
          align-items: center;
          padding: 17px 30px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.34);
          color: #ffffff !important;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .btnGhost:hover,
        .btnGhost:focus-visible {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
          color: #ffffff !important;
          text-decoration: none;
        }

        .flyerNote {
          max-width: 560px;
          margin: 18px 0 0;
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.82);
        }
        .flyerNote strong {
          color: #ffd98a;
        }
        .flyerLink {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #7fd4ff !important;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid rgba(127, 212, 255, 0.35);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .flyerLink:hover,
        .flyerLink:focus-visible {
          color: #ffffff !important;
          border-color: #ffffff;
          text-decoration: none;
        }
        .flyerMeta {
          font-weight: 400;
          color: rgba(255, 255, 255, 0.55);
        }

        /* styled-jsx cannot scope a class it finds on a component (motion.div), only
           on plain DOM tags — so classes applied to framer-motion elements are
           prefixed and matched with :global(). */
        :global(.s26-heroArt) {
          position: relative;
        }
        .posterLink {
          display: block;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 34px 70px rgba(2, 16, 33, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .posterLink:hover {
          transform: translateY(-6px) scale(1.015);
          box-shadow: 0 42px 84px rgba(2, 16, 33, 0.62);
        }

        :global(.s26-facts) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 78px;
          padding-top: 46px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }
        .fact {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .fact :global(i) {
          flex: none;
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #f5c24c;
          font-size: 1rem;
        }
        .factLabel {
          display: block;
          font-size: 0.63rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
        }
        .factValue {
          margin: 6px 0 3px;
          font-size: 1.02rem;
          font-weight: 700;
          line-height: 1.35;
          color: #ffffff;
        }
        .factDetail {
          margin: 0;
          font-size: 0.86rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.66);
        }

        @media (max-width: 959px) {
          .symposium {
            padding: 68px 0 84px;
          }
          .hero {
            grid-template-columns: 1fr;
            gap: 46px;
          }
          :global(.s26-heroArt) {
            max-width: 460px;
            margin: 0 auto;
          }
          :global(.s26-facts) {
            grid-template-columns: 1fr;
            gap: 26px;
            margin-top: 58px;
            padding-top: 36px;
          }
        }
        @media (max-width: 599px) {
          .wrap {
            padding: 0 18px;
          }
          .ctaRow {
            flex-direction: column;
            align-items: stretch;
          }
          .btnPrimary,
          .btnGhost {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
