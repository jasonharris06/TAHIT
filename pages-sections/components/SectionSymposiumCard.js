import React from "react";
import Data from "data/pastSymposia.json"

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";

import cardBlog1 from "assets/img/examples/card-blog1.jpg";
import cardBlog2 from "assets/img/examples/card-blog2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import blog1 from "assets/img/examples/blog1.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import christian from "assets/img/faces/christian.jpg";
import marc from "assets/img/faces/marc.jpg";
import office1 from "assets/img/examples/office1.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color2 from "assets/img/examples/color2.jpg";
import color3 from "assets/img/examples/color3.jpg";

const useStyles = makeStyles(styles);
//const symposia = Data
export default function SectionCards({ symposia, ...props }) {


  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");
  const [activeRotate4, setActiveRotate4] = React.useState("");
  const [activeRotate5, setActiveRotate5] = React.useState("");
  const [activeRotate6, setActiveRotate6] = React.useState("");
  const [activeRotate7, setActiveRotate7] = React.useState("");
  const [activeRotate8, setActiveRotate8] = React.useState("");
  const [activeRotate9, setActiveRotate9] = React.useState("");
  const [activeRotate10, setActiveRotate10] = React.useState("");
  const [activeRotate11, setActiveRotate11] = React.useState("");
  const [activeRotate12, setActiveRotate12] = React.useState("");
  const [activeRotate13, setActiveRotate13] = React.useState("");
  const [activeRotate14, setActiveRotate14] = React.useState("");
  const [activeRotate15, setActiveRotate15] = React.useState("");
  const [activeRotate16, setActiveRotate16] = React.useState("");
  const [activeRotate17, setActiveRotate17] = React.useState("");
  const [activeRotate18, setActiveRotate18] = React.useState("");
  const [activeRotate19, setActiveRotate19] = React.useState("");
  const [activeRotate20, setActiveRotate20] = React.useState("");


  function hook(active) {
    switch (active) {
      case "activeRotate1":
        return activeRotate1
      case "activeRotate2":
        return activeRotate2
      case "activeRotate3":
        return activeRotate3
      case "activeRotate4":
        return activeRotate4
      case "activeRotate5":
        return activeRotate5
      case "activeRotate6":
        return activeRotate6
      case "activeRotate7":
        return activeRotate7
      case "activeRotate8":
        return activeRotate8
      case "activeRotate9":
        return activeRotate9
      case "activeRotate10":
        return activeRotate10
      case "activeRotate11":
        return activeRotate11
      case "activeRotate12":
        return activeRotate12
      case "activeRotate13":
        return activeRotate13
      case "activeRotate14":
        return activeRotate14
      case "activeRotate15":
        return activeRotate15
      case "activeRotate16":
        return activeRotate16
      case "activeRotate17":
        return activeRotate17
      case "activeRotate18":
        return activeRotate18
      case "activeRotate19":
        return activeRotate19
      default:
        return activeRotate1
    }
  }
  function setRotate(e) {
    let index = parseInt(e.currentTarget.id)
    let active = `activeRotate${index + 1}`
    console.log(active)
    switch (active) {
      case "activeRotate1":
        (activeRotate1 === "" ? setActiveRotate1(classes.activateRotate) : setActiveRotate1(""))
        break;
      case "activeRotate2":
        (activeRotate2 === "" ? setActiveRotate2(classes.activateRotate) : setActiveRotate2(""))
        break;
      case "activeRotate3":
        (activeRotate3 === "" ? setActiveRotate3(classes.activateRotate) : setActiveRotate3(""))
        break;
      case "activeRotate4":
        (activeRotate4 === "" ? setActiveRotate4(classes.activateRotate) : setActiveRotate4(""))
        break;
      case "activeRotate5":
        (activeRotate5 === "" ? setActiveRotate5(classes.activateRotate) : setActiveRotate5(""))
        break;
      case "activeRotate6":
        (activeRotate6 === "" ? setActiveRotate6(classes.activateRotate) : setActiveRotate6(""))
        break;
      case "activeRotate7":
        (activeRotate7 === "" ? setActiveRotate7(classes.activateRotate) : setActiveRotate7(""))
        break;
      case "activeRotate8":
        (activeRotate8 === "" ? setActiveRotate8(classes.activateRotate) : setActiveRotate8(""))
        break;
      case "activeRotate9":
        (activeRotate9 === "" ? setActiveRotate9(classes.activateRotate) : setActiveRotate9(""))
        break;
      case "activeRotate10":
        (activeRotate10 === "" ? setActiveRotate10(classes.activateRotate) : setActiveRotate10(""))
        break;
      case "activeRotate11":
        (activeRotate11 === "" ? setActiveRotate11(classes.activateRotate) : setActiveRotate11(""))
        break;
      case "activeRotate12":
        (activeRotate12 === "" ? setActiveRotate12(classes.activateRotate) : setActiveRotate12(""))
        break;
      case "activeRotate13":
        (activeRotate13 === "" ? setActiveRotate13(classes.activateRotate) : setActiveRotate13(""))
        break;
      case "activeRotate14":
        (activeRotate14 === "" ? setActiveRotate14(classes.activateRotate) : setActiveRotate14(""))
        break;
      case "activeRotate15":
        (activeRotate15 === "" ? setActiveRotate15(classes.activateRotate) : setActiveRotate15(""))
        break;
      case "activeRotate16":
        (activeRotate16 === "" ? setActiveRotate16(classes.activateRotate) : setActiveRotate16(""))
        break;
      case "activeRotate17":
        (activeRotate17 === "" ? setActiveRotate17(classes.activateRotate) : setActiveRotate17(""))
        break;
      case "activeRotate18":
        (activeRotate18 === "" ? setActiveRotate18(classes.activateRotate) : setActiveRotate18(""))
        break;
      case "activeRotate19":
        (activeRotate19 === "" ? setActiveRotate19(classes.activateRotate) : setActiveRotate19(""))
        break;
      case "activeRotate20":
        (activeRotate20 === "" ? setActiveRotate20(classes.activateRotate) : setActiveRotate20(""))
        break;
      default:
        break
    }
  }

  const classes = useStyles();

  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" id="cards">


      {/* MORPHING CARDS START */}
      <div id="morphingCards" className="cd-section">
        <div className={classes.container}>
          <GridContainer>
            {symposia && symposia.map((item, index) => {
              let active = `activeRotate${index + 1}`

              return (
                <GridItem key={item.id} xs={12} sm={6} md={6} lg={4}>
                  <div
                    className={
                      classes.rotatingCardContainer +
                      " " +
                      classes.manualRotate +
                      " " +
                      hook(active)
                    }
                  >
                    <Card className={classes.cardRotate}>
                      <div
                        className={
                          classes.front + " " + classes.wrapperBackground
                        }
                        style={{ backgroundImage: `url(${item.cardBackground.formats?.small?.url})` }}
                      >
                        <CardBody background className={classes.cardBodyRotate}>

                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <h3 className={classes.cardTitleWhite}>
                              {item.symposiumNumber}
                            </h3>
                          </a>
                          <p className={classes.cardDescriptionWhite}>
                            Click Rotate to find out more
             </p>
                          <div className={classes.textCenter}>
                            <Button
                              round
                              color="danger"
                              id={index}
                              onClick={setRotate}
                            >
                              <Refresh /> Rotate
               </Button>
                          </div>
                        </CardBody>
                      </div>
                      <div
                        className={classes.back + " " + classes.wrapperBackground}
                        style={{ backgroundImage: `url(${item.cardBackground.formats?.small?.url})` }}
                      >
                        <CardBody background className={classes.cardBodyRotate} >
                          <h5 className={classes.cardTitleWhite}>{`Information from the ${item.symposiumNumber}`}</h5>
                          <br></br>
                          <p className={classes.cardDescriptionWhite} style={{ textAlign: "left" }} >
                            <b>Host:</b> {item.host} <br />
                            <b>Venue:</b> {item.venue} <br />
                            <b>Attendance:</b> {item.attendance} <br />
                            <b>Dates:</b> {item.dates} <br />
                          </p>
                          <div className={classes.textCenter}>
                            {item.eventPictures.length !== 0 && <Button round justIcon color="info" onClick={props.onclick}>
                              <PhotoAlbumIcon />
                            </Button>}
                            <br />
                            <Button
                              round
                              color="danger"
                              id={index}
                              onClick={setRotate}
                            >
                              <Refresh /> Back...
                            </Button>
                          </div>
                        </CardBody>
                      </div>
                    </Card>
                  </div>
                </GridItem>
              )

            })}

          </GridContainer>

        </div>

      </div>
    </div>
  )
}
