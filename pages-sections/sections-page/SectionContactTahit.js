/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

import { trackEvent } from "../../lib/clarity.js";

/**
 * Who to contact for what. The first entry is the default general inbox.
 */
const TOPICS = [
  { label: "General questions", email: "info@tahit.org", who: "Anything related to TAHIT", icon: "fas fa-comments" },
  { label: "Membership", email: "membership@tahit.org", who: "Membership Chair", icon: "fas fa-id-card" },
  { label: "TAHIT events", email: "VP@tahit.org", who: "Vice President", icon: "fas fa-calendar-alt" },
  { label: "Payment or refund", email: "treasurer@tahit.org", who: "Treasurer", icon: "fas fa-receipt" },
  { label: "Professional development", email: "perfessional.development@tahit.org", who: "Professional Development Chair", icon: "fas fa-graduation-cap" },
  { label: "Community outreach", email: "outreach@tahit.org", who: "Outreach Chair", icon: "fas fa-hands-helping" },
  { label: "Social media", email: "media@tahit.org", who: "Social Media Chair", icon: "fas fa-hashtag" },
  { label: "Evidence-based practices", email: "evidence-practices@tahit.org", who: "Chair of Evidence-based Practices", icon: "fas fa-flask" },
  { label: "History or records", email: "secretary@tahit.org", who: "Secretary", icon: "fas fa-archive" },
  { label: "Other questions", email: "president@tahit.org", who: "President", icon: "fas fa-question-circle" }
];

/**
 * Contact page body: pick a topic, write a message. There is no mail backend,
 * so "send" opens the visitor's email app with everything pre-filled and
 * addressed to the right board member.
 */
export default function SectionContactTahit() {
  const [topic, setTopic] = React.useState(TOPICS[0]);
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const pick = (t) => {
    setTopic(t);
    trackEvent(`contact_topic_${t.email.split("@")[0].toLowerCase()}`);
  };

  const send = (e) => {
    e.preventDefault();
    const body = [
      form.message,
      "",
      "—",
      form.name,
      form.email,
      form.phone
    ]
      .filter((line, i) => i < 3 || line)
      .join("\n");
    const subject = `TAHIT website: ${topic.label}${form.name ? ` — ${form.name}` : ""}`;
    trackEvent("contact_send");
    window.location.href = `mailto:${topic.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact" id="contact-form">
      <div className="wrap">
        <motion.div
          className="ct-topics"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker">Step 1</span>
          <h2 className="heading">What is your question about?</h2>
          <p className="sub">We'll route your message to the right person on the board.</p>

          <div className="topicList" role="radiogroup" aria-label="Question topic">
            {TOPICS.map((t) => {
              const active = t.email === topic.email;
              return (
                <button
                  key={t.email}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  className={`topic${active ? " active" : ""}`}
                  onClick={() => pick(t)}
                >
                  <i className={t.icon} aria-hidden="true" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="ct-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="kicker">Step 2</span>
          <h2 className="heading">Send us a message</h2>
          <p className="to">
            To <strong>{topic.who}</strong> ·{" "}
            <a href={`mailto:${topic.email}`}>{topic.email}</a>
          </p>

          <form onSubmit={send}>
            <div className="row">
              <label>
                <span>Your name</span>
                <input type="text" value={form.name} onChange={update("name")} required autoComplete="name" />
              </label>
              <label>
                <span>Email address</span>
                <input type="email" value={form.email} onChange={update("email")} required autoComplete="email" />
              </label>
            </div>
            <label>
              <span>
                Phone <em>(optional)</em>
              </span>
              <input type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" />
            </label>
            <label>
              <span>Your message</span>
              <textarea rows={6} value={form.message} onChange={update("message")} required />
            </label>

            <button type="submit" className="submit">
              Send message
              <i className="fas fa-paper-plane" aria-hidden="true" />
            </button>
            <p className="hint">
              This opens your email app with your message ready to send. Prefer to write
              directly? Email <a href={`mailto:${topic.email}`}>{topic.email}</a>.
            </p>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .contact {
          background: linear-gradient(180deg, #f4f8fc 0%, #eef4fa 100%);
          padding: 80px 0 110px;
        }
        .wrap {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: start;
        }

        .kicker {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #b7801a;
        }
        .heading {
          margin: 10px 0 0;
          font-family: "Roboto", "Helvetica", Arial, sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #0a1730;
        }
        .sub {
          margin: 10px 0 0;
          font-size: 0.98rem;
          line-height: 1.6;
          color: #4a5a70;
        }

        .topicList {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 26px;
        }
        .topic {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #d6e2ef;
          background: #ffffff;
          color: #0a1730;
          font: inherit;
          font-size: 0.92rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease,
            background 0.2s ease;
        }
        .topic :global(i) {
          flex: none;
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #eef4fa;
          color: #0b6ba8;
          font-size: 0.85rem;
        }
        .topic:hover {
          border-color: #9cc3e6;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(10, 23, 48, 0.08);
        }
        .topic:focus-visible {
          outline: 3px solid rgba(11, 107, 168, 0.35);
          outline-offset: 2px;
        }
        .topic.active {
          background: linear-gradient(160deg, #06203f 0%, #0a3c73 60%, #0b6ba8 100%);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(10, 60, 115, 0.28);
        }
        .topic.active :global(i) {
          background: rgba(245, 194, 76, 0.18);
          color: #f5c24c;
        }

        :global(.ct-card) {
          background: #ffffff;
          border-radius: 22px;
          padding: 40px 40px 34px;
          border: 1px solid #e1eaf4;
          box-shadow: 0 30px 70px rgba(10, 23, 48, 0.1);
        }
        .to {
          margin: 12px 0 0;
          font-size: 0.95rem;
          color: #4a5a70;
        }
        .to strong {
          color: #0a1730;
        }
        .to a,
        .hint a {
          color: #0b6ba8 !important;
          font-weight: 600;
        }

        form {
          margin-top: 26px;
          display: grid;
          gap: 16px;
        }
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        label {
          display: grid;
          gap: 7px;
          margin: 0;
        }
        label span {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #0a1730;
        }
        label em {
          font-style: normal;
          font-weight: 500;
          text-transform: none;
          letter-spacing: 0;
          color: #7a889b;
        }
        input,
        textarea {
          width: 100%;
          padding: 13px 15px;
          border-radius: 12px;
          border: 1px solid #d6e2ef;
          background: #f8fbfe;
          font: inherit;
          font-size: 0.98rem;
          color: #0a1730;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        textarea {
          resize: vertical;
          min-height: 140px;
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #0b6ba8;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(11, 107, 168, 0.14);
        }

        .submit {
          justify-self: start;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          margin-top: 6px;
          padding: 16px 34px;
          border: 0;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffd875 0%, #f0ab21 100%);
          color: #06203f;
          font: inherit;
          font-size: 0.98rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 14px 34px rgba(240, 171, 33, 0.34);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .submit:hover,
        .submit:focus-visible {
          transform: translateY(-3px);
          box-shadow: 0 20px 44px rgba(240, 171, 33, 0.46);
        }
        .hint {
          margin: 0;
          font-size: 0.85rem;
          line-height: 1.55;
          color: #7a889b;
        }

        @media (max-width: 959px) {
          .wrap {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 599px) {
          .contact {
            padding: 56px 0 80px;
          }
          .wrap {
            padding: 0 16px;
          }
          .topicList,
          .row {
            grid-template-columns: 1fr;
          }
          :global(.ct-card) {
            padding: 28px 20px 24px;
          }
          .submit {
            justify-self: stretch;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
