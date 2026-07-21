/*eslint-disable*/ import React from "react";
import Image from "next/image";

// core components
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";

import whiteLogo from "../assets/img/logo-white.png";

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
        brand={
          // Flex lockup — the old 6/6 GridContainer stretched to half the toolbar
          // and ran the wordmark into the first nav item.
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            <Image src={whiteLogo} alt="" width={34} height={34} />
            <span style={{ fontSize: "1.15rem", fontWeight: 800, letterSpacing: "0.06em" }}>
              TAHIT
            </span>
          </span>}
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
