/*eslint-disable*/
import React from "react";
import Link from "next/link"
import Router from "next/router";
import { useUser } from '../lib/hooks'
import { useState, useEffect } from 'react'
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
import whiteLogo from "assets/img/logo-white.png"
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Danger from "components/Typography/Danger.js";

import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

import image from "assets/img/background-gradient.jpg"


const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const [user, { mutate }] = useUser()
  const [errorMsg, setErrorMsg] = useState()

  async function onSubmit(e) {
    e.preventDefault()

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }
    console.log(body)
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (res.status === 200) {
      const userObj = await res.json()
      console.log(userObj)
      // set user to useSWR state
      mutate(userObj)

      // // redirect to home if user is authenticated

      // if (user.patient) { Router.push('/patient/dashboard') }
      // else { Router.push('/therapist/dashboard') }
    } else {
      setErrorMsg('Incorrect username or password.')
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (user) { Router.push("/member/dashboard") }

  }), [user];
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
          background: 'linear-gradient(45deg, rgba(69,73,198,1) 20%, rgba(202,74,73,1) 60%, rgba(252,176,69,1) 100%)',
          backgroundSize: "cover",
          backgroundPosition: "top center",
          // filter: "grayscale(0.5)",


        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={5}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Login</h2>
                <CardBody>
                  {errorMsg && <Danger><p className="error">{errorMsg}</p></Danger>}
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      {/* <div className={classes.textCenter}>
                        <Button justIcon round color="twitter">
                          <i className={classes.socials + " fab fa-twitter"} />
                        </Button>
                        {` `}
                        <Button justIcon round color="dribbble">
                          <i className={classes.socials + " fab fa-dribbble"} />
                        </Button>
                        {` `}
                        <Button justIcon round color="facebook">
                          <i
                            className={classes.socials + " fab fa-facebook-f"}
                          />
                        </Button>
                        {` `}
                        <h4 className={classes.socialTitle}>or be classical</h4>
                      </div> */}
                      <form className={classes.form} onSubmit={onSubmit}>

                        <CustomInput
                          labelText="Email"
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
                            name: "email",

                          }}
                        />
                        <CustomInput
                          labelText="Password"
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
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            type: "password",
                            name: "password",

                          }}
                        />

                        <div className={classes.textCenter}>
                          <Button type="submit" round color="login">
                            Get started
                          </Button>
                        </div>
                      </form>
                      <Link href="login/password-reset" as="/login/password-reset">
                        <a >
                          Password Reset
                          </a>
                      </Link>
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
                    <Link href='/home' as="/home" >
                      <a className={classes.block}>
                        TAHIT
                  </a>
                    </Link>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <Link href="/about-us" as="/about-us">
                      <a className={classes.block}>About us</a>
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
