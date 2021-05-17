import React from "react";
import Image from "next/image"

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//board assets

// @material-ui/icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components


import bg7 from "assets/img/background-texture.jpg";
import city from "assets/img/examples/city.jpg";
import marc from "assets/img/faces/marc.jpg";
import christian from "assets/img/faces/christian.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import cardProfile1 from "assets/img/examples/card-profile1.jpg";
import cardProfile2 from "assets/img/examples/card-profile2.jpg";
import cardProfile4 from "assets/img/examples/card-profile4.jpg";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ members, ...rest }) {
  const [modal, setModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({
    name: "",
    image: "",
    description: "",
    position: ""
  })

  const classes = useStyles();
  function handleClick(e) {
    e.preventDefault()
    let index = e.currentTarget.id
    setModalInfo({
      name: members[index].name,
      image: members[index].profilePic.url,
      position: members[index].role,
      description: members[index].biography
    })

    setModal(true)
  }

  return (
    <div className="cd-section"  {...rest}>

      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>{modalInfo.position}</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >

          <img src={modalInfo.image} alt="..." />
          <h2>{modalInfo.name}</h2>
          <p>{modalInfo.description}</p>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button onClick={() => setModal(false)} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <div
        // {classNames(classes.section, classes.sectionDark)}
        className={classes.team}

      >

        <div className={classes.sectionGray}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>TAHIT Board Members</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>


          </GridContainer>
          <GridContainer>
            {members && members.map((item, index) => {

              return (

                <GridItem xs={12} sm={4} md={4}>
                  <div key={index}>
                    <Card profile raised

                    >

                      <CardAvatar profile background
                      >

                        <img src={item.profilePic ? item.profilePic.formats?.thumbnail.url : '/img/board/vacant.png'} />


                        {/* <div
                            className={classes.coloredShadow}
                            style={{
                              backgroundImage: `url(${item.image})`,
                              opacity: "1"
                            }}
                          /> */}
                      </CardAvatar>

                      <CardBody plain>
                        <h4 className={classes.cardTitle}>{item.name}</h4>
                        <Muted>
                          <h6 className={classes.cardCategory}>{item.role}</h6>
                        </Muted>
                        <br></br>
                        {/* <p className={classes.description} style={{

                          width: "200px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis"
                        }}>
                          {item.description}
                        </p> */}
                        <Button color="root" id={index} onClick={handleClick}>
                          Read More...
                        </Button>
                      </CardBody>
                      <CardFooter profile plain className={classes.justifyContent}>
                        {item.linkedin && <Button justIcon round color="linkedin">
                          <i className="fab fa-linkedin" />
                        </Button>}
                        {item.twitter && <Button justIcon round color="twitter">
                          <i className="fab fa-twitter" />
                        </Button>}
                        {item.email && <Button justIcon round color="linkedin">
                          <MailOutlineIcon />
                        </Button>}
                        {item.facebook && <Button justIcon round color="facebook">
                          <i className="fab fa-facebook-square" />
                        </Button>}

                      </CardFooter>
                    </Card>
                  </div>
                </GridItem>
              )
            })}

          </GridContainer>
        </div>
      </div>



    </div>
  );
}
