/* eslint-disable */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { symposium2026 as ev } from "../../data/symposium2026.js";
import { trackEvent, setTag } from "../../lib/clarity.js";

/**
 * Membership pricing. Replaces the template's NavPills + MUI pricing cards with a
 * segmented control and plain-CSS cards, so it matches the rest of the rebuilt
 * home page and carries no Material-UI v4 dependency.
 *
 * Copy and prices are carried over verbatim from the original section.
 */
const PLANS = {
  individual: [
    {
      name: "Personal",
      tag: "Yearly membership",
      price: "40",
      featured: true,
      // Ribbon wording is lifted from TAHIT's own plan copy, not invented.
      ribbon: "Best for most individuals",
      blurb:
        "For individuals who are stakeholders in providing language access for LEPs and the Deaf and Hard-of-Hearing. Whether a provider, clinical staff, an administrator, a language professional, or just someone who cares about doing what is right — this is the best choice for most individuals.",
      features: ["Member rate on the annual symposium", "Member discounts on events & webinars"]
    },
    {
      name: "Student",
      tag: "Yearly membership",
      price: "25",
      blurb:
        "It's expensive being a student, and TAHIT wants to lend a hand. Join with your .edu email address and pay a fraction of an individual membership — stay connected to the profession while you study.",
      features: ["Requires a valid .edu email address", "Same member benefits, reduced rate"]
    }
  ],
  organization: [
    {
      name: "Department",
      tag: "5 users",
      price: "125",
      features: ["5 users", "Free initial user upload", "Discount on the yearly TAHIT symposium", "1 admin account"],
      more:
        "This option allows 5 selected individuals within your department to become members and be eligible for member discounts on events, merchandise, and webinars. These movers and shakers on your team can keep a larger group in the loop with everything happening with TAHIT and in the industry."
    },
    {
      name: "Medium business",
      tag: "25 users",
      price: "500",
      featured: true,
      ribbon: "50% savings per user",
      features: ["25 users", "Free initial user upload", "Discount on the yearly TAHIT symposium", "1 admin account"],
      more:
        "This is a 50% savings off the cost of an individual membership, and these individuals will also be eligible for members-only discounts on TAHIT-sponsored events and webinars. Make your whole team feel included in the industry!"
    },
    {
      name: "Large business",
      tag: "500 users",
      price: "3,125",
      features: ["500 users", "Free initial user upload", "Discount on the yearly TAHIT symposium", "1 admin account"],
      more:
        "Corporate memberships are for large agencies and businesses with hundreds of Language Access Professionals. You can provide incredible access to the interpreting and translating professions for your staff, management, or contractors. There is no better way to create an impact on connecting people and ideas in the industry!"
    }
  ]
};

const TABS = [
  { id: "individual", label: "Individual" },
  { id: "organization", label: "Organization" }
];

export default function SectionMembership() {
  const [tab, setTab] = React.useState("individual");
  const plans = PLANS[tab];

  return (
    <section className="mem" id="membership" aria-labelledby="mem-heading">
      <div className="wrap">
        <motion.div
          className="mem-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="kicker">Membership</span>
          <h2 id="mem-heading">Join TAHIT</h2>
          <p className="lede">
            Whether you need a personal membership or cover a whole team, there's a plan
            that fits — and every member saves on the annual symposium.
          </p>

          <div className="tabs" role="tablist" aria-label="Membership type">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                type="button"
                aria-selected={tab === t.id}
                className={tab === t.id ? "tab on" : "tab"}
                onClick={() => {
                  setTab(t.id);
                  trackEvent("membership_tab");
                  setTag("membership_tab", t.id);
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className={`mem-grid cols-${plans.length}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {plans.map((p) => (
              <article className={p.featured ? "card featured" : "card"} key={p.name}>
                {p.ribbon && <span className="ribbon">{p.ribbon}</span>}

                <span className="tag">{p.tag}</span>
                <h3>{p.name}</h3>

                <p className="price">
                  <span className="cur">$</span>
                  {p.price}
                  <span className="per">/year</span>
                </p>

                {p.blurb && <p className="blurb">{p.blurb}</p>}

                <ul className="feats">
                  {p.features.map((f) => (
                    <li key={f}>
                      <i className="fas fa-check" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                {p.more && (
                  <details className="more">
                    <summary>More info</summary>
                    <p>{p.more}</p>
                  </details>
                )}

                <a
                  href={ev.membershipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackEvent("membership_join");
                    setTag("membership_plan", p.name);
                  }}
                >
                  Join now
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </a>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .mem {
          background: #f6f9fc;
          padding: 100px 24px 112px;
          color: #06203f;
          scroll-margin-top: 90px;
        }
        .wrap {
          max-width: 1180px;
          margin: 0 auto;
        }

        :global(.mem-head) {
          max-width: 680px;
          margin: 0 auto 48px;
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

        /* --- segmented control --- */
        .tabs {
          display: inline-flex;
          gap: 4px;
          margin-top: 32px;
          padding: 5px;
          border-radius: 999px;
          background: #e6eef6;
          border: 1px solid #dbe6f0;
        }
        .tab {
          appearance: none;
          border: none;
          cursor: pointer;
          font: inherit;
          padding: 11px 30px;
          border-radius: 999px;
          background: transparent;
          color: #5a6b7d;
          font-size: 0.88rem;
          font-weight: 700;
          transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
        }
        .tab:hover {
          color: #06203f;
        }
        .tab.on {
          background: #ffffff;
          color: #06203f;
          box-shadow: 0 3px 10px rgba(6, 32, 63, 0.12);
        }

        /* --- cards --- */
        :global(.mem-grid) {
          display: grid;
          gap: 24px;
          align-items: start;
        }
        :global(.mem-grid.cols-2) {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          max-width: 780px;
          margin: 0 auto;
        }
        :global(.mem-grid.cols-3) {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 34px 30px 32px;
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid #e4ecf3;
          box-shadow: 0 8px 26px rgba(6, 32, 63, 0.06);
        }
        .card.featured {
          background: linear-gradient(165deg, #06203f 0%, #0a3c73 100%);
          border-color: transparent;
          box-shadow: 0 20px 48px rgba(6, 32, 63, 0.26);
        }
        /* In-flow rather than absolute: these labels are full phrases and would
           collide with the plan name if pinned to the corner. */
        .ribbon {
          align-self: flex-start;
          margin-bottom: 16px;
          padding: 6px 13px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd875, #f0ab21);
          color: #06203f;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .tag {
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          color: #8794a3;
        }
        .card.featured .tag {
          color: rgba(255, 255, 255, 0.55);
        }
        h3 {
          margin: 10px 0 0;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #06203f;
        }
        .card.featured h3 {
          color: #ffffff;
        }

        .price {
          display: flex;
          align-items: baseline;
          gap: 2px;
          margin: 18px 0 0;
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #06203f;
        }
        .card.featured .price {
          color: #ffffff;
        }
        .cur {
          font-size: 1.35rem;
          font-weight: 700;
          transform: translateY(-0.55em);
        }
        .per {
          margin-left: 6px;
          font-size: 0.86rem;
          font-weight: 600;
          letter-spacing: 0;
          color: #8794a3;
        }
        .card.featured .per {
          color: rgba(255, 255, 255, 0.55);
        }

        .blurb {
          margin: 18px 0 0;
          font-size: 0.9rem;
          line-height: 1.65;
          color: #5a6b7d;
        }
        .card.featured .blurb {
          color: rgba(255, 255, 255, 0.72);
        }

        .feats {
          list-style: none;
          margin: 22px 0 0;
          padding: 22px 0 0;
          border-top: 1px solid #eef3f8;
          display: grid;
          gap: 12px;
        }
        .card.featured .feats {
          border-top-color: rgba(255, 255, 255, 0.16);
        }
        .feats li {
          display: flex;
          gap: 11px;
          font-size: 0.9rem;
          line-height: 1.5;
          color: #35485e;
        }
        .card.featured .feats li {
          color: rgba(255, 255, 255, 0.86);
        }
        .feats :global(i) {
          flex: none;
          margin-top: 3px;
          width: 17px;
          height: 17px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #e6f4fb;
          color: #0b6ba8;
          font-size: 0.5rem;
        }
        .card.featured .feats :global(i) {
          background: rgba(255, 255, 255, 0.16);
          color: #ffd98a;
        }

        .more {
          margin-top: 18px;
        }
        .more summary {
          cursor: pointer;
          list-style: none;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #0b6ba8;
        }
        .card.featured .more summary {
          color: #ffd98a;
        }
        .more summary::-webkit-details-marker {
          display: none;
        }
        .more summary::after {
          content: " +";
        }
        .more[open] summary::after {
          content: " –";
        }
        .more p {
          margin: 12px 0 0;
          font-size: 0.86rem;
          line-height: 1.65;
          color: #5a6b7d;
        }
        .card.featured .more p {
          color: rgba(255, 255, 255, 0.7);
        }

        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 0;
          margin-top: 28px;
          padding: 15px 28px;
          border-radius: 999px;
          background: #06203f;
          color: #ffffff !important;
          font-size: 0.92rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }
        a:hover,
        a:focus-visible {
          transform: translateY(-2px);
          background: #0a3c73;
          box-shadow: 0 12px 28px rgba(6, 32, 63, 0.24);
          color: #ffffff !important;
          text-decoration: none;
        }
        .card.featured a {
          background: linear-gradient(135deg, #ffd875 0%, #f0ab21 100%);
          color: #06203f !important;
          box-shadow: 0 12px 30px rgba(240, 171, 33, 0.32);
        }
        .card.featured a:hover {
          background: linear-gradient(135deg, #ffe08d 0%, #f5b433 100%);
          color: #06203f !important;
        }
        a :global(i) {
          font-size: 0.8rem;
          transition: transform 0.25s ease;
        }
        a:hover :global(i) {
          transform: translateX(4px);
        }

        @media (max-width: 959px) {
          :global(.mem-grid.cols-3) {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin: 0 auto;
          }
          :global(.mem-grid.cols-2) {
            grid-template-columns: 1fr;
            max-width: 520px;
          }
        }
        @media (max-width: 599px) {
          .mem {
            padding: 76px 20px 84px;
          }
          .card {
            padding: 28px 24px 28px;
          }
          .tabs {
            width: 100%;
          }
          .tab {
            flex: 1;
            padding: 11px 12px;
          }
        }
      `}</style>
    </section>
  );
}
