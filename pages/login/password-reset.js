/*eslint-disable*/
import React from "react";
import Link from "next/link"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
import whiteLogo from "../../assets/img/logo-white.png"
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";

import signupPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

import image from "../../assets/img/background-gradient.jpg"

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand={
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <img src={whiteLogo}
                alt="Tahit Logo"
                width={40}
                height={40} /></GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <h5>TAHIT</h5>
            </GridItem>
          </GridContainer>}

        {...rest}
      />
      <div
        className={classes.page}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          // filter: "grayscale(0.5)",


        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Reset Password</h2>
                {/* <h4>Send Password </h4> */}
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>

                      <form className={classes.form}>

                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Email"
                          }}
                        />


                        <div className={classes.textCenter}>
                          <Button round color="login">
                            Reset Password
                          </Button>
                        </div>
                      </form>
                      {/* <Link href="login/password-reset" as="/login/password-reset">
                        <a >
                          Password Reset
                          </a>
                      </Link> */}
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
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
    </div>
  );
}
