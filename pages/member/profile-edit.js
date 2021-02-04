/*eslint-disable*/
import React, { useState } from "react";
import { useUser } from '../../lib/hooks'
import Router from "next/router";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Parallax from "components/Parallax/Parallax.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SectionProfileForm from "../../pages-sections/sections-page/SectionProfileFormTahit"
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import ImageUpload from 'components/CustomUpload/ImageUpload.js';
import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import SectionFooter from "../../pages-sections/components/SectionFooterTahit";

import whiteLogo from "assets/img/logo-white.png"
import Data from "../../data/profileDropdowns.json"





const useStyles = makeStyles(contactUsStyle);
const dropDownJson = Data
export default function ProfileEdit({ ...rest }) {
  const [user, { mutate }] = useUser()
  //console.log(user)

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
    if (!user) { Router.push("/login") }
  }, [user]);
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
      <Parallax image={require("assets/img/background-gradient.jpg")} filter="dark" small>
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

              <h1 className={classes.title}>Profile</h1>

            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.contactContent}>


          {user && <div className={classes.container}>

            <SectionProfileForm />

          </div>}
        </div>
      </div>
      <SectionFooter />

    </div>
  );
}
