import React from "react";
import Image from "next/image"
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//board assets
import Data from "data/boardData.json"

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Button from "components/CustomButtons/Button.js";

import SymposiumCard from "pages-sections/components/SectionSymposiumCard.js"

import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

import images from "data/symposiumPhotoGallery.json"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(teamsStyle);
const board = Data
export default function SectionTeams({ symposia, ...rest }) {
  const [modal, setModal] = React.useState(false);

  const classes = useStyles();
  function picture() {

    setModal(true)
  }

  return (
    <div className="cd-section" {...rest} >

      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modalLarge
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
          <h4 className={classes.modalTitle}>2015 Symposium Photo Gallery</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >

          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={3}
            items={images}
          />
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
          {/* <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}></h2>

            </GridItem>


          </GridContainer> */}

          <SymposiumCard onclick={picture} symposia={symposia} />

        </div>
      </div>



    </div>
  );
}
