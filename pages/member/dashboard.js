/*eslint-disable*/ import React, { useEffect, useState } from "react";
import Image from "next/image"
import { useRouter } from 'next/router'
import Router from "next/router";

// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CircularProgress from '@material-ui/core/CircularProgress';

import Backdrop from '@material-ui/core/Backdrop';

import { useUser } from '../../lib/hooks'
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import SiteHeader from "../../components/Header/SiteHeader.js";
import HeaderLinks from "../../components/Header/MemberHeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
// sections for this page

// import SelectText from "../../pages-sections/"
// import SectionText from "/pages-sections/blog-post/SectionText.js";
// import SectionBlogInfo from "/pages-sections/blog-post/SectionBlogInfo.js";
// import SectionComments from "/pages-sections/blog-post/SectionComments.js";
// import SectionSimilarStories from "/pages-sections/blog-post/SectionSimilarStories.js";

import blogPostPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js";
import User from "../../models/User";

import whiteLogo from "../../assets/img/logo-white.png"
import background from "../../assets/img/greenblue-background.jpg"

const useStyles = makeStyles((blogPostPageStyle));

const newStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))



export default function MemberDashboard() {
  const [user, { mutate }] = useUser()
  const [open, setOpen] = useState(true)
  const router = useRouter()
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (!user) { Router.push("/login") }
    if (user) {
      setOpen(false)
    }
  }, [user]);
  const classes = useStyles();
  const newClasses = newStyles()
  return (
    <>
      <Backdrop className={newClasses.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {user && <div>
        <SiteHeader
          brand={
            <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <Image src={whiteLogo} alt="" width={34} height={34} />
              <span style={{ fontSize: "1rem", fontWeight: 700 }}>
                {`Hello, ${user.profile.salutations ? `${user.profile.salutations} ` : ""}${user.profile.firstName} ${user.profile.lastName}${user.profile.honorifics ? ` ${user.profile.honorifics}` : ""}`}
              </span>
            </span>
          }
          links={<HeaderLinks dropdownHoverColor="info" />}
        />


        <Parallax image={background} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
                <h1 className={classes.title}>
                  Dashboard
                </h1>


              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        {/* <div className={classes.main}>
          <div className={classes.container}>
            <SectionText />
            <SectionBlogInfo />
            <SectionComments />
          </div>
        </div> */}
        <SectionSimilarStories />
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=njsmkp-blog-post"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=njsmkp-blog-post"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://blog.creative-tim.com/?ref=njsmkp-blog-post"
                      target="_blank"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=njsmkp-blog-post"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a
                  href="https://www.creative-tim.com?ref=njsmkp-blog-post"
                  target="_blank"
                >
                  Creative Tim
                </a>{" "}
                for a better web.
              </div>
            </div>
          }
        />
      </div >}
    </>
  );
}
