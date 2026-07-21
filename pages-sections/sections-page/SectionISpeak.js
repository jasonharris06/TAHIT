/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

import { trackEvent, setTag } from "../../lib/clarity.js";

const BLOB = "https://symposium2023.blob.core.windows.net/symposium/ispeak_cards";

const LANGUAGES = [
  { lang: "Spanish", native: "Español", href: `${BLOB}/iSPEAKtXsPANISH.pdf` },
  { lang: "Arabic", native: "عربي", dir: "rtl", href: `${BLOB}/SPEAKarabic.pdf` },
  { lang: "Vietnamese", native: "Tiếng Việt", href: `${BLOB}/SPEAK%20Vietnamese.pdf` },
  { lang: "ASL", native: "American Sign Language", href: `${BLOB}/SPEAK%20ASL.pdf` },
  { lang: "Burmese", native: "ဗမာ", href: `${BLOB}/Burmese_I%20Speak%20Texas_WalletCard-2026-01.pdf` },
  { lang: "Cantonese", native: "廣東話", href: `${BLOB}/Cantonese_I%20Speak%20Texas_WalletCard-2026-01.pdf` },
  { lang: "Chinese", native: "中文", href: `${BLOB}/Chinese_I%20Speak%20Texas_WalletCard-2026-01.pdf` }
];

const BENEFITS = [
  { title: "A legal right", body: "Non-English speaking people have a right to free interpretation in their language." },
  { title: "Faster identification", body: "Staff can identify your language immediately and call the right interpreter." },
  { title: "Works everywhere", body: "Hospitals, public assistance, schools, courts, and emergency services." },
  { title: "Never required", body: "The card isn't needed to receive services — it simply makes the process smoother." }
];

const PLACES = [
  { icon: "fas fa-hospital", label: "Hospitals & clinics" },
  { icon: "fas fa-hands-helping", label: "Public assistance" },
  { icon: "fas fa-graduation-cap", label: "Schools & universities" },
  { icon: "fas fa-balance-scale", label: "Courts" },
  { icon: "fas fa-ambulance", label: "Emergency services" },
  { icon: "fas fa-lightbulb", label: "Public utilities" }
];

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function SectionISpeak() {
  return (
    <section className="isp" id="ispeak-cards" aria-labelledby="isp-heading">
      <div className="wrap">
        <motion.div
          className="isp-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          variants={rise}
        >
          <span className="kicker">Free resource</span>
          <h2 id="isp-heading">ISpeak Cards</h2>
          <p className="lede">
            Free, pocket-sized language identification cards that help people with
            limited English proficiency say what language they need — before the
            conversation even starts.
          </p>
        </motion.div>

        {/* ------------------------------------------------------- benefits */}
        <div className="grid benefits">
          {BENEFITS.map((b, i) => (
            <motion.div
              className="isp-benefit"
              key={b.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              variants={rise}
            >
              <span className="tick" aria-hidden="true">
                <i className="fas fa-check" />
              </span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </motion.div>
          ))}
        </div>

        {/* --------------------------------------------------------- places */}
        <motion.div
          className="isp-places"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          variants={rise}
        >
          <h3 className="placesTitle">Where you can use them</h3>
          <ul>
            {PLACES.map((p) => (
              <li key={p.label}>
                <i className={p.icon} aria-hidden="true" />
                {p.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ------------------------------------------------------ downloads */}
        <motion.div
          className="isp-download"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={rise}
        >
          <div className="dlHead">
            <h3>Get your card</h3>
            <p>Download, print, and cut out the card in your language. Seven available.</p>
          </div>

          <div className="grid cards">
            {LANGUAGES.map((l) => (
              <a
                className="langCard"
                key={l.lang}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackEvent("ispeak_card_download");
                  setTag("language", l.lang);
                }}
              >
                <span className="native" dir={l.dir}>
                  {l.native}
                </span>
                <span className="name">{l.lang}</span>
                <span className="dl">
                  <i className="fas fa-download" aria-hidden="true" />
                  PDF
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .isp {
          position: relative;
          background: #ffffff;
          padding: 104px 24px 112px;
          color: #06203f;
          scroll-margin-top: 90px;
        }
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
        }

        :global(.isp-head) {
          max-width: 680px;
          margin: 0 auto 60px;
          text-align: center;
        }
        .kicker {
          display: inline-block;
          padding: 7px 16px;
          border-radius: 999px;
          background: rgba(11, 107, 168, 0.1);
          border: 1px solid rgba(11, 107, 168, 0.32);
          color: #0b6ba8;
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        h2 {
          margin: 20px 0 0;
          font-size: clamp(2.1rem, 4.6vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #06203f;
        }
        .lede {
          margin: 18px 0 0;
          font-size: clamp(0.98rem, 1.7vw, 1.1rem);
          line-height: 1.72;
          color: #5a6b7d;
        }

        .grid {
          display: grid;
          gap: 20px;
        }
        .benefits {
          grid-template-columns: repeat(4, 1fr);
          margin-bottom: 26px;
        }
        :global(.isp-benefit) {
          padding: 28px 24px 30px;
          border: 1px solid #e4ecf3;
          border-radius: 18px;
          background: #fbfdff;
        }
        .tick {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #0b6ba8, #0a3c73);
          color: #fff;
          font-size: 0.78rem;
        }
        :global(.isp-benefit) h3 {
          margin: 18px 0 0;
          font-size: 1.02rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #06203f;
        }
        :global(.isp-benefit) p {
          margin: 8px 0 0;
          font-size: 0.9rem;
          line-height: 1.62;
          color: #5a6b7d;
        }

        /* ---- places ---- */
        :global(.isp-places) {
          margin: 0 0 46px;
          padding: 30px 32px 34px;
          border-radius: 20px;
          background: #f4f8fb;
          border: 1px solid #e4ecf3;
        }
        .placesTitle {
          margin: 0 0 20px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7b8794;
        }
        :global(.isp-places) ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        :global(.isp-places) li {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 18px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid #dfe9f1;
          font-size: 0.88rem;
          font-weight: 600;
          color: #35485e;
        }
        :global(.isp-places) li :global(i) {
          color: #0b6ba8;
          font-size: 0.92rem;
        }

        /* ---- downloads ---- */
        :global(.isp-download) {
          padding: 44px 40px 46px;
          border-radius: 24px;
          background: linear-gradient(160deg, #06203f 0%, #0a3c73 100%);
        }
        .dlHead {
          text-align: center;
          margin-bottom: 30px;
        }
        .dlHead h3 {
          margin: 0;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .dlHead p {
          margin: 10px 0 0;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .cards {
          grid-template-columns: repeat(7, 1fr);
          gap: 14px;
        }
        .langCard {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 22px 12px 16px;
          min-height: 150px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.16);
          text-decoration: none;
          text-align: center;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.3s ease, border-color 0.3s ease;
        }
        .langCard:hover,
        .langCard:focus-visible {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.12);
          border-color: #f0ab21;
          text-decoration: none;
        }
        .native {
          font-size: 1.32rem;
          font-weight: 800;
          line-height: 1.25;
          color: #ffffff;
        }
        .name {
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          margin-top: -8px;
        }
        .dl {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: 100%;
          justify-content: center;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffd98a;
        }
        .dl :global(i) {
          font-size: 0.68rem;
        }

        /* ASL has no native script, so its label runs long — let it shrink. */
        .langCard:nth-child(4) .native {
          font-size: 0.96rem;
        }

        @media (max-width: 1099px) {
          .cards {
            grid-template-columns: repeat(4, 1fr);
          }
          .benefits {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .isp {
            padding: 76px 20px 84px;
          }
          :global(.isp-download) {
            padding: 34px 20px 36px;
          }
          .cards {
            grid-template-columns: repeat(2, 1fr);
          }
          :global(.isp-places) {
            padding: 24px 20px 26px;
          }
        }
        @media (max-width: 479px) {
          .benefits {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
