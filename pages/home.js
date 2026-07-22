/*eslint-disable*/ import React from "react";

// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Brand from "../components/Header/Brand.js";

// Sections for this page
import SectionHomeHero from "../pages-sections/sections-page/SectionHomeHero.js";
import SectionSymposium2026 from "../pages-sections/sections-page/SectionSymposium2026.js";
import SectionSpeakers2026 from "../pages-sections/sections-page/SectionSpeakers2026.js";
import SectionRegister2026 from "../pages-sections/sections-page/SectionRegister2026.js";
import SectionLanguageRights from "../pages-sections/sections-page/SectionLanguageRights.js";
import SectionISpeak from "../pages-sections/sections-page/SectionISpeak.js";
import SectionMission from "../pages-sections/sections-page/SectionMission.js";
import SectionMembership from "../pages-sections/sections-page/SectionMembership.js";
import SectionFooter from "../pages-sections/components/SectionFooterTahit.js";

export default function LandingPage({ ...rest }) {
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
          color: "gradientNavy",
          filter: "dark"
        }}
        {...rest}
      />

      <SectionHomeHero />

      {/* 18th Annual Symposium — Dallas, October 2, 2026 */}
      <SectionSymposium2026 />
      <SectionSpeakers2026 />
      <SectionRegister2026 />

      <SectionLanguageRights />

      <SectionISpeak />
      <SectionMission />

      <SectionMembership />
      <SectionFooter />

    </div>
  );
}
