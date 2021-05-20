/*eslint-disable*/
import React from "react";
import Image from "next/image"
import { API_URL } from '@/config/index'

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

// sections for this page
import SectionDescription from "pages-sections/about-us/SectionDescription.js";
import SectionTeam from "pages-sections/sections-page/SectionBoardTahit.js";
import SectionServices from "pages-sections/about-us/SectionServices.js";
import SectionOffice from "pages-sections/about-us/SectionOffice.js";
import SectionContact from "pages-sections/about-us/SectionContact.js";
import SectionFooter from "pages-sections/components/SectionFooterTahit.js";
import SectionSymposiumCards from "pages-sections/sections-page/SectionPastSymposia.js"

import aboutUsStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js";

import whiteLogo from "assets/img/logo-white.png"

export async function getServerSideProps() {

  const res = await fetch(`${API_URL}/past-symposia`)
  const symposia = await res.json()

  return {
    props: {
      symposia
    }
  }
}

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage({ symposia }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  console.log(symposia)
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand={
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <Image src={whiteLogo}
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

      />
      <Parallax image={require("assets/img/background-gradient.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Past TAHIT Symposia</h1>

            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <SectionDescription /> */}
          <SectionSymposiumCards symposia={symposia} />
          {/* <SectionTeam /> */}
          {/* <SectionServices />
          <SectionOffice />
          <SectionContact /> */}
        </div>
      </div>
      <SectionFooter />
    </div>
  );
}
