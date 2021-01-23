import React, { useState, useEffect } from "react";
import { useUser } from '../../lib/hooks'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import MaskedInput from 'react-text-mask';
// @material-ui/icons


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import ImageUpload from 'components/CustomUpload/ImageUpload.js';

import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import Data from "../../data/profileDropdowns.json"
import { AssignmentReturnedRounded, BorderStyleRounded } from "@material-ui/icons";
const dropDownJson = Data
const useStyles = makeStyles(contactUsStyle);
export default function SectionPricing({ ...rest }) {
  const [user, { mutate }] = useUser()
  const [lang, setLang] = useState({
    language: [],
    certifications: []
  })
  const [userProfile, setProfile] = useState(dropDownJson[3])
  console.log(user.profile)
  console.log(!user.profile.socialMedia.facebook)

  function updateLang(value, usage) {
    let copyLang = { ...lang }
    if (usage === "cert") {
      copyLang.certifications = value
      setLang(copyLang)
    } else {
      copyLang.language = value
      setLang(copyLang)
    }

  }
  function checkCerts() {
    console.log("I ran", user.profile.certifications.length < 0)
    if (user.profile.certifications.length > 0) {
      let certs = []
      user.profile.certifications.forEach(item => {
        certs.push(item.title)
      })
      return certs
    }
    return
  }

  function checkLang() {
    if (user.profile.language.length > 0) return user.profile.language
    return
  }

  async function onSubmit(e) {
    e.preventDefault()
    const copyProfile = { ...userProfile }
    console.log(copyProfile)
    console.log(lang)
    var inputs = document.getElementById("profile-form").elements;

    var languages = document.getElementsByClassName("MuiAutocomplete-root").elements
    var body = []
    //console.log(languages)
    let i;
    for (i = 0; i < inputs.length; i++) {
      if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text" || inputs[i].type === "tel") {
        // Update text input

        if (inputs[i].value !== '') {
          switch (inputs[i].name) {
            case "firstName":
              copyProfile.profile.firstName = inputs[i].value
              break;
            case "lastName":
              copyProfile.profile.lastName = inputs[i].value
              break;
            case "lastName":
              copyProfile.profile.lastName = inputs[i].value
              break;
            case "salutations":
              copyProfile.profile.salutations = inputs[i].value
              break;
            case "phoneNumber":
              let cleanNumber = "+1" + inputs[i].value.replace(/(?![0-9])./gim, "")
              copyProfile.profile.phoneNumber = cleanNumber
              break;
            case "workNumber":
              let cleanWorkNumber = "+1" + inputs[i].value.replace(/(?![0-9])./gim, "")
              copyProfile.profile.workNumber = cleanWorkNumber
              break;
            case "street":
              copyProfile.profile.address.street = inputs[i].value
              break;
            case "city":
              copyProfile.profile.address.city = inputs[i].value
              break;
            case "state":
              copyProfile.profile.address.state = inputs[i].value
              break;
            case "zip":
              copyProfile.profile.address.zip = inputs[i].value
              break;
            case "country":
              copyProfile.profile.address.country = inputs[i].value
              break;
            case "employer":
              copyProfile.profile.employer = inputs[i].value
              break;
            case "jobTitle":
              copyProfile.profile.jobTitle = inputs[i].value
              break;
            case "almaMater":
              copyProfile.profile.almaMater = inputs[i].value
              break;
            case "honorifics":
              copyProfile.profile.honorifics = inputs[i].value
              break;
            case "facebook":
              copyProfile.profile.socialMedia.facebook = inputs[i].value
              break;
            case "linkedIn":
              copyProfile.profile.socialMedia.linkedIn = inputs[i].value
              break;
            case "twitter":
              copyProfile.profile.socialMedia.twitter = inputs[i].value
              break;
            case "instagram":
              copyProfile.profile.socialMedia.instagram = inputs[i].value
              break;




          }
          console.log(inputs[i].name, inputs[i].value)
          let ojb =
            body.push({ [inputs[i].name]: inputs[i].value })
          //console.log(inputs[i])
          // inputs[i].value.toLocaleUpperCase();
        }
      }
    }
    console.log(body)
    if (i == inputs.length) {
      //add the Lang state hook date to fill in the language and Certifications. 
      copyProfile.profile.language = lang.language.length == 0 ? user.profile.language : lang.language
      copyProfile.profile.certifications = lang.certifications
      console.log(copyProfile)
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([copyProfile]),
      })
    }
  }



  useEffect(() => {
    // setProfile({ firstName: user.profile.firstname })
    //setProfile({ profile: { firstName: user.profile.firstname } })
    // return () => {
    //   cleanup
    // }
  }, [user])


  console.log(userProfile)
  const classes = useStyles();
  return (
    <>
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={12}
          className={
            classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
          }
        >
          <h2 className={classes.title} style={{ color: "black" }}>Edit/Update your profile</h2>



        </GridItem>



      </GridContainer>
      <GridContainer >
        <GridItem xs={12} md={2} ><h5 className={classes.textCenter} style={{ color: "black" }}>Profile Picture</h5>
          <ImageUpload avatar />
        </GridItem>
        <GridItem xs={12} md={8} sm={12}>

          {/* <p style={{ color: "black" }}>
                  {title.text}
                  <br />

                </p>
                <CustomDropdown
                  dropdownHeader="Questions:"
                  buttonText={!title.dropdownText ? "Commonly asked questions" : title.dropdownText}
                  buttonProps={{
                    // href: "#pablo",
                    round: true,
                    block: true,
                    color: "info",

                  }}
                  dropdownList={dropDown.map((item, index) => {
                    return (
                      <div key={index}>
                        <div onClick={handleOnclick} data-email={item.email} data-text={item.text} data-dropdown={item.dropdownText}>{item.dropdownText}</div>
                      </div>)
                  })}

                /> */}
          <form id="profile-form" onSubmit={onSubmit}>
            <Autocomplete
              options={dropDownJson[1].salutaions}
              getOptionLabel={(option) => option}

              id="select-on-focus"
              selectOnFocus
              renderInput={(params) => <TextField {...params} label="Salutation (Mrs, Ms, Mr...)" name="salutations" margin="normal" />}
            />

            <CustomInput
              labelText="First Name"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                readOnly: false,
                defaultValue: `${!user.profile.firstName}` ? `${user.profile.firstName}` : '',
                name: "firstName"
              }}
            />
            <CustomInput
              labelText="Last Name"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: `${!user.profile.lastName}` ? `${user.profile.lastName}` : '',
                name: "lastName"
              }}
            />
            <CustomInput
              labelText="Honorifics (Ph.D, MA)"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: `${user.profile.honorifics}` ? `${user.profile.honorifics}` : '',
                name: "honorifics"
              }}
            />
            <CustomInput
              labelText="Cell Number"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "tel",

                defaultValue: `${user.profile.phoneNumber}` ? `${user.profile.phoneNumber?.slice(2).replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}` : '',
                //oninput: `${this.value = this.value.replace(/(?![0-9])./gmi, '')}`,
                maxLength: "10",
                name: "phoneNumber"

              }}
            />
            <CustomInput
              labelText="Work Number"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: `${!user.profile.workNumber}` ? '' : `${user.profile.workNumber}`,
                name: "workNumber"

              }}
            />
            <h5 className={classes.textLeft} style={{ color: "black" }}>Address:</h5>
            <CustomInput
              labelText="Street"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: !`${user.profile.address?.street}` ? "" : `${user.profile.address.street}`,
                name: "street"

              }}
            />
            <CustomInput
              labelText="City"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: !`${user.profile.address?.city}` ? "" : `${user.profile.address.city}`,
                name: "city"
              }}
            />
            <CustomInput
              labelText="State"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: !`${user.profile.address?.state}` ? "" : `${user.profile.address.state}`,
                name: "state"

              }}
            />
            <CustomInput
              labelText="Zip Code"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: !`${user.profile.address?.zip}` ? '' : `${user.profile.address.zip}`,
                name: "zip"

              }}
            />
            <CustomInput
              labelText="Country"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: !`${user.profile.address?.country}` ? '' : `${user.profile.address.country}`,
                name: "country"

              }}
            />
            {/* Languages Section */}
            <h5 className={classes.textLeft} style={{ color: "black" }}>Languages:</h5>

            <Autocomplete
              multiple
              id="tags-standard"
              //clearOnEscape
              onChange={(event, value) => updateLang(value, "language")}
              options={dropDownJson[0].languages}
              defaultValue={checkLang}
              getOptionLabel={(option) => option}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Languages"
                  margin="normal"
                />)}
            />

            <Autocomplete
              multiple
              id="tags-standard"
              //clearOnEscape
              onChange={(event, value) => updateLang(value, "cert")}
              options={dropDownJson[2].certifications}
              defaultValue={checkCerts}
              getOptionLabel={(option) => option}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Certifications"
                  margin="normal"
                />)}
            />

            <CustomInput
              labelText="Employer"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: !`${user.profile.employer}` ? "" : `${user.profile.employer}`,
                name: "employer"
              }}
            />
            <CustomInput
              labelText="Job Title"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: !`${user.profile.jobTitle}` ? '' : `${user.profile.jobTitle}`,
                name: "jobTitle"

              }}
            />
            <CustomInput
              labelText="Schooling"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                defaultValue: !`${user.profile.almaMater}` ? '' : `${user.profile.almaMater}`,
                name: "almaMater"

              }}
            />
            <h5 className={classes.textLeft} style={{ color: "black" }}>Social Media:</h5>
            <CustomInput
              labelText="Facebook"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "Facebook Link...",
                defaultValue: !`${user.profile.socialMedia.facebook}` ? '' : `${user.profile.socialMedia.facebook}`,
                name: "facebook"

              }}
            />
            <CustomInput
              labelText="LinkedIn"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "LinkedIn Link...",
                defaultValue: !`${user.profile.socialMedia.linkedIn}` ? '' : `${user.profile.socialMedia.linkedIn}`,
                name: "linkedIn"
              }}
            />
            <CustomInput
              labelText="Twitter"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "Twitter Link...",
                defaultValue: !`${user.profile.socialMedia.twitter}` ? '' : `${user.profile.socialMedia.twitter}`,
                name: "twitter"
              }}
            />
            <CustomInput
              labelText="Instagram"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "Instagram Link...",
                defaultValue: !`${user.profile.socialMedia.instagram}` ? '' : `${user.profile.socialMedia.instagram}`,
                name: "instagram"
              }}
            />
            <div className={classes.textCenter}>
              <Button type="submit" color="primary" round>
                Contact us
                    </Button>
            </div>
          </form>
        </GridItem>
      </GridContainer>
    </>
  )
}