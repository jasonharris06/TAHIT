import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Data from "../../data/texasStarAward.json";

/* ── shared animation variants ───────────────────────────────────────────── */
const rowVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fromRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function SectionTexasStarAward({ ...rest }) {
  return (
    <section className="tsa" id="past-recipients" style={{ scrollMarginTop: "90px" }} {...rest}>
      <div className="wrap">
        <motion.div
          className="tsa-head"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="kicker">Past Recipients</span>
          <h2>Texas Star Award</h2>
          <p className="lede">
            Honoring outstanding interpreters, translators, and healthcare organizations across Texas.
          </p>
        </motion.div>

        {[...Data].reverse().map((item) => (
          <div key={item.year} className="year-group">

            {/* ── Year heading with animated accent line ── */}
            <motion.div
              className="year-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.span
                className="year-line left"
                variants={lineGrow}
                style={{ originX: 1 }}
              />
              <motion.h3
                className="year-title"
                variants={{ hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
              >
                {item.year}
              </motion.h3>
              <motion.span
                className="year-line right"
                variants={lineGrow}
                style={{ originX: 0 }}
              />
            </motion.div>

            {/* ── Cards – left slides from left, right from right ── */}
            <motion.div
              className="year-grid"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div className="tsa-card" variants={fromLeft} whileHover={{ y: -6, transition: { duration: 0.3 } }}>
                <div className="cardArt person">
                  <Image
                    src={item.individualImg}
                    alt={item.individualName}
                    width={320}
                    height={320}
                    sizes="(max-width: 599px) 88vw, 300px"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                  />
                  <span className="scrim" aria-hidden="true" />
                </div>
                <div className="cardBody">
                  <span className="award-badge individual">Individual Award</span>
                  <h4 className="cardName">{item.individualName}</h4>
                </div>
              </motion.div>

              <motion.div className="tsa-card" variants={fromRight} whileHover={{ y: -6, transition: { duration: 0.3 } }}>
                <div className="cardArt org">
                  <Image
                    src={item.organizationImg}
                    alt={item.organizationName}
                    width={320}
                    height={240}
                    sizes="(max-width: 599px) 88vw, 300px"
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: "24px" }}
                  />
                </div>
                <div className="cardBody">
                  <span className="award-badge organization">Organization Award</span>
                  <h4 className="cardName">{item.organizationName}</h4>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Divider ── */}
            <motion.div
              className="divider-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 1 }}
            >
              <motion.hr
                className="divider"
                variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                style={{ originX: 0.5 }}
              />
            </motion.div>

          </div>
        ))}
      </div>

      <style jsx>{`
        .tsa {
          background: #f6f9fc;
          padding: 100px 24px 112px;
        }
        .wrap {
          max-width: 760px;
          margin: 0 auto;
        }
        :global(.tsa-head) {
          max-width: 680px;
          margin: 0 auto 64px;
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
        h2 {
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

        /* ── Year heading ── */
        .year-header {
          display: flex;
          align-items: center;
          gap: 18px;
          margin: 0 0 28px;
        }
        .year-title {
          flex-shrink: 0;
          font-size: 1.45rem;
          font-weight: 800;
          color: #06203f;
          letter-spacing: -0.01em;
          margin: 0;
          white-space: nowrap;
        }
        .year-line {
          flex: 1;
          display: block;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, #f0ab21, #ffd875);
        }
        .year-line.left  { background: linear-gradient(270deg, #f0ab21, #ffd875 80%, transparent); }
        .year-line.right { background: linear-gradient(90deg,  #f0ab21, #ffd875 80%, transparent); }

        /* ── Cards grid ── */
        :global(.year-grid) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .tsa-card {
          border: 1px solid #e4ecf3;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 8px 26px rgba(6, 32, 63, 0.07);
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .tsa-card:hover {
          box-shadow: 0 22px 48px rgba(6, 32, 63, 0.16);
          border-color: #f0ab21;
        }

        /* Person photo – square crop keeps low-res images from stretching tall */
        .cardArt.person {
          position: relative;
          aspect-ratio: 1 / 1;
          background: #0a3c73;
          overflow: hidden;
        }
        /* Org logo – short landscape box with generous padding */
        .cardArt.org {
          position: relative;
          aspect-ratio: 4 / 3;
          background: #f0f4f8;
          overflow: hidden;
        }
        .cardArt :global(img) {
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .tsa-card:hover .cardArt :global(img) {
          transform: scale(1.05);
        }
        .scrim {
          position: absolute;
          inset: auto 0 0 0;
          height: 36%;
          background: linear-gradient(to top, rgba(6, 32, 63, 0.45), transparent);
          pointer-events: none;
        }
        .cardBody {
          padding: 20px 20px 24px;
        }
        .award-badge {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 999px;
          font-size: 0.63rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .award-badge.individual {
          background: #fff6e2;
          color: #a9750a;
        }
        .award-badge.organization {
          background: #e8f0fe;
          color: #1a56db;
        }
        .cardName {
          margin: 12px 0 0;
          font-size: 1rem;
          font-weight: 800;
          line-height: 1.3;
          color: #06203f;
        }

        /* ── Divider ── */
        .divider-wrap {
          margin: 44px 0;
          overflow: hidden;
        }
        .year-group:last-child .divider-wrap {
          display: none;
        }
        .divider {
          border: none;
          border-top: 1px solid #e4ecf3;
          margin: 0;
        }

        @media (max-width: 599px) {
          .tsa {
            padding: 76px 16px 84px;
          }
          :global(.year-grid) {
            grid-template-columns: 1fr;
          }
          .year-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
