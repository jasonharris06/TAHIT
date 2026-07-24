/*eslint-disable*/
import React from "react";
import Link from "next/link"
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Muted from "../../components/Typography/Muted.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Footer from "../../components/Footer/Footer.js";

import styles from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionFooter() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <Footer
          theme="white"
          content={
            <div>
              <ul className={classes.socialButtons}>
                <li>
                  <Button justIcon simple href="https://twitter.com/tahitus" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="https://www.facebook.com/tahit.us/" color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </li>

                <li>
                  <Button justIcon simple href="https://www.youtube.com/user/TAHITOnline" color="youtube">
                    <i className="fab fa-youtube" />
                  </Button>
                </li>
                <li>
                  <Button justIcon simple href="https://www.linkedin.com/groups/1795560/" color="linkedin">
                    <i className="fab fa-linkedin" />
                  </Button>
                </li>
              </ul>
              <div
                className={classNames(classes.pullCenter, classes.copyRight)}
              >
                Copyright &copy; {1900 + new Date().getYear()}{" "} TAHIT

              </div>
            </div>
          }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={4} sm={3} md={3}>
                <Link href='/home'>
                  <h5>TAHIT</h5>
                </Link>
                <Muted>
                  Texas Association of Healthcare Interpreters and Translators. All rights reserved.
                </Muted>
              </GridItem>
              <GridItem xs={4} sm={2} md={2}>
                <h5>About</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link href="/about-us">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/history">
                      History
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={4} sm={2} md={2}>
                <h5>Symposium</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">How to register</a>
                  </li>
                  <li>
                    <a href="#pablo">Sponsorship</a>
                  </li>
                  <li>
                    <Link href="/symposium/past-symposia">
                      Past Symposia
                    </Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={6} sm={2} md={2}>
                <h5>Legal</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Transactions FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">Terms & conditions</a>
                  </li>
                  <li>
                    <a href="#pablo">Licenses</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={6} sm={2} md={2}>
                <a href="https://www.cafepress.com/tahit#" target="_blank">
                  <h5>Merchandise</h5>
                </a>
              </GridItem>
              {/* <GridItem xs={12} sm={3} md={3}>
                <h5>Contact Us</h5>
                <p>
                  If you have any questions about becoming a member, questions about the orgainization, or anything else TAHIT related please sumbit your question.
                </p>
                <form>
                  <CustomInput
                    id="footeremail"
                    formControlProps={{
                      fullWidth: false,
                      className: classes.customFormControl
                    }}
                    inputProps={{
                      placeholder: "Your Question...",
                      multiline: true,
                      rows: 6
                    }}
                  />

                </form>
                <Button color="primary" >Submit
                  
                </Button>
              </GridItem> */}
            </GridContainer>
          </div>
        </Footer>
      </div>
    </div >
  );
}
