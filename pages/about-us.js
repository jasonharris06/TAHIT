/*eslint-disable*/
import React from "react";

// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Brand from "../components/Header/Brand.js";
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
      <Header
        color="transparent"
        brand={<Brand />}
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "gradientNavy"
        }}
      />

      <SectionAboutHero />
      <SectionTeam />

      <SectionFooter />
    </div>
  );
}
