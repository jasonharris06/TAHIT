/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { useRegistry } from '../../lib/hooks'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Build from "@material-ui/icons/Build";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionText from "pages-sections/blog-post/SectionText.js";
import SectionBlogInfo from "pages-sections/blog-post/SectionBlogInfo.js";
import SectionComments from "pages-sections/blog-post/SectionComments.js";
import SectionSimilarStories from "pages-sections/blog-post/SectionSimilarStories.js";
import SectionInterpreterRegistry from "pages-sections/sections-page/SectionInterpreterRegistryTahit.js"
import SectionTranslatorRegistry from "pages-sections/sections-page/SectionTranslatorRegistryTahit.js"

import SectionRegistryTahit from "pages-sections/sections-page/SectionRegistryTahit.js"
import SectionRegistryModal from "pages-sections/sections-page/SectionRegistryModal.js"

import blogPostPageStyle from "assets/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import background from "assets/img/greenblue-background.jpg"

import whiteLogo from "assets/img/logo-white.png"
const style = {
  blogPostPageStyle
}
const useStyles = makeStyles(blogPostPageStyle);

export default function RegistryPage() {
  const [registryData, { mutateData }] = useRegistry()
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand={<GridContainer>
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
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      />
      <Parallax image={background} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
                TAHIT Registry
              </h1>
              {/* <h4 className={classes.subtitle}>
                The last 48 hours of my life were total madness. This is what I
                did.
              </h4> */}


            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>

        <CustomTabs
          headerColor="primary"
          tabs={[
            {
              tabName: "Translator Registry",
              tabIcon: RecordVoiceOverIcon,
              tabContent: (
                <>
                  {registryData && <SectionTranslatorRegistry />}
                </>
              )
            },
            {
              tabName: "Interpreter Registry",
              tabIcon: MenuBookIcon,
              tabContent: (
                <SectionInterpreterRegistry />
              )
            }
          ]}
        />
        {/* <SectionText />
          <SectionBlogInfo />
          <SectionComments /> */}
        <SectionRegistryModal />


      </div>
      {/* <SectionSimilarStories /> */}
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
    </div>
  );
}
