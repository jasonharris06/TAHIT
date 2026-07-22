/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

import { symposium2026 as ev } from "../../data/symposium2026.js";
import { trackEvent } from "../../lib/clarity.js";

/**
 * About Us hero. Same visual family as the home page hero (SectionHomeHero) —
 * midnight aurora background, gold-accented title, pill CTAs — sized down for a
 * page that doesn't need a countdown or a poster.
 */
export default function SectionAboutHero() {
  const rise = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <section className="about-hero">
      <span className="aurora a1" aria-hidden="true" />
      <span className="aurora a2" aria-hidden="true" />

      <div className="wrap">
        <motion.p className="kicker" initial="hidden" animate="visible" custom={0} variants={rise}>
          Who we are
        </motion.p>

        <motion.h1 className="title" initial="hidden" animate="visible" custom={1} variants={rise}>
          About <span className="accent">TAHIT</span>
        </motion.h1>

        <motion.p className="lede" initial="hidden" animate="visible" custom={2} variants={rise}>
          The Texas Association of Healthcare Interpreters &amp; Translators is a
          volunteer-led nonprofit board advancing language access across Texas
          healthcare — through training, education, and advocacy for people with
          limited English proficiency.
        </motion.p>

        <motion.div className="cta" initial="hidden" animate="visible" custom={3} variants={rise}>
          <a className="primary" href="#board">
            Meet the board
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </a>
          <a
            className="ghost"
            href={ev.membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("about_hero_membership")}
          >
            Become a member
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .about-hero {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: clamp(440px, 56vh, 620px);
          padding: 150px 24px 96px;
          background:
            radial-gradient(120% 80% at 50% 120%, #0b3f6e 0%, rgba(11, 63, 110, 0) 60%),
            linear-gradient(168deg, #070d1e 0%, #0a1730 45%, #071426 100%);
          color: #ffffff;
        }
        .aurora {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          filter: blur(20px);
        }
        .a1 {
          top: -20%;
          left: 8%;
          width: 620px;
          height: 620px;
          background: radial-gradient(circle, rgba(31, 127, 212, 0.36) 0%, rgba(31, 127, 212, 0) 68%);
        }
        .a2 {
          bottom: -28%;
          right: -6%;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(245, 194, 76, 0.14) 0%, rgba(245, 194, 76, 0) 68%);
        }

        .wrap {
          position: relative;
          max-width: 720px;
        }

        :global(.about-hero .kicker) {
          margin: 0;
          font-size: clamp(0.72rem, 1.5vw, 0.86rem);
          font-weight: 700;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.62);
        }
        :global(.about-hero .title) {
          margin: 18px 0 0;
          font-family: "Roboto", "Helvetica", Arial, sans-serif;
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #ffffff;
        }
        .accent {
          background: linear-gradient(120deg, #ffd875 0%, #f0ab21 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        :global(.about-hero .lede) {
          margin: 24px auto 0;
          max-width: 600px;
          font-size: clamp(0.98rem, 1.7vw, 1.12rem);
          line-height: 1.72;
          color: rgba(255, 255, 255, 0.74);
        }

        :global(.about-hero .cta) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 36px;
        }
        .primary,
        .ghost {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 16px 32px;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease,
            border-color 0.25s ease;
        }
        .primary {
          background: linear-gradient(135deg, #ffd875 0%, #f0ab21 100%);
          color: #06203f !important;
          font-weight: 800;
          box-shadow: 0 14px 34px rgba(240, 171, 33, 0.34);
        }
        .primary:hover,
        .primary:focus-visible {
          transform: translateY(-3px);
          box-shadow: 0 20px 44px rgba(240, 171, 33, 0.46);
          color: #06203f !important;
          text-decoration: none;
        }
        .primary :global(i) {
          font-size: 0.82rem;
          transition: transform 0.25s ease;
        }
        .primary:hover :global(i) {
          transform: translateX(4px);
        }
        .ghost {
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff !important;
        }
        .ghost:hover,
        .ghost:focus-visible {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.58);
          color: #ffffff !important;
          text-decoration: none;
        }

        @media (max-width: 599px) {
          .about-hero {
            min-height: 0;
            padding: 118px 20px 80px;
          }
          :global(.about-hero .cta) {
            flex-direction: column;
            align-items: stretch;
          }
          .primary,
          .ghost {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
