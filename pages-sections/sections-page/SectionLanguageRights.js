/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

import { trackEvent } from "../../lib/clarity.js";

/**
 * "Language Access is the Law" — an editorial statement band.
 *
 * Deliberately free of scroll-linked motion: composition and type carry the
 * section, and the only movement is a one-shot entrance plus a hover fan on the
 * card deck. The warm paper tone breaks the run of dark sections above it.
 */
const CARDS = [
  { native: "Español", english: "Spanish", tint: "#0b6ba8" },
  { native: "Tiếng Việt", english: "Vietnamese", tint: "#0f7fc4" },
  { native: "中文", english: "Chinese", tint: "#0a3c73" },
  { native: "العربية", english: "Arabic", lang: "ar", tint: "#12628f" }
];

export default function SectionLanguageRights() {
  return (
    <section className="lr" aria-labelledby="lr-heading">
      {/* Anchor CTAs on this page should glide rather than jump. */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <span className="blob" aria-hidden="true" />
      <span className="rule" aria-hidden="true" />

      <div className="wrap">
        <motion.div
          className="lr-copy"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker">Why it matters</span>
          <h2 id="lr-heading">
            Language access
            <br />
            is <span className="accent">the law</span>.
          </h2>
          <p className="lede">
            Under Title VI of the Civil Rights Act, people with limited English
            proficiency have the right to free interpretation when accessing critical
            services — in a hospital, a clinic, a courtroom, or an emergency.
          </p>
          <p className="sub">
            An ISpeak Texas card makes that right easy to exercise. Pocket-sized, free, and
            available in seven languages.
          </p>
          <a href="#ispeak-cards" onClick={() => trackEvent("rights_ispeak")}>
            Get a free ISpeak Texas card
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          className="lr-deck"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="deck">
            {CARDS.map((c, i) => (
              <div className="card" key={c.english} style={{ "--i": i, "--tint": c.tint }}>
                <span className="cardLabel">I Speak</span>
                <span className="cardNative" lang={c.lang}>
                  {c.native}
                </span>
                <span className="cardEnglish">{c.english}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .lr {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding: 116px 24px 124px;
          background: #f4efe6;
          color: #06203f;
        }
        .blob {
          position: absolute;
          top: -30%;
          right: -8%;
          width: 720px;
          height: 720px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(
            circle,
            rgba(240, 171, 33, 0.16) 0%,
            rgba(240, 171, 33, 0) 68%
          );
        }
        /* Hairline grid, the paper texture of the section */
        .rule {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.5;
          background-image: linear-gradient(rgba(6, 32, 63, 0.05) 1px, transparent 1px);
          background-size: 100% 46px;
          mask-image: linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent);
        }

        .wrap {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 72px;
          align-items: center;
        }

        .kicker {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(240, 171, 33, 0.16);
          border: 1px solid rgba(240, 171, 33, 0.5);
          color: #8a6208;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        h2 {
          margin: 26px 0 0;
          font-size: clamp(2.4rem, 5.6vw, 4.1rem);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.035em;
          color: #06203f;
        }
        .accent {
          position: relative;
          background: linear-gradient(120deg, #f0ab21 0%, #c9820a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .lede {
          margin: 26px 0 0;
          max-width: 520px;
          font-size: clamp(1rem, 1.7vw, 1.12rem);
          line-height: 1.75;
          color: #35485e;
        }
        .sub {
          margin: 16px 0 0;
          max-width: 480px;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #6b7a8c;
        }
        a {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          margin-top: 36px;
          padding: 17px 34px;
          border-radius: 999px;
          background: #06203f;
          color: #ffffff !important;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 12px 30px rgba(6, 32, 63, 0.22);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        a:hover,
        a:focus-visible {
          transform: translateY(-3px);
          background: #0a3c73;
          box-shadow: 0 18px 40px rgba(6, 32, 63, 0.3);
          color: #ffffff !important;
          text-decoration: none;
        }
        a :global(i) {
          font-size: 0.82rem;
          transition: transform 0.25s ease;
        }
        a:hover :global(i) {
          transform: translateX(4px);
        }

        /* --- fanned card deck ------------------------------------------- */
        :global(.lr-deck) {
          display: grid;
          place-items: center;
        }
        .deck {
          position: relative;
          width: 310px;
          height: 452px;
        }
        /* Cards overlap so each one's language peeks out above the next. */
        .card {
          position: absolute;
          left: 0;
          right: 0;
          top: calc(var(--i) * 86px);
          height: 194px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 22px 26px;
          border-radius: 20px;
          background: linear-gradient(155deg, var(--tint) 0%, #06203f 130%);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 -2px 0 rgba(255, 255, 255, 0.08), 0 16px 34px rgba(6, 32, 63, 0.22);
          transform: rotate(calc((var(--i) - 1.5) * 2.2deg));
          transform-origin: center;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;
        }
        /* Spread the stack on hover — the section's one flourish. */
        .deck:hover .card {
          transform: rotate(calc((var(--i) - 1.5) * 3.4deg))
            translateY(calc((var(--i) - 1.5) * 13px))
            translateX(calc((var(--i) - 1.5) * 9px));
          box-shadow: 0 -2px 0 rgba(255, 255, 255, 0.08), 0 24px 52px rgba(6, 32, 63, 0.28);
        }
        .cardLabel {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.62);
        }
        .cardNative {
          font-size: 2.1rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .cardEnglish {
          font-size: 0.9rem;
          font-weight: 600;
          color: #ffd98a;
        }

        @media (max-width: 959px) {
          .lr {
            padding: 84px 24px 92px;
          }
          .wrap {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .lede,
          .sub {
            max-width: none;
          }
        }
        @media (max-width: 599px) {
          .lr {
            padding: 72px 20px 80px;
          }
          .deck {
            width: 100%;
            max-width: 280px;
            height: 400px;
          }
          .card {
            top: calc(var(--i) * 74px);
            height: 178px;
            padding: 18px 22px;
          }
          .cardNative {
            font-size: 1.7rem;
          }
          a {
            width: 100%;
            justify-content: center;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .card,
          .deck:hover .card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
