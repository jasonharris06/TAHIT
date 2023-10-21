import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

import Header from "../../components/Header/Header.js";
import Button from "../../components/CustomButtons/Button.js";

import navbarsStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/navbarsStyle.js";

import image from "../../assets/img/bg.jpg";
const useStyles = makeStyles(navbarsStyle);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section + " cd-section"} id="navigation">

      <div id="navbar" className={classes.navbar}>
        <div
          className={classes.navigation}
          style={{ backgroundImage: "url(" + image + ")" }}
        >
          <Header
            brand="Transparent"
            color="transparent"
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button color="transparent" className={classes.navLink}>
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-twitter"
                      }
                    />{" "}
                    Twitter
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button color="transparent" className={classes.navLink}>
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-facebook"
                      }
                    />{" "}
                    Facebook
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button color="transparent" className={classes.navLink}>
                    <i
                      className={
                        classes.socialIcons +
                        " " +
                        classes.marginRight5 +
                        " fab fa-instagram"
                      }
                    />{" "}
                    Instagram
                  </Button>
                </ListItem>
              </List>
            }
          />
        </div>
      </div>
    </div>
  );
}
