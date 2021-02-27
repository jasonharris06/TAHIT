import React, { useState, useEffect, useReducer } from "react";
import { useUser } from '../../lib/hooks'
import Router from "next/router";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
// @material-ui/icons


// core components
import InputMask from 'react-input-mask';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardHeader from "components/Card/CardHeader.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import ImageUpload from 'components/CustomUpload/ImageUpload.js';
import Table from "components/Table/Table.js";


import tableStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js";
import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import { cardTitle } from "assets/jss/nextjs-material-kit-pro.js";

import Data from "../../data/profileDropdowns.json"


const dropDownJson = Data
const style = {
  contactUsStyle, cardTitle,
  textCenter: {
    textAlign: "center"
  }, tableStyle
}
const overlay = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
const useStyles = makeStyles(style);
export default function SectionProfile({ ...rest }) {
  const [user, { mutate }] = useUser()
  const [serviceValue, setServiceValue] = useState('interpreter');
  const [homeState, setHomeState] = useState(false)
  const [lang, setLang] = useState({
    language: [],
    certifications: [],
    proAffiliations: []
  })
  const [userProfile, setProfile] = useState(dropDownJson[5])
  const [open, setOpen] = useState(false)

  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const tableData = getTableData()
  const [state, dispatch] = useReducer(reducer, getTableData())

  function reducer(state, action) {
    switch (action.type) {
      case "addRow":

        return [...state, addRow()]
      case 'deleteRow':
        const originalArr = [...state]
        return originalArr.slice(0, originalArr.length - 1)
      default:
        throw new Error()
    }
  }

  function getTableData() {
    if (!user) return
    if (user.profile.languagePair.length > 0) {
      return [
        [<Autocomplete
          options={dropDownJson[0].languages}
          getOptionLabel={(option) => option}
          defaultValue={"English"}
          id="select-on-focus"
          selectOnFocus
          renderInput={(params) => <TextField {...params} name="languagePair1" margin="normal" />}
        />,
        <Autocomplete
          options={dropDownJson[0].languages}
          getOptionLabel={(option) => option}

          id="select-on-focus"
          selectOnFocus
          renderInput={(params) => <TextField {...params} name="languagePair2" margin="normal" />}
        />]
      ]
    }
  }

  function addRow() {
    return [<Autocomplete
      options={dropDownJson[0].languages}
      getOptionLabel={(option) => option}
      defaultValue={"English"}
      id="select-on-focus"
      selectOnFocus
      renderInput={(params) => <TextField {...params} name="languagePair1" margin="normal" />}
    />,
    <Autocomplete
      options={dropDownJson[0].languages}
      getOptionLabel={(option) => option}

      id="select-on-focus"
      selectOnFocus
      renderInput={(params) => <TextField {...params} name="languagePair2" margin="normal" />}
    />]
  }

  function statePick(e, values) {
    e.preventDefault()
    if (values === "TX") {
      setHomeState(true)
    } else {
      setHomeState(false)
    }

  }

  function updateLang(value, usage) {
    let copyLang = { ...lang }
    if (usage === "cert") {
      copyLang.certifications = value
      setLang(copyLang)
    } else if (usage === "affiliation") {
      copyLang.proAffiliations = value
      setLang(copyLang)
    } else {
      copyLang.language = value
      setLang(copyLang)
    }

  }
  //Function checks certifications
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

  function checAffiliation() {
    if (user.profile.proAffiliations.length > 0) return user.profile.proAffiliations
    return ["TAHIT"]
  }

  async function onSubmit(e) {
    e.preventDefault()
    const copyProfile = { ...userProfile }

    var inputs = document.getElementById("profile-form").elements;


    var body = []

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
            case 'workCity':
              copyProfile.profile.workCity = inputs[i].value
              break
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
      setOpen(true)
      //add the Lang state hook date to fill in the language and Certifications. 
      copyProfile.profile.language = lang.language.length == 0 ? user.profile.language : lang.language
      copyProfile.profile.certifications = lang.certifications
      console.log(copyProfile)
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([copyProfile]),
      })

      if (res.status === 200) {
        setOpen(false)
        const userObj = await res.data
        console.log(userObj)
        setOpen(false)
        mutate({ user: userObj })
        setSuccessMsg("Saved")

        setTimeout(function () { setSuccessMsg('') }, 3000)

      } else {
        setOpen(false)
      }
    }
  }



  useEffect(() => {



    if (user.profile.address.state === "TX") {
      setHomeState(true)
    }
    // setProfile({ firstName: user.profile.firstname })
    //setProfile({ profile: { firstName: user.profile.firstname } })
    // return () => {
    //   cleanup
    // }
  }, [user])


  console.log(userProfile)
  const classes = useStyles();
  const overlayClasses = overlay()
  return (
    <>
      <Backdrop className={overlayClasses.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
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
        <GridItem xs={12} md={3} align="center"><h5 className={classes.textCenter} style={{ color: "black" }}>Profile Picture</h5>
          <ImageUpload />
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
          {/* <img src={`data:image/png;base64, ${user.profile.profilePic}`}></img> */}
          <form id="profile-form" onSubmit={onSubmit}>
            <Card className={classes.textCenter}>
              <CardHeader color="danger">Personal information</CardHeader>
              <CardBody>
                <Autocomplete
                  options={dropDownJson[1].salutations}
                  getOptionLabel={(option) => option}
                  defaultValue={`${!user.profile.salutations}` ? `${user.profile.salutations}` : ""}
                  id="select-on-focus"
                  selectOnFocus
                  renderInput={(params) => <TextField {...params} label="Mrs, Ms, Mr..." name="salutations" margin="normal" />}
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
                  labelText="Middle Name"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    defaultValue: `${!user.profile.middleName}` ? `${user.profile.middleName}` : '',
                    name: "middleName"
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
                    defaultValue: `${user.profile.workNumber}` ? `${user.profile.workNumber}` : "",
                    name: "workNumber"

                  }}
                />  </CardBody>
            </Card>
            <br></br>



            <Card className={classes.textCenter}>
              <CardHeader color="danger">Address</CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Street"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    defaultValue: `${user.profile.address.street}` ? `${user.profile.address.street}` : '',
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
                    defaultValue: `${user.profile.address.city}` ? `${user.profile.address.city}` : "",
                    name: "city"
                  }}
                />
                <Autocomplete
                  options={dropDownJson[4].state}
                  getOptionLabel={(option) => option}
                  defaultValue={`${user.profile.address.state}` ? `${user.profile.address.state}` : ""}
                  onChange={statePick}
                  id="select-on-focus"
                  selectOnFocus
                  renderInput={(params) => <TextField {...params} label="State" name="state" margin="normal" />}
                />

                {/* <CustomInput
                  labelText="State"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    defaultValue: `${user.profile.address.state}` ? `${user.profile.address.state}` : "",
                    name: "state"

                  }}
                /> */}
                <CustomInput
                  labelText="Zip Code"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    defaultValue: `${user.profile.address.zip}` ? `${user.profile.address.zip}` : '',
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
                    defaultValue: `${user.profile.address.country}` ? `${user.profile.address.country}` : '',
                    name: "country"

                  }}
                />

              </CardBody>
              {/* <CardFooter className={classes.textMuted}>2 days ago</CardFooter> */}
            </Card>
            <br></br>

            {/* Work City */}

            {homeState && <Card className={classes.textCenter}>
              <CardHeader color="danger">Work Proximity</CardHeader>
              <CardBody className={classes.textCenter}>
                <h4 className={classes.cardTitle}>Choose a major metropolitan area </h4>
                <p>
                  The city you choose will be the closest major city you are willing to work, or currently working in.
          </p>


                <Autocomplete
                  options={dropDownJson[3].workCities}
                  getOptionLabel={(option) => option}
                  defaultValue={`${user.profile.workCity}` ? `${user.profile.workCity}` : ""}
                  id="select-on-focus"
                  selectOnFocus
                  renderInput={(params) => <TextField {...params} label="City" name="workCity" margin="normal" />}
                />

              </CardBody>
            </Card>}



            {/* Languages Section */}
            <br></br>
            <Card className={classes.textCenter}>
              <CardHeader color="danger">Languages and Certifications</CardHeader>
              <CardBody>
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
                <Autocomplete
                  multiple
                  id="tags-standard"
                  //clearOnEscape
                  onChange={(event, value) => updateLang(value, "affiliation")}
                  options={dropDownJson[6].proAffiliation}
                  defaultValue={checAffiliation}
                  getOptionLabel={(option) => option}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Affiliation"
                      margin="normal"
                    />)}
                />
                <br></br>
                <h5 className={classes.cardTitle}>Which service would you like to provide?</h5>
                <FormControl component="fieldset">

                  <RadioGroup row aria-label="service" name="service" value={serviceValue} onChange={(e) => setServiceValue(e.target.value)}>
                    <FormControlLabel value="interpreter" control={<Radio />} label="Interpreter" />
                    <FormControlLabel value="translator" control={<Radio />} label="Translator" />
                    <FormControlLabel value="both" control={<Radio />} label="Both" />
                  </RadioGroup>
                </FormControl>

                <Table
                  tableHead={["From", "To"]}
                  tableData={state}
                  customCellClasses={[
                    classes.textCenter,
                    classes.textRight,
                    classes.textRight
                  ]}
                  customClassesForCells={[0, 4, 5]}
                  customHeadCellClasses={[
                    classes.textCenter,
                    classes.textRight,
                    classes.textRight
                  ]}
                  customHeadClassesForCells={[0, 4, 5]}
                />
                <Button color="success" onClick={() => dispatch({ type: 'addRow' })} round>
                  Add More
                    </Button>
                <Button color="danger" onClick={() => dispatch({ type: 'deleteRow' })} disabled={state.length === 1 ? true : false} round>
                  Delete Last
                    </Button>



              </CardBody>
            </Card>
            <br></br>

            {/* Employer and Schooling Section */}
            <Card className={classes.textCenter}>
              <CardHeader color="danger">Employment and Schooling</CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Employer"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    defaultValue: `${user.profile.employer}` ? `${user.profile.employer}` : "",
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
                    defaultValue: `${user.profile.jobTitle}` ? `${user.profile.jobTitle}` : "",
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
                    defaultValue: `${user.profile.almaMater}` ? `${user.profile.almaMater}` : "",
                    name: "almaMater"

                  }}
                />
              </CardBody>
            </Card>
            <br></br>

            <Card className={classes.textCenter}>
              <CardHeader color="danger">Social Media</CardHeader>
              <CardBody>  <CustomInput
                labelText="Facebook"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  placeholder: "Facebook Link...",
                  defaultValue: `${user.profile.socialMedia.facebook}` ? `${user.profile.socialMedia.facebook}` : "",
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
                    defaultValue: `${user.profile.socialMedia.linkedIn}` ? `${user.profile.socialMedia.linkedIn}` : "",
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
                    defaultValue: `${user.profile.socialMedia.twitter}` ? `${user.profile.socialMedia.twitter}` : "",
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
                    defaultValue: `${user.profile.socialMedia.instagram}` ? `${user.profile.socialMedia.instagram}` : "",
                    name: "instagram"
                  }}
                /></CardBody>
            </Card>
            {errorMsg && <Danger>{errorMsg}</Danger>}
            {successMsg && <Success>{successMsg}</Success>}
            <div className={classes.textCenter}>
              <Button type="submit" color="primary" round>
                Save Changes
                    </Button>
            </div>
          </form>
        </GridItem>
      </GridContainer>
    </>
  )
}