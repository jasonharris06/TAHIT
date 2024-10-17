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
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Button from "../../components/CustomButtons/Button.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Accordion from "../../components/Accordion/Accordion.js";
import Success from "../../components/Typography/Success.js";
import Danger from "../../components/Typography/Danger.js";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js";


import cardBlog3 from "../../assets/img/background-texture.jpg";

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
                      <GridItem xs={12} sm={2} md={2}></GridItem>
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
                              Personal Yearly Membership
                            </h6>
                            <div className={classes.iconWrapper}>
                              <People className={classes.iconInfo} />
                            </div>
                            <h3
                              className={
                                classes.cardTitle + " " + classes.marginTop30
                              }
                            >
                              $40
                            </h3>
                            <p className={classes.cardDescription}>
                              These memberships are intended for individuals who are stakeholders in providing language access for LEPs and the Deaf and Hard-of-Hearing.  Whether a provider, clinical staff, an administrator, a language professional, or just an ordinary person who cares about doing what is right, this is the best choice for most individuals.

                            </p>
                          </CardBody>
                          <CardFooter
                            pricing
                            className={classes.justifyContentCenter}
                          >
                            <Button href="https://www.memberplanet.com/Groups/GroupJoinLoginNew.aspx?ISPUB=true&invitee=x4ew44166y4do" color="rose" round>
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
                      <GridItem xs={12} sm={4} md={4}
                        className={classes.cardCategory + " " + classes.mlAuto + " " + classes.mrAuto}>
                        <Card pricing plain
                        >
                          <CardBody pricing plain>
                            <h6
                              className={
                                classes.cardCategoryFullWhite
                              }
                            >
                              Student Yearly Membership
                            </h6>
                            <div className={classes.iconWrapper}>
                              <People className={classes.iconInfo} />
                            </div>
                            <h3
                              className={
                                classes.cardTitle + " " + classes.marginTop30
                              }
                            >
                              $25
                            </h3>
                            <p className={classes.cardDescription}>
                              It's expensive being a student, and TAHIT wants to lend a hand.  If you join as a student with your ".edu" email account, you are eligible for this student membership that costs a fraction of an individual membership.  You may have to survive on ramen, but you can also be connected to the profession.  Join today!.
                            </p>
                          </CardBody>
                          <CardFooter
                            pricing
                            className={classes.justifyContentCenter}
                          >
                            <Button href="https://www.memberplanet.com/Groups/GroupJoinLoginNew.aspx?ISPUB=true&invitee=x4ew44166y4do" color="rose" round>
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
                      <GridItem xs={12} sm={2} md={2}></GridItem>


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
                            <h6 className={classes.cardCategory}>Department Level</h6>
                            <h1 className={classes.cardTitle}>
                              <small>$</small>125 <small>/yr</small>
                            </h1>
                            <Accordion
                              active={1}
                              collapses={[
                                {
                                  title: "More Info",
                                  content: "This option allows the 5 selected individuals within your department to become members and be eligible for member discounts on events, merchandise, and webinars.  These movers and shakers on your team can keep a larger group in the loop with everything happening with TAHIT and in the industry."
                                }
                              ]}
                            />
                            <ul>
                              <li>
                                <b>5</b> Users
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
                            <Button href="https://www.memberplanet.com/Groups/GroupJoinLoginNew.aspx?ISPUB=true&invitee=x4ew44166y4do" color="rose" round>
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

                              <small>$</small> 500 <small>/yr</small>
                            </h1>
                            <Accordion
                              style={{ backgroundColor: "transparent !important" }}
                              active={1}
                              collapses={[
                                {
                                  title: "More Info",
                                  content: "This is a 50% savings off the cost of an individual membership and these individuals will also be eligible for members-only discounts on TAHIT-sponsored events and webinars.  Make your whole team feel included in the industry!"
                                }
                              ]}
                            />
                            <ul>
                              <li>
                                <b>25</b> Users
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
                            <Button href="https://www.memberplanet.com/Groups/GroupJoinLoginNew.aspx?ISPUB=true&invitee=x4ew44166y4do" color="white" round>
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

                              <small>$</small> 3,125 <small>/yr</small>
                            </h1>
                            <Accordion
                              active={1}
                              collapses={[
                                {
                                  title: "More Info",
                                  content: "Corporate Memberships are for large agencies and businesses with hundreds of Language Access Professionals.  You can provide an incredible access to the interpreting and translating professions to your staff, management, or contractors.  There is no better way to create an impact on connecting people and ideas in the industry!"
                                }
                              ]}
                            />
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
                            <Button href="https://www.memberplanet.com/Groups/GroupJoinLoginNew.aspx?ISPUB=true&invitee=x4ew44166y4do" color="rose" round>
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
