/*eslint-disable*/
import React from "react";
import SiteHeader from "../../components/Header/SiteHeader.js";
import Link from "next/link"

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Footer from "../../components/Footer/Footer.js";
// sections for this page


import errorPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/errorPageStyles.js";

import image from "../../public/img/background-houstonSkyline.jpg"

const useStyles = makeStyles(errorPageStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <SiteHeader />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>Soon!</h1>
              <h2 className={classes.subTitle}>More info coming soon </h2>
              <h4 className={classes.description}>
                Come back later
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <Link href="/home" className={classes.block}>
                    TAHIT
                  </Link>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Link href="/about-us" className={classes.block}>
                    About us
                  </Link>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    //href="https://www.creative-tim.com/license?ref=njsmkp-signup"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "} TAHIT
            </div>
          </div>
        }
      />
    </div>
  );
}
