/*eslint-disable*/
import React from "react";
import SiteHeader from "../components/Header/SiteHeader.js";
import Image from "next/image"

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Parallax from "../components/Parallax/Parallax.js";
import SectionFooter from "../pages-sections/components/SectionFooterTahit";
// sections for this page

import logo from "../assets/img/favicon.png"


import aboutUsStyle from "/styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <SiteHeader />
      <Parallax image={require("../assets/img/background-gradient.jpg")} filter="dark" small>
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
              <h1 className={classes.title}>History</h1>
              <div className={classes.title}>

              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <br></br>
          <SectionQuote />
          <br></br> */}
          <br></br>
          <br></br>
          <GridContainer>
            <GridItem sm={12} md={4}>
              <Image
                src={logo}
                alt="Tahit Logo"
                width={275}
                height={275} />
            </GridItem>
            <GridItem sm={12} md={8}>
              <h5>
                The Texas Association of Healthcare Interpreters and Translators (TAHIT) originated from discussions held at the AATIA-HITA Regional Conference on Translation and Interpretation Topics in Austin on July 30-31, 2004. Following a presentation on Healthcare Interpreting by Esther Diaz, a small group of pioneers led by Patricia Yacovone of Austin discussed the possibility of forming a new organization focused on the needs of healthcare interpreters and translators in Texas. Interestingly, a similar impromptu discussion among judiciary interpreters was being held in the next meeting room that resulted in the formation of the Texas Association of Judiciary Interpreters and Translators (TAJIT). Participants went back and forth between the two rooms sharing what was being discussed. As a result, after much deliberation in both rooms, the sister organizations were baptized with similar names.

                Tricia Yacovone came well-prepared for this meeting. She staffed a table at the conference to drum up support for a medical interpreters association which she called “TAMI.” She came with a poster bearing that name as well as a logo designed by her own son.  She led the impromptu discussion described above in which the name of the organization was established as TAHIT and a mission statement was drafted. Soon after that first meeting, Tricia Yacovone and Esther Diaz began the paperwork for TAHIT’s incorporation and non-profit status recognition. TAHIT’s official organizational meeting was held on April 16, 2005, at Driscoll Children’s Hospital in Corpus Christi, Texas.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer justify="left">
            <GridItem sm={12} md={12}>
              The bylaws were approved and the following officers were appointed:
              <ul>
                <li><b>Co-Presidents:</b> Evelyn Ferrer and Patricia Yacovone</li>
                <li><b>Treasurer:</b> Edgardo Garcia</li>
                <li><b>Directors:</b> Doug Green, Liliana McKean, and Esther Diaz</li>
                <li><b>Secretary:</b> Maureen Scharton</li>
              </ul>
              Participants at this first meeting were:
              <ul>
                <li>Agnes Czornor – Memorial Hermann Hospital (Houston)</li>
                <li>Esther Diaz – AATIA (Austin)</li>
                <li>Evelyn Ferrer – Driscoll Children’s Hospital (Corpus Christi)</li>
                <li>Doug Green – MasterWord Services (Houston)</li>
                <li> Ann Johnson – Driscoll Children’s Hospital (Corpus Christi)</li>
                <li> Liliana McKean – Memorial Hermann Hospital (Houston)</li>
                <li>Noemy Mejia – Memorial Hermann Hospital (Houston)</li>
                <li>Iris Moebius – (Austin)</li>
                <li>Orlando Parra – Memorial Hermann Hospital (Houston)</li>
                <li>Yolanda Speece – Southpaw Translations (Brownsville)</li>
                <li> Alina Wilson – Memorial Hermann Hospital (Houston)</li>
                <li> Patricia Yacovone – (Austin)</li>
                <li>Sharon Yon – Driscoll Children’s Hospital (Corpus Christi)</li>
              </ul>
              Absent:
              <ul>
                <li>Edgardo Garcia – Children’s Medical Center Dallas (Dallas)</li>
                <li>Secretary: Maureen Scharton – UT Southwestern University Hospital – St. Paul (Dallas)</li>
                <li>Jorge U. Ungo (Houston) joined TAHIT  in 2007 as Special Events Coordinator and was later elected President by the membership.</li>
              </ul>

              The mission statement was revised in 2010: To promote language access within healthcare by facilitating training, education, and communication between government, provider, and individual stakeholders.
            </GridItem>
          </GridContainer>
          <br></br>

        </div>
      </div>
      <SectionFooter />
    </div>
  );
}
