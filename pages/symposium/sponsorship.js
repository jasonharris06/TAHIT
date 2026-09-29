/*eslint-disable*/
import React from "react";
import SiteHeader from "../../components/Header/SiteHeader.js";

// sections for this page
import SectionFooter from "../../pages-sections/components/SectionFooterTahit.js";
import SectionAboutHero from "../../pages-sections/sections-page/SectionAboutHero.js";
import SectionPastSymposia from "../../pages-sections/sections-page/SectionPastSymposia.js";
import { symposium2026 as ev } from "../../data/symposium2026.js";

const SPONSOR_ACTIONS = [
  {
    label: "Ask about sponsorship",
    href: "mailto:info@tahit.org?subject=TAHIT%20Symposium%20Sponsorship",
    primary: true,
    icon: "fas fa-arrow-right",
    event: "sponsorship_hero_email"
  },
  {
    label: "Download the Program Flyer",
    href: ev.flyerUrl,
    external: true,
    download: true,
    iconFirst: "fas fa-download",
    event: "sponsorship_hero_flyer"
  }
];

export default function SponsorshipPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <div>
      <SiteHeader {...rest} />

      <SectionAboutHero
        kicker={`${ev.edition} Symposium`}
        title={
          <>
            Sponsor the <span className="accent">TAHIT</span> Symposium
          </>
        }
        lede={`Help advance language access in Texas healthcare. Sponsors make the ${ev.name} possible — reach interpreters, translators, and language access leaders from across the state.`}
        actions={SPONSOR_ACTIONS}
      />

      <SectionPastSymposia showHero={false} heading="Nearly two decades of symposia" />

      <SectionFooter />
    </div>
  );
}
