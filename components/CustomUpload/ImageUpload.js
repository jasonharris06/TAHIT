import React, { useEffect, useState } from "react";
import axios from 'axios'
// used for making the prop types of this component
import PropTypes from "prop-types";

// core components
import Button from "components/CustomButtons/Button.js";

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

export default function ImageUpload(props) {
  const [file, setFile] = React.useState(null);
  const [errorMsg, setErrorMsg] = useState("")
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    props.avatar ? props.avatar : defaultImage
  );
  console.log(props.avatar)
  let fileInput = React.createRef();
  const handleImageChange = e => {
    e.preventDefault();
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
    const data = new FormData()
    data.append("avatar", file)
    console.log(data)
    axios.post("/api/profile", data, { headers: { "Content-Type": "multipart/form-data" } })
      .then(function (res) {
        console.log(res.status)
        if (res.status === 200) {


        } else {
          setErrorMsg('Network Error.  Please try again.')
        }

      })
      .catch(function (error) {
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
        {file === null ? (
          <Button {...addButtonProps} onClick={() => handleClick()}>
            {avatar ? "Add Photo" : "Select image"}
          </Button>
        ) : (
            <span>
              <form
                onSubmit={handleSubmit}
                method="post"
                encType="multipart/form-data"
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
