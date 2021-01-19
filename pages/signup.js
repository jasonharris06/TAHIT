/*eslint-disable*/
import React from "react";
import { useState, useEffect } from 'react'
import Link from "next/link"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
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
import PhoneIcon from '@material-ui/icons/Phone';
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
import Muted from "components/Typography/Muted.js";

import signupPageStyle from "assets/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

import image from "assets/img/background-gradient.jpg"

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const [errorMsg, setErrorMsg] = useState()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    rpassword: ''

  })


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

  async function onSubmit(e) {
    e.preventDefault()

    const body = {

      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      email: e.currentTarget.email.value,
      phone: e.currentTarget.phone.value,
      password: e.currentTarget.password.value,
      rpassword: e.currentTarget.rpassword.value,

    }
    console.log(body)
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })


    if (res.status === 409) {
      const text = await res.text()
      setErrorMsg(text)
    }
    if (res.status === 201) {
      const userObj = await res.json()
      // set user to useSWR state
      mutate(userObj)
    } else {
      setErrorMsg(await res.text())
    }
  }

  async function handleChange(e) {
    const clone = { ...form }
    console.log(clone)
    switch (e.currentTarget.name) {
      case "firstName":
        clone.firstName = e.currentTarget.value
        setForm(clone)
        console.log(form.firstName)
        break;
      case "lastName":
        clone.lastName = e.currentTarget.value
        setForm(clone)
        break;
      case "email":
        clone.email = e.currentTarget.value
        setForm(clone)
        break;
      case "phone":
        clone.phone = clone.phone.length < 11 ? e.currentTarget.value : clone.phone
        setForm(clone)
        break
      case "password":
        clone.password = e.currentTarget.value
        setForm(clone)

        break
      case "rpassword":
        clone.rpassword = e.currentTarget.value
        setForm(clone)
        break


    }
    console.log("I was clicked")
    console.log(e.currentTarget.name)
  }

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

        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Register</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                      {/* <InfoArea
                        className={classes.infoArea}
                        title="Marketing"
                        description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Fully Coded in HTML5"
                        description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                        icon={Code}
                        iconColor="primary"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Built Audience"
                        description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                        icon={Group}
                        iconColor="info"
                      /> */}
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
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
                      {form && <form className={classes.form} onSubmit={onSubmit}>
                        <CustomInput
                          labelText="First Name..."
                          success={form.firstName.length != 0 ? true : false}

                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{

                            endAdornment: (
                              <InputAdornment
                                position="end"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),

                            onChange: handleChange,
                            type: "text",
                            name: "firstName",
                            required: true,
                            value: form.firstName


                          }}

                        />
                        <CustomInput
                          labelText="Last Name..."
                          success={form.lastName.length != 0 ? true : false}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            onChange: handleChange,

                            type: "text",
                            name: "lastName",
                            required: true,
                            value: form.lastName

                          }}

                        />
                        <CustomInput
                          labelText="Email..."
                          success={(form.email.length != 0 && form.email.includes("@")) ? true : false}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            onChange: handleChange,
                            type: "email",
                            name: "email",
                            required: true,

                          }}
                        />
                        <CustomInput
                          labelText="Phone..."
                          success={form.phone.length === 10 ? true : false}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <PhoneIcon className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            onChange: handleChange,
                            type: "number",
                            name: "phone",
                            required: true,
                            value: form.phone



                          }}
                        />

                        <CustomInput
                          labelText="Password..."
                          success={form.password.length >= 6 ? true : false}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            onChange: handleChange,
                            type: "password",
                            name: "password",
                            required: true,
                            placeholder: "Password...",
                            value: form.password
                          }}
                        />

                        <CustomInput
                          labelText="Re-enter Password..."
                          success={form.rpassword.length >= 6 && form.password === form.rpassword ? true : false}
                          formControlProps={{

                            error: form.password != form.rpassword ? true : false,
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            onChange: handleChange,
                            type: "password",
                            name: "rpassword",
                            required: true,
                            placeholder: " Re-enter Password...",
                            value: form.rpassword
                          }}
                        />
                        <Muted>
                          <span>Password must be at least 6 characters long</span>
                        </Muted>
                        <FormControlLabel
                          classes={{
                            label: classes.label
                          }}
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => handleToggle(1)}
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                              }}
                              checked={checked.indexOf(1) !== -1 ? true : false}
                            />
                          }
                          label={
                            <span>
                              I agree to the{" "}
                              <a href="#pablo">terms and conditions</a>.
                            </span>
                          }
                        />

                        <div className={classes.textCenter}>
                          {errorMsg && <p className="error">{errorMsg}</p>}
                          <Button type="submit" round color="primary">
                            Get started
                          </Button>
                        </div>
                      </form>}
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
