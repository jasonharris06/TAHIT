/*eslint-disable*/
import React from "react";

// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Brand from "../../components/Header/Brand.js";
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

      <SectionTexasStarHero />
      <SectionTeam />

      <SectionFooter />
    </div>
  );
}

