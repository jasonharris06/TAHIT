/* eslint-disable */
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import boardData from "../../data/boardData.json";
import { trackEvent, setTag } from "../../lib/clarity.js";

/** Splits a bio on blank lines into paragraphs — the original data uses "\n\n"
 * between paragraphs and occasional single "\n" within one. */
function paragraphs(text) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function BoardModal({ member, onClose }) {
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
      className="brd26-backdrop"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="brd26-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name} — ${member.position}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="close" onClick={onClose} aria-label="Close bio">
          <i className="fas fa-times" aria-hidden="true" />
        </button>

        <div className="sheetGrid">
          <div className="sheetArt">
            <Image
              src={member.image}
              alt={member.name}
              width={600}
              height={800}
              sizes="(max-width: 767px) 92vw, 320px"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="sheetBody">
            <span className="tag">Board Member</span>
            <h3 className="name">{member.name}</h3>
            <p className="position">
              {member.position}
              {member.electedYears && <span className="elected"> · {member.electedYears}</span>}
            </p>

            <div className="bio">
              {paragraphs(member.description).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        /* Both live on framer-motion components, so styled-jsx can't scope them
           — see the note in the board section stylesheet below. */
        :global(.brd26-backdrop) {
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
        :global(.brd26-sheet) {
          position: relative;
          width: 100%;
          max-width: 860px;
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
          grid-template-columns: 300px 1fr;
        }
        .sheetArt {
          position: relative;
          background: #0a3c73;
        }
        .sheetBody {
          padding: 38px 36px 40px;
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
          font-size: 1.6rem;
          font-weight: 800;
          line-height: 1.2;
          color: #06203f;
        }
        .position {
          margin: 8px 0 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0b6ba8;
        }
        .elected {
          font-weight: 500;
          color: #8794a3;
        }
        .bio {
          margin-top: 22px;
          display: grid;
          gap: 14px;
        }
        .bio p {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.72;
          color: #46566b;
        }
        @media (max-width: 767px) {
          :global(.brd26-backdrop) {
            padding: 0;
            align-items: start;
          }
          :global(.brd26-sheet) {
            border-radius: 0;
            min-height: 100%;
          }
          .sheetGrid {
            grid-template-columns: 1fr;
          }
          .sheetArt {
            height: 260px;
          }
          .sheetBody {
            padding: 26px 22px 40px;
            max-height: none;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function SectionBoardTahit() {
  const [active, setActive] = React.useState(null);

  const open = (member) => {
    setActive(member);
    trackEvent("board_bio_open");
    setTag("board_member", slugify(member.name));
  };

  return (
    <section className="brd" id="board" aria-labelledby="brd-heading">
      <div className="wrap">
        <motion.div
          className="brd26-head"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="kicker">Meet the team</span>
          <h2 id="brd-heading">TAHIT Board Members</h2>
          <p className="lede">
            A volunteer board of interpreters, translators, and healthcare
            professionals who set TAHIT's direction and run its programs.
          </p>
        </motion.div>

        <div className="grid">
          {boardData.map((m, i) => (
            <motion.article
              className="brd26-card"
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="cardBtn" onClick={() => open(m)}>
                <div className="cardArt">
                  <Image
                    src={m.image}
                    alt={m.name}
                    width={600}
                    height={800}
                    sizes="(max-width: 599px) 92vw, (max-width: 959px) 44vw, 300px"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span className="scrim" aria-hidden="true" />
                </div>
                <div className="cardBody">
                  <h3 className="cardName">{m.name}</h3>
                  <p className="cardPos">{m.position}</p>
                  <span className="more">
                    Read bio
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <BoardModal member={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

      <style jsx>{`
        .brd {
          background: #f6f9fc;
          padding: 100px 24px 112px;
          scroll-margin-top: 90px;
        }
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
        }

        /* On framer-motion components, so styled-jsx can't scope them — give them
           a unique prefix and match with :global() instead. */
        :global(.brd26-head) {
          max-width: 680px;
          margin: 0 auto 52px;
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

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        :global(.brd26-card) {
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
          background: linear-gradient(to top, rgba(6, 32, 63, 0.5), rgba(6, 32, 63, 0));
          pointer-events: none;
        }
        .cardBody {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .cardName {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 800;
          line-height: 1.25;
          color: #06203f;
        }
        .cardPos {
          margin: 7px 0 0;
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.5;
          color: #0b6ba8;
        }
        .more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 18px;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #b98a12;
        }
        .more :global(i) {
          font-size: 0.7rem;
          transition: transform 0.25s ease;
        }
        .cardBtn:hover .more :global(i) {
          transform: translateX(4px);
        }

        @media (max-width: 959px) {
          .brd {
            padding: 76px 24px 84px;
          }
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 599px) {
          .wrap {
            padding: 0 4px;
          }
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
