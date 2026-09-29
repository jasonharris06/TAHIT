/*eslint-disable*/
import React from "react";
import SiteHeader from "../components/Header/SiteHeader.js";

// core components
import SectionFooter from "../pages-sections/components/SectionFooterTahit.js";

// Sections for this page
import SectionAboutHero from "../pages-sections/sections-page/SectionAboutHero.js";
import SectionTeam from "../pages-sections/sections-page/SectionBoardTahit.js";

export default function AboutUsPage() {
  // Scroll to top on mount only. Without the dependency array this fired on every
  // render and yanked the page back to the top, breaking in-page anchor links.
  React.useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    }
  }, []);

  return (
    <div>
      <SiteHeader />

      <SectionAboutHero />
      <SectionTeam />

      <SectionFooter />
    </div>
  );
}
