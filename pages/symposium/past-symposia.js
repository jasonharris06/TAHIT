/*eslint-disable*/
import React from "react";

// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Brand from "../../components/Header/Brand.js";
// sections for this page
import SectionFooter from "../../pages-sections/components/SectionFooterTahit.js";
import SectionPastSymposia from "../../pages-sections/sections-page/SectionPastSymposia.js";

export default function PastSymposiaPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
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

      <SectionPastSymposia />

      <SectionFooter />
    </div>
  );
}
