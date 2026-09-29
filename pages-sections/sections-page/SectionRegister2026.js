/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

import { symposium2026 as ev } from "../../data/symposium2026.js";
import { trackEvent } from "../../lib/clarity.js";

/**
 * Closing block for the 2026 symposium, plus a mobile-only sticky flyer
 * download bar that appears once the visitor scrolls past the hero.
 * Registration closed Sept 29, 2026, so the CTAs point at the program flyer.
 */
export default function SectionRegister2026() {
  const [showBar, setShowBar] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="register">
        <div className="glow" aria-hidden="true" />
        <motion.div
          className="rg26-wrap"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker">Registration is closed</span>
          <h2 className="title">
            See you in Dallas on
            <span className="date"> October 2, 2026</span>
          </h2>
          <p className="lede">
            {ev.edition} {ev.name} · {ev.themeTitle}: {ev.themeSubtitle}
          </p>

          <a
            className="btnPrimary"
            href={ev.flyerUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => trackEvent("symposium_2026_flyer_download_footer")}
          >
            <i className="fas fa-download" aria-hidden="true" />
            Download the Program Flyer
          </a>
          <p className="hint">
            Click the button above to download the full 28-page program (PDF, 57 MB) and keep it
            handy on the day.
          </p>

          <p className="venue">
            <i className="fas fa-map-marker-alt" aria-hidden="true" />
            {ev.venue} · {ev.city}
          </p>

          <div className="alt">
            <a
              href={ev.membershipUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("symposium_2026_membership")}
            >
              Become a TAHIT member
            </a>
            <span className="sep" aria-hidden="true">
              ·
            </span>
            <a href={ev.sponsorshipUrl} onClick={() => trackEvent("symposium_2026_sponsorship")}>
              Become a sponsor
            </a>
          </div>
        </motion.div>

        <style jsx>{`
          .register {
            position: relative;
            overflow: hidden;
            background: linear-gradient(150deg, #06203f 0%, #0a3c73 55%, #0b6ba8 100%);
            padding: 92px 24px 100px;
            text-align: center;
            color: #ffffff;
          }
          .glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 900px;
            height: 900px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(
              circle,
              rgba(245, 194, 76, 0.16) 0%,
              rgba(245, 194, 76, 0) 62%
            );
          }
          /* On a framer-motion component, so styled-jsx can't scope it. */
          :global(.rg26-wrap) {
            position: relative;
            z-index: 1;
            max-width: 780px;
            margin: 0 auto;
          }
          .kicker {
            display: inline-block;
            padding: 7px 16px;
            border-radius: 999px;
            background: rgba(245, 194, 76, 0.12);
            border: 1px solid rgba(245, 194, 76, 0.42);
            color: #f5c24c;
            font-size: 0.68rem;
            font-weight: 800;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }
          .title {
            margin: 24px 0 0;
            font-size: clamp(2rem, 4.6vw, 3.1rem);
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -0.02em;
            color: #ffffff;
          }
          .date {
            color: #ffd98a;
          }
          .lede {
            margin: 18px auto 0;
            max-width: 620px;
            font-size: 1rem;
            line-height: 1.65;
            color: rgba(255, 255, 255, 0.78);
          }
          .btnPrimary {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-top: 38px;
            padding: 20px 46px;
            border-radius: 999px;
            background: linear-gradient(135deg, #ffd875 0%, #f0ab21 100%);
            color: #06203f !important;
            font-size: 1.06rem;
            font-weight: 800;
            letter-spacing: 0.02em;
            text-decoration: none;
            box-shadow: 0 16px 40px rgba(240, 171, 33, 0.4);
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .btnPrimary:hover,
          .btnPrimary:focus-visible {
            transform: translateY(-3px);
            box-shadow: 0 24px 54px rgba(240, 171, 33, 0.52);
            color: #06203f !important;
            text-decoration: none;
          }
          .btnPrimary :global(i) {
            transition: transform 0.25s ease;
          }
          .btnPrimary:hover :global(i) {
            transform: translateX(4px);
          }
          .hint {
            margin: 16px auto 0;
            max-width: 460px;
            font-size: 0.9rem;
            line-height: 1.55;
            color: rgba(255, 255, 255, 0.72);
          }
          .venue {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            margin: 26px 0 0;
            font-size: 0.92rem;
            color: rgba(255, 255, 255, 0.72);
          }
          .venue :global(i) {
            color: #7fd4ff;
          }
          .alt {
            margin-top: 30px;
            padding-top: 26px;
            border-top: 1px solid rgba(255, 255, 255, 0.14);
            font-size: 0.88rem;
          }
          .alt :global(a) {
            color: rgba(255, 255, 255, 0.82) !important;
            text-decoration: underline;
            text-underline-offset: 3px;
            text-decoration-color: rgba(255, 255, 255, 0.35);
          }
          .alt :global(a:hover) {
            color: #ffd98a !important;
            text-decoration-color: #ffd98a;
          }
          .sep {
            margin: 0 14px;
            color: rgba(255, 255, 255, 0.4);
          }
          @media (max-width: 599px) {
            .register {
              padding: 68px 18px 76px;
            }
            .btnPrimary {
              width: 100%;
              justify-content: center;
              padding: 18px 24px;
            }
            .sep {
              display: none;
            }
            .alt :global(a) {
              display: block;
              margin-top: 10px;
            }
          }
        `}</style>
      </section>

      {/* ------------------------------------------- mobile sticky register bar */}
      <div className={`stickyBar${showBar ? " visible" : ""}`}>
        <div className="stickyCopy">
          <strong>18th Symposium</strong>
          <span>Oct 2, 2026 · Dallas</span>
        </div>
        <a
          href={ev.flyerUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          onClick={() => trackEvent("symposium_2026_flyer_download_sticky")}
        >
          <i className="fas fa-download" aria-hidden="true" /> Download flyer
        </a>

        <style jsx>{`
          .stickyBar {
            position: fixed;
            left: 12px;
            right: 12px;
            bottom: 12px;
            z-index: 1200;
            display: none;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 12px 12px 12px 18px;
            border-radius: 16px;
            background: rgba(6, 32, 63, 0.96);
            border: 1px solid rgba(255, 255, 255, 0.14);
            box-shadow: 0 16px 40px rgba(2, 16, 33, 0.45);
            transform: translateY(140%);
            opacity: 0;
            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
          }
          .stickyBar.visible {
            transform: translateY(0);
            opacity: 1;
          }
          .stickyCopy {
            display: flex;
            flex-direction: column;
            line-height: 1.3;
            min-width: 0;
          }
          .stickyCopy strong {
            font-size: 0.86rem;
            font-weight: 700;
            color: #ffffff;
          }
          .stickyCopy span {
            font-size: 0.72rem;
            color: rgba(255, 255, 255, 0.6);
          }
          .stickyBar :global(a) {
            flex: none;
            padding: 12px 24px;
            border-radius: 999px;
            background: linear-gradient(135deg, #ffd875 0%, #f0ab21 100%);
            color: #06203f !important;
            font-size: 0.86rem;
            font-weight: 800;
            text-decoration: none;
            white-space: nowrap;
          }
          @media (max-width: 767px) {
            .stickyBar {
              display: flex;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .stickyBar {
              transition: opacity 0.3s ease;
            }
          }
        `}</style>
      </div>
    </>
  );
}
