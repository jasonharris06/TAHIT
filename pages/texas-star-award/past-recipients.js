/*eslint-disable*/
import React from "react";
import SiteHeader from "../../components/Header/SiteHeader.js";

// core components
import SectionFooter from "../../pages-sections/components/SectionFooterTahit.js";

// Sections for this page
import SectionTexasStarHero from "../../pages-sections/sections-page/SectionTexasStarHero.js";
import SectionTeam from "../../pages-sections/sections-page/SectionTexasStarAward.js";

export default function PastRecipientsPage() {
  React.useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }
  }, []);

  return (
    <div>
      <SiteHeader />

      <SectionTexasStarHero />
      <SectionTeam />

      <SectionFooter />
    </div>
  );
}

