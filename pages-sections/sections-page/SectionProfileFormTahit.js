import React, { useState } from "react";
import { useUser } from '../../lib/hooks'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
const dropDownJson = Data
const useStyles = makeStyles(contactUsStyle);
export default function SectionPricing({ ...rest }) {
  const [user, { mutate }] = useUser()
  const [profile, setProfile] = useState(dropDownJson[3])
  console.log(profile)
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
        <GridItem justify='center' xs={12} md={2} ><h5 className={classes.textCenter} style={{ color: "black" }}>Profile Picture</h5>
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
          <form>
            <CustomInput
              labelText="Salutation"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              labelText="First Name"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              labelText="Last Name"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              labelText="Honorifics (Ph.D, MA)"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              labelText="Cell Number"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="Work Number"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

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

              }}
            />
            <CustomInput
              labelText="City"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="State"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="Zip Code"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="Country"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="Languages"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="Certifications"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="Employer"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="Job Title"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

              }}
            />
            <CustomInput
              labelText="Schooling"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{

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
                placeholder: "Facebook Link..."
              }}
            />
            <CustomInput
              labelText="LinkedIn"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "LinkedIn Link..."
              }}
            />
            <CustomInput
              labelText="Twitter"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "Twitter Link..."
              }}
            />
            <CustomInput
              labelText="Instagram"
              id="float"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                placeholder: "Instagram Link..."
              }}
            />
            <div className={classes.textCenter}>
              <Button color="primary" round>
                Contact us
                    </Button>
            </div>
          </form>
        </GridItem>
      </GridContainer>
    </>
  )
}