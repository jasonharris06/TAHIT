/*eslint-disable*/
import React from "react";
import SiteHeader from "../../components/Header/SiteHeader.js";

// core components
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
      <SiteHeader {...rest} />

      <SectionPastSymposia />

      <SectionFooter />
    </div>
  );
}
