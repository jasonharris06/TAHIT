import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "../../components/CustomButtons/Button.js";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

import style from "/styles/jss/nextjs-material-kit-pro/modalStyle.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function SectionRegistryModal({ ...rest }) {
  const [modal, setModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState({
    name: "",
    image: "",
    description: "",
    position: ""
  })

  function openModal() {
    console.log("I was clicked in modal")
  }

  const classes = useStyles();
  // function handleClick(e) {
  //   e.preventDefault()
  //   let index = e.currentTarget.id
  //   setModalInfo({
  //     name: board[index].name,
  //     image: board[index].image,
  //     position: board[index].position,
  //     description: board[index].description
  //   })

  //   setModal(true)
  // }

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


    </div>
  );
}
