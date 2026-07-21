/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

/**
 * Mission statement paired with TAHIT's public service announcement.
 * Split layout so the video is a peer to the copy rather than an afterthought.
 */
export default function SectionMission() {
  return (
    <section className="mis" aria-labelledby="mis-heading">
      <span className="glow" aria-hidden="true" />

      <div className="wrap">
        <motion.div
          className="mis-copy"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker">Our mission</span>
          <h2 id="mis-heading">
            Every patient deserves
            <br />
            to be <span className="accent">understood</span>.
          </h2>
          <p>
            TAHIT promotes language access within healthcare by facilitating training,
            education, and communication between government, providers, interpreters,
            translators, and individual stakeholders.
          </p>
          <p className="sub">
            We pursue that mission with a commitment to improving health equity, clinical
            outcomes, and patient safety for people with limited English proficiency.
          </p>
        </motion.div>

        <motion.div
          className="mis-video"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="frame">
            <iframe
              src="https://www.youtube.com/embed/89ny6vtP4gQ"
              title="TAHIT Public Service Announcement"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .mis {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          padding: 104px 24px 112px;
          background: linear-gradient(165deg, #06203f 0%, #0a3459 55%, #071a30 100%);
          color: #ffffff;
        }
        .glow {
          position: absolute;
          top: -25%;
          right: -10%;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(
            circle,
            rgba(31, 127, 212, 0.28) 0%,
            rgba(31, 127, 212, 0) 68%
          );
        }
        .wrap {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 66px;
          align-items: center;
        }

        .kicker {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(245, 194, 76, 0.12);
          border: 1px solid rgba(245, 194, 76, 0.42);
          color: #f5c24c;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        h2 {
          margin: 24px 0 0;
          font-size: clamp(2rem, 4.4vw, 3rem);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: #ffffff;
        }
        .accent {
          background: linear-gradient(120deg, #ffd875 0%, #f0ab21 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin: 22px 0 0;
          font-size: clamp(0.96rem, 1.6vw, 1.06rem);
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.78);
        }
        .sub {
          margin-top: 14px;
          font-size: 0.94rem;
          color: rgba(255, 255, 255, 0.58);
        }

        .frame {
          position: relative;
          padding-bottom: 56.25%;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 30px 66px rgba(2, 16, 33, 0.5);
        }
        .frame :global(iframe) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 959px) {
          .mis {
            padding: 76px 24px 84px;
          }
          .wrap {
            grid-template-columns: 1fr;
            gap: 44px;
          }
        }
        @media (max-width: 599px) {
          .mis {
            padding: 68px 20px 76px;
          }
        }
      `}</style>
    </section>
  );
}
