import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import People from "@material-ui/icons/People";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Button from "../../components/CustomButtons/Button.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Accordion from "../../components/Accordion/Accordion.js";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js";


import cardBlog3 from "../../assets/img/background-texture.jpg";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(pricingStyle);

export default function SectionHomeInfo({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>

      {/* Pricing 5 START */}
      <div className={classes.pricingSection}>
        {/* <div className={classes.container}> */}
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>2024 Tahit Symposium:</h2>
            <h4 className={classes.description}>
              Make sure you download or view the symposium booklet            </h4>
            <br />
            <Button color="danger" size="lg" href="/symposium/symposium-2023" style={{ marginRight: '10px' }}>
              View Booklet
            </Button>
            <Button color="info" size="lg" href="https://symposium2023.blob.core.windows.net/symposium/Geometric Shapes Business Company Profile Booklet Cover (4).pdf" style={{ marginRight: '10px' }}>
              <i className="fas fa-download" />
              Download
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>Our Mission:</h2>
            <h4 className={classes.description}>
              To promote language access within healthcare by facilitating training, education, and communication between government, providers, interpreters, translators, and individual stakeholders.  We pursue our mission with a commitment to improving health equity, clinical outcomes, and patient safety for people with limited English proficiency.
            </h4>
            <br />
            {/* <Button
              color="danger"
              size="lg"
              href="https://www.youtube.com/watch?v=89ny6vtP4gQ"
              target="_blank"
            // onClick={handleClick}
            >
              <i className="fas fa-play" />
              Watch video
            </Button> */}
            <GridItem xs={12} sm={8} md={8} >
              <div style={{ marginTop: '12px', paddingTop: "12px", justifyContent: 'center' }}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/89ny6vtP4gQ" title="TAHIT Public Service Announcment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </GridItem>
          </GridItem>


        </GridContainer>

      </div>
      {/* </div> */}
      {/* Pricing 5 END */}
    </div>
  );
}
