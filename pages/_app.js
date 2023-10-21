/*!

=========================================================
* NextJS Material Kit PRO v1.1.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/ct-nextjs-material-kit-pro
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/ct-nextjs-material-kit-pro/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/* eslint-disable */
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import React from "react";
import Head from "next/head";


import "../styles/scss/nextjs-material-kit-pro.scss?v=1.1.0";

import "../styles/css/react-demo.css";

import "animate.css/animate.min.css";








// Removed unused import statement
// import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {



  // componentDidMount() {
  //   let comment = document.createComment(`

  // =========================================================
  // * NextJS Material Kit PRO v1.1.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
  // =========================================================

  // * Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
  // * Copyright 2020 Creative Tim (https://www.creative-tim.com)

  // * Coded by Creative Tim

  // =========================================================

  // * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  // `);
  //   document.insertBefore(comment, document.documentElement);
  // }



  // render() {


  //   const { Component, pageProps } = this.props;
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  return (

    <React.Fragment>

      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          TAHIT
          Texas Association of Healthcare Interpreters & Translators</title>
      </Head>
      <Component {...pageProps} />

    </React.Fragment>

  );
}


export default MyApp