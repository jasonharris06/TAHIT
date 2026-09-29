/*eslint-disable*/
import React from "react";
import SiteHeader from "../components/Header/SiteHeader.js";

// sections for this page
import SectionFooter from "../pages-sections/components/SectionFooterTahit.js";
import SectionAboutHero from "../pages-sections/sections-page/SectionAboutHero.js";
import SectionContactTahit from "../pages-sections/sections-page/SectionContactTahit.js";

const CONTACT_ACTIONS = [
  { label: "Send us a message", href: "#contact-form", primary: true, icon: "fas fa-arrow-down" },
  { label: "info@tahit.org", href: "mailto:info@tahit.org", iconFirst: "far fa-envelope", event: "contact_hero_email" }
];

export default function ContactUsPage({ ...rest }) {
  React.useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }
  }, []);

  return (
    <div>
      <SiteHeader {...rest} />

      <SectionAboutHero
        kicker="Get in touch"
        title={
          <>
            Contact <span className="accent">TAHIT</span>
          </>
        }
        lede="We want to hear from you. Whether it's about membership, the symposium, or language access in your organization, send us a note and the right board member will get back to you."
        actions={CONTACT_ACTIONS}
      />

      <SectionContactTahit />

      <SectionFooter />
    </div>
  );
}
