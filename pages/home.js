/*eslint-disable*/ import React from "react";
import Image from 'next/image'
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Email from "@material-ui/icons/Email";
import Mail from "@material-ui/icons/Mail";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import landingPageStyle from "assets/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";
import NavBar from "components/Header/navBar.js"
import CustomInput from "components/CustomInput/CustomInput.js";

import whiteLogo from "assets/img/logo-white.png"
// Sections for this page
import SectionProduct from "pages-sections/landing-page/SectionProduct.js";
import SectionTeam from "pages-sections/landing-page/SectionTeam.js";
import SectionWork from "pages-sections/landing-page/SectionWork.js";
import SectionFooter from "pages-sections/components/SectionFooterTahit.js";
import SectionPricing from "pages-sections/sections-page/SectionPricingTahit.js"

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>

      <Header
        color="transparent"
        brand={
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <img src={whiteLogo}
                alt="Tahit Logo"
                width={35}
                height={35} /></GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <h5>TAHIT</h5>
            </GridItem>
          </GridContainer>}
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "gradient",
          filter: "dark"
        }}
        {...rest}
      />

      <Parallax image={require("assets/img/background-gradient.jpg")} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <Hidden xsDown>
              <GridItem xs={12} sm={4} md={4}>
                <Image
                  src={whiteLogo}
                  alt="Tahit Logo"
                  width={275}
                  height={275}


                />
              </GridItem>
            </Hidden>
            <GridItem xs={12} sm={8} md={8}>
              <h1 className={classes.title}>Texas Association of Healthcare Interpreters & Translators</h1>
            </GridItem>
            {/* <GridItem xs={12} sm={4} md={4}>
              <></>
            </GridItem> */}
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={8} md={8}>
              <h2 className={classes.title}>Our Mission:</h2>
              <h4>
                Promote language access within healthcare by facilitating training, education, and communication between government, provider, and individual stakeholders.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>

          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <hr />
          <SectionPricing />
          <hr />

          {/* <SectionTeam /> */}
          {/* <SectionWork /> */}
        </div>
      </div>
      <SectionFooter />

    </div>
  );
}
