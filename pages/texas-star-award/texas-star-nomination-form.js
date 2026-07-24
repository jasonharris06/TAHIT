/*eslint-disable*/
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Brand from "../../components/Header/Brand.js";
import SectionFooter from "../../pages-sections/components/SectionFooterTahit.js";

import whiteLogo from "../../assets/img/logo-white.png";

export default function TexasStarNominationForm() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const rise = {
    hidden: { opacity: 0, y: 26 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <div>
      <Header
        color="transparent"
        brand={<Brand />}
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "gradientNavy",
          filter: "dark"
        }}
      />

      <section className="hero">
        <span className="aurora a1" aria-hidden="true" />
        <span className="aurora a2" aria-hidden="true" />
        <span className="aurora a3" aria-hidden="true" />
        <span className="grain" aria-hidden="true" />

        <div className="wrap">
          <motion.div
            className="hh-mark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ring" aria-hidden="true" />
            <Image src={whiteLogo} alt="" width={132} height={132} priority />
          </motion.div>

          <motion.p className="hh-eyebrow" initial="hidden" animate="visible" custom={1} variants={rise}>
            Texas Star Award
          </motion.p>

          <motion.h1 className="hh-title" initial="hidden" animate="visible" custom={2} variants={rise}>
            Coming Soon
          </motion.h1>

          <motion.p className="hh-lede" initial="hidden" animate="visible" custom={3} variants={rise}>
            More information about the Texas Star Award nomination process is coming soon. Check back later.
          </motion.p>

          <motion.div className="hh-cta" initial="hidden" animate="visible" custom={4} variants={rise}>
            <a href="/home" className="primary">
              Return Home
            </a>
          </motion.div>
        </div>
      </section>

      <SectionFooter />

      <style jsx>{`
        .hero {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 100vh;
          padding: 140px 24px 120px;
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
          top: -22%;
          left: 46%;
          width: 780px;
          height: 780px;
          background: radial-gradient(circle, rgba(31, 127, 212, 0.42) 0%, rgba(31, 127, 212, 0) 66%);
          animation: drift 26s ease-in-out infinite alternate;
        }
        .a2 {
          bottom: -30%;
          left: -14%;
          width: 720px;
          height: 720px;
          background: radial-gradient(circle, rgba(138, 35, 92, 0.4) 0%, rgba(138, 35, 92, 0) 66%);
          animation: drift 32s ease-in-out infinite alternate-reverse;
        }
        .a3 {
          top: 24%;
          right: -12%;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(245, 194, 76, 0.16) 0%, rgba(245, 194, 76, 0) 68%);
          animation: drift 38s ease-in-out infinite alternate;
        }
        @keyframes drift {
          from { transform: translate3d(0, 0, 0) scale(1); }
          to   { transform: translate3d(3%, -4%, 0) scale(1.12); }
        }
        .grain {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.16;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
        }

        .wrap {
          position: relative;
          max-width: 880px;
        }

        :global(.hh-mark) {
          position: relative;
          display: inline-grid;
          place-items: center;
          margin-bottom: 34px;
        }
        .ring {
          position: absolute;
          inset: -26px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
        }
        :global(.hh-mark img) {
          position: relative;
          filter: drop-shadow(0 10px 26px rgba(0, 0, 0, 0.45));
        }

        :global(.hh-eyebrow) {
          margin: 0 0 10px;
          font-size: clamp(0.72rem, 1.5vw, 0.86rem);
          font-weight: 700;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.62);
        }
        :global(.hh-title) {
          margin: 0;
          font-family: "Roboto", "Helvetica", Arial, sans-serif;
          font-size: clamp(2.5rem, 6.4vw, 4.6rem);
          font-weight: 800;
          line-height: 1.02;
          letter-spacing: -0.035em;
          color: #ffffff;
        }
        :global(.hh-lede) {
          margin: 26px auto 0;
          max-width: 660px;
          font-size: clamp(0.98rem, 1.7vw, 1.12rem);
          line-height: 1.72;
          color: rgba(255, 255, 255, 0.74);
        }
        :global(.hh-cta) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 40px;
        }
        .primary {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 17px 34px;
          border-radius: 999px;
          font-size: 0.96rem;
          font-weight: 800;
          text-decoration: none;
          background: linear-gradient(135deg, #ffd875 0%, #f0ab21 100%);
          color: #06203f !important;
          box-shadow: 0 14px 34px rgba(240, 171, 33, 0.34);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .primary:hover,
        .primary:focus-visible {
          transform: translateY(-3px);
          box-shadow: 0 20px 44px rgba(240, 171, 33, 0.46);
          color: #06203f !important;
          text-decoration: none;
        }

        @media (max-width: 599px) {
          .hero {
            padding: 118px 20px 96px;
          }
          :global(.hh-mark img) {
            width: 96px;
            height: 96px;
          }
          :global(.hh-cta) {
            flex-direction: column;
            align-items: stretch;
          }
          .primary {
            justify-content: center;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora { animation: none; }
        }
      `}</style>
    </div>
  );
}
