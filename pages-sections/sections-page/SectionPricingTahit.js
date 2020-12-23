import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import NavPills from "components/NavPills/NavPills.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";

import pricingStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js";

import bg11 from "assets/img/bg11.jpg";
import city from "assets/img/examples/city.jpg";
import cardBlog3 from "assets/img/background-texture.jpg";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>

      {/* Pricing 5 START */}
      <div className={classes.pricingSection}>
        {/* <div className={classes.container}> */}
        <GridContainer>
          <GridItem
            xs={12}
            sm={5}
            md={5}
            className={classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter}
          >
            <h2 className={classes.title}>
              Membership Pricing
              </h2>
            <p className={classes.description}>
              If you need a personal membership, or an organization membership we have the right plan for you.
              </p>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={12}
            className={classes.cardCategory + " " + classes.mlAuto + " " + classes.mrAuto}
          >
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Personal",
                  tabContent: (
                    <GridContainer>
                      <GridItem xs={12} sm={4} md={4}
                        className={classes.cardCategory + " " + classes.mlAuto + " " + classes.mrAuto}>
                        <Card
                          pricing
                          background
                          style={{ backgroundImage: `url(${cardBlog3})` }}
                        >
                          <CardBody pricing background>
                            <h6
                              className={
                                classes.cardCategoryFullWhite
                              }
                            >
                              Yearly Membership
                              </h6>
                            <div className={classes.iconWrapper}>
                              <People className={classes.iconInfo} />
                            </div>
                            <h3
                              className={
                                classes.cardTitle + " " + classes.marginTop30
                              }
                            >
                              $35
                            </h3>
                            <p className={classes.cardDescription}>
                              Start enjoying the personal benefits of becoming a TAHIT member today.
                            </p>
                          </CardBody>
                          <CardFooter
                            pricing
                            className={classes.justifyContentCenter}
                          >
                            <Button color="rose" round>
                              BUY NOW
                              </Button>
                          </CardFooter>
                          {/* <Button round color="info">
                                Choose plan
                            </Button> */}
                          {/* <CardFooter
                              pricing
                              className={classes.justifyContentCenter}
                            >
                              <Button color="primary" round>
                                FREE DOWNLOAD
                              </Button>
                            </CardFooter> */}

                        </Card>
                      </GridItem>

                    </GridContainer>
                  )
                },
                {
                  tabButton: "Commercial",
                  tabContent: (

                    <GridContainer>
                      <GridItem xs={12} sm={4} md={4}>
                        <Card pricing plain>
                          <CardBody pricing plain>
                            <h6 className={classes.cardCategory}>SMALL BUSINESS</h6>
                            <h1 className={classes.cardTitle}>
                              <small>$</small>299 <small>/yr</small>
                            </h1>
                            <ul>
                              <li>
                                <b>20</b> Users
                            </li>
                              <li>
                                <b>Free</b> Inital User Upload
                            </li>
                              <li>
                                <b>Discount</b> on Yearly TAHIT Symposium
                            </li>
                              <li>
                                <b>1</b> Admin Account
                                <p className={classes.cardDescription}>
                                  Dashboard of organization users with the ability to add/remove users
                            </p>
                              </li>
                            </ul>
                          </CardBody>
                          <CardFooter pricing className={classes.justifyContentCenter}>
                            <Button color="rose" round>
                              Get Started
                          </Button>
                          </CardFooter>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={4} md={4}>
                        <Card
                          pricing
                          raised
                          background
                          style={{ backgroundImage: `url(${cardBlog3})` }}
                        >
                          <CardBody pricing background>
                            <h6 className={classes.cardCategoryWhite}>MEDIUM BUSINESS</h6>
                            <h1 className={classes.cardTitleWhite}>
                              <small>$</small> 599 <small>/yr</small>
                            </h1>
                            <ul>
                              <li>
                                <b>100</b> Users
                            </li>
                              <li>
                                <b>Free</b> Inital User Upload
                            </li>
                              <li>
                                <b>Discount</b> on Yearly TAHIT Symposium
                            </li>
                              <li>
                                <b>1</b> Admin Account
                                <p className={classes.cardDescription}>
                                  Dashboard of organization users with the ability to add/remove users
                            </p>
                              </li>
                            </ul>
                          </CardBody>
                          <CardFooter pricing className={classes.justifyContentCenter}>
                            <Button color="white" round>
                              Get Started
                          </Button>
                          </CardFooter>
                        </Card>
                      </GridItem>
                      <GridItem xs={12} sm={4} md={4}>
                        <Card pricing plain>
                          <CardBody pricing plain>
                            <h6 className={classes.cardCategory}>LARGE BUSINESS</h6>
                            <h1 className={classes.cardTitle}>
                              <small>$</small> 999 <small>/yr</small>
                            </h1>
                            <ul>
                              <li>
                                <b>500</b> Users
                            </li>
                              <li>
                                <b>Free</b> Inital User Upload
                            </li>
                              <li>
                                <b>Discount</b> on Yearly TAHIT Symposium
                            </li>
                              <li>
                                <b>1</b> Admin Account
                                <p className={classes.cardDescription}>
                                  Dashboard of organization users with the ability to add/remove users
                            </p>
                              </li>
                            </ul>
                          </CardBody>
                          <CardFooter pricing className={classes.justifyContentCenter}>
                            <Button color="rose" round>
                              Get Started
                          </Button>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
      {/* </div> */}
      {/* Pricing 5 END */}
    </div>
  );
}
