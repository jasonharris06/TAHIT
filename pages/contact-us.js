/*eslint-disable*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Parallax from "../components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import InfoArea from "../components/InfoArea/InfoArea.js";
import CustomInput from "../components/CustomInput/CustomInput.js";
import Button from "../components/CustomButtons/Button.js";
import Footer from "../components/Footer/Footer.js";
import Accordion from "../components/Accordion/AccordionClick.js";

import contactUsStyle from "/styles/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import landingPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";
import CustomDropdown from "../components/CustomDropdown/CustomDropdown.js";
import SectionFooter from "../pages-sections/components/SectionFooterTahit";

import whiteLogo from "../assets/img/logo-white.png"



const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage({ ...rest }) {
  const [title, setTitle] = useState({ email: "info@tahit.org", text: `You can contact us with anything related to TAHIT. We'll get in touch with you as soon as possible.`, dropdownText: "" })

  const dropDown = [
    { email: "membership@tahit.org", text: "Ask the Membership Chair a Question...", dropdownText: "Membership" },
    { email: "perfessional.development@tahit.org", text: "Ask the Professional Development Chair a Question...", dropdownText: "Professional Development" },
    { email: "outreach@tahit.org", text: "Ask the Outreach Chair a Question...", dropdownText: "Community Outreach" },
    { email: "media@tahit.org", text: "Ask the Social Media Chair a Question...", dropdownText: "Social Media" },
    { email: "treasurer@tahit.org", text: "Ask the Treasurer a Question...", dropdownText: "Payment or Refund" },
    { email: "VP@tahit.org", text: "Ask the Vice President a Question...", dropdownText: "Tahit Events" },
    { email: "evidence-practices@tahit.org", text: "Ask the Chair of Evidence-based Practices a Question...", dropdownText: "Evidence-based Practices" },
    { email: "secretary@tahit.org", text: "Ask the Secretary a Question...", dropdownText: "Tahit History or Records" },
    { email: "president@tahit.org", text: "Ask the President a Question...", dropdownText: "Other questions" },


  ]
  function handleOnclick(e) {
    setTitle({
      email: e.currentTarget.getAttribute("data-email"),
      text: e.currentTarget.getAttribute("data-text"),
      dropdownText: e.currentTarget.getAttribute("data-dropdown")
    })
  }
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
      <Parallax image="assets/img/background-gradient.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                // classes.mlAuto,
                // classes.mrAuto,
                classes.textCenter
              )}
            >

              <h1 className={classes.title}>Contact Us</h1>
              <h4 >
                We want to hear from you
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>


          <div className={classes.container}>


            <GridContainer>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                className={
                  classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                }
              >
                <h2 className={classes.title} style={{ color: "black" }}>Send us a message</h2>



              </GridItem>



            </GridContainer>
            <GridContainer >
              <GridItem md={2}></GridItem>
              <GridItem md={8} sm={8}>

                <p style={{ color: "black" }}>
                  {title.text}
                  <br />

                </p>
                <CustomDropdown
                  dropdownHeader="Questions:"
                  buttonText={!title.dropdownText ? "Commonly asked questions" : title.dropdownText}
                  buttonProps={{
                    // href: "#pablo",
                    round: true,
                    block: true,
                    color: "info",

                  }}
                  dropdownList={dropDown.map((item, index) => {
                    return (
                      <div key={index}>
                        <div onClick={handleOnclick} data-email={item.email} data-text={item.text} data-dropdown={item.dropdownText}>{item.dropdownText}</div>
                      </div>)
                  })}

                />
                <form>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Phone"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color="primary" round>
                      Contact us
                    </Button>
                  </div>
                </form>
              </GridItem>
              {/* <GridItem md={4} sm={4} className={classes.mlAuto}>
                <InfoArea
                  className={classes.info}
                  title="Find us at the office"
                  description={
                    <p>
                      Bld Mihail Kogalniceanu, nr. 8, <br /> 7652 Bucharest,{" "}
                      <br /> Romania
                    </p>
                  }
                  icon={PinDrop}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Give us a ring"
                  description={
                    <p>
                      Michael Jordan <br /> +40 762 321 762 <br /> Mon - Fri,
                      8:00-22:00
                    </p>
                  }
                  icon={Phone}
                  iconColor="primary"
                />
                <InfoArea
                  className={classes.info}
                  title="Legal Information"
                  description={
                    <p>
                      Creative Tim Ltd. <br /> VAT · EN2341241 <br /> IBAN ·
                      EN8732ENGB2300099123 <br /> Bank · Great Britain Bank
                    </p>
                  }
                  icon={BusinessCenter}
                  iconColor="primary"
                />
              </GridItem> */}
            </GridContainer>
          </div>
        </div>
      </div>
      <SectionFooter />

    </div>
  );
}
