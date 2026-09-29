/* eslint-disable */
import React from "react";

import Header from "./Header.js";
import HeaderLinks from "./HeaderLinks.js";
import Brand from "./Brand.js";

/**
 * The site-wide navbar: transparent over the page hero, switching to the navy
 * gradient once the visitor scrolls past it. Every page uses this so the nav
 * looks the same everywhere — change it here, not per page.
 *
 * `brand` can be overridden (the member dashboard adds a greeting).
 */
export default function SiteHeader({ brand, ...rest }) {
  return (
    <Header
      color="transparent"
      brand={brand || <Brand />}
      links={<HeaderLinks dropdownHoverColor="info" />}
      fixed
      changeColorOnScroll={{
        height: 300,
        color: "gradientNavy",
        filter: "dark"
      }}
      {...rest}
    />
  );
}
