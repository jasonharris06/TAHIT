/* eslint-disable */
import React from "react";
import Image from "next/image";

import whiteLogo from "../../assets/img/logo-white.png";

/**
 * Shared header wordmark — logo + "TAHIT" in a flex lockup.
 *
 * Not a Grid-based layout: an earlier 6/6 GridContainer version stretched to
 * half the toolbar and ran the wordmark into the first nav item.
 */
export default function Brand() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      <Image src={whiteLogo} alt="" width={34} height={34} />
      <span style={{ fontSize: "1.15rem", fontWeight: 800, letterSpacing: "0.06em" }}>
        TAHIT
      </span>
    </span>
  );
}
