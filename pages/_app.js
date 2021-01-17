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
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "assets/scss/nextjs-material-kit-pro.scss?v=1.1.0";

import "assets/css/react-demo.css";

import "animate.css/animate.min.css";
import GoogleTagManager from '../components/Google/GoogleTagManager';

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});



export default class MyApp extends App {



  componentDidMount() {
    let comment = document.createComment(`

  =========================================================
  * NextJS Material Kit PRO v1.1.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
  =========================================================

  * Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
  * Copyright 2020 Creative Tim (https://www.creative-tim.com)

  * Coded by Creative Tim

  =========================================================

  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  `);
    document.insertBefore(comment, document.documentElement);
  }



  render() {


    const { Component, pageProps } = this.props;


    return (

      <React.Fragment>
        <GoogleTagManager>
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
        </GoogleTagManager>
      </React.Fragment>

    );
  }
}
