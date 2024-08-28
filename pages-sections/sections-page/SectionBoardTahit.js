import React from "react";
import Image from "next/image"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//board assets
import Data from "../../data/boardData.json"
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Button from "../../components/CustomButtons/Button.js";
import Muted from "../../components/Typography/Muted.js";

import teamsStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(teamsStyle);
const board = Data
export default function SectionTeams({ ...rest }) {
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
      name: board[index].name,
      image: board[index].image,
      position: board[index].position,
      description: board[index].description
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

          <Image src={modalInfo.image} height={100} width={75} layout="responsive" alt="..." />
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
              <br />
              {/* <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5> */}
            </GridItem>


          </GridContainer>
          <GridContainer>
            {board && board.map((item, index) => {
              return (

                <GridItem xs={12} sm={4} md={4}>
                  <div key={index}>
                    <Card profile raised

                    >

                      <CardAvatar profile background
                      >
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={item.image} alt="..." />
                        </a>

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
                          <h6 className={classes.cardCategory}>{item.position}</h6>
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
                      {/* <CardFooter profile plain className={classes.justifyContent}>
                        <Button justIcon round color="twitter">
                          <i className="fab fa-twitter" />
                        </Button>
                        <Button justIcon round color="facebook">
                          <i className="fab fa-facebook-square" />
                        </Button>

                      </CardFooter> */}
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
