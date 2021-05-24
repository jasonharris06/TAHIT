import React, { useEffect, useState } from "react";
import { useUser } from '../../lib/hooks'
import axios from 'axios'
// used for making the prop types of this component
import PropTypes from "prop-types";

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Check from "@material-ui/icons/Check";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
// core components
import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//overlay
import { makeStyles } from '@material-ui/core/styles';
import { ContactsOutlined, ContactSupportOutlined } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function ImageUpload(props) {
  const classes = useStyles();
  const [user, { mutate }] = useUser()
  const [file, setFile] = React.useState(null);
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [open, setOpen] = useState(false)
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    defaultAvatar
  );

  useEffect(() => {
    if (user) {
      setImagePreviewUrl(user.profile.profilePic.url)
    }
  }, [user]);

  let fileInput = React.createRef();
  const handleImageChange = e => {
    e.preventDefault();
    setErrorMsg("")
    console.log(e.target.files[0].size)
    if (e.target.files[0].size > 2097152) return setErrorMsg("Image must be smaller than 2mb")
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
    console.log(file)
  };
  // eslint-disable-next-line
  const handleSubmit = e => {
    e.preventDefault();
    console.log(file)
    setOpen(true)
    const data = new FormData()
    data.append("avatar", file)
    console.log(data)
    axios.post("/api/avatar", data, { headers: { "Content-Type": "multipart/form-data" } })
      .then(function (res) {
        console.log(res)
        if (res.data.status === 200) {
          setSuccessMsg("Saved")
          setOpen(false)
          setTimeout(function () { setSuccessMsg('') }, 3000)

        } else {
          setErrorMsg('Network Error.  Please try again.')
          setOpen(false)
        }

      }).catch(function (error) {
        console.log("I am an error")
        console.log(error);
      });
    // file is the file/image uploaded
    // in this function you can save the image (file) on form submit
    // you have to call it yourself
  };
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(props.avatar ? props.avatar : defaultImage);
    fileInput.current.value = null;
  };


  let { avatar, addButtonProps, changeButtonProps, removeButtonProps } = props;
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div className={"thumbnail" + (avatar ? " img-circle" : "")}>
        <img src={imagePreviewUrl} alt="..." />

      </div>

      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
            {errorMsg && <Danger>{errorMsg}</Danger>}
            {successMsg && <Success>{successMsg}</Success>}
            {/* {successMsg && <SnackbarContent
              message={
                <span>
                  <b>SUCCESS:</b>{successMsg}
                </span>
              }
              close
              color="success"
              icon={Check}
            >{successMsg}</SnackbarContent>} */}
          </GridItem>
        </GridContainer>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
        {file === null ? (

          <Button {...addButtonProps} onClick={() => handleClick()}>
            {avatar ? "Add Photo" : "Select image"}
          </Button>
        ) : (
          <span>
            <form
              onSubmit={handleSubmit}

            >
              <input type="file" name="avatar" />

              <Button {...changeButtonProps} type="submit">
                Save Image
            </Button>
            </form>

            <Button {...changeButtonProps} onClick={() => handleClick()}>
              Change
            </Button>

            {avatar ? <br /> : null}
            <Button {...removeButtonProps} onClick={() => handleRemove()}>
              <i className="fas fa-times" /> Remove
            </Button>
          </span>
        )}
      </div>
    </div >
  );
}

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};
