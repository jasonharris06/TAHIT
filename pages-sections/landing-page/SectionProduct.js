import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import GroupIcon from '@material-ui/icons/Group';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ViewListIcon from '@material-ui/icons/ViewList';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import EmailIcon from '@material-ui/icons/Email';
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/nextjs-material-kit-pro/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Membership Perks</h2>
          <h5 className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non eros erat. Fusce malesuada nisl et elit interdum tincidunt. Vivamus tempor, elit et pharetra tristique.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Added to the Membership Registry"
              description="Insert perks of being on the Registery"
              icon={GroupIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Verified Interpreters & Translators"
              description="Text for Verified Interpreters and Translators"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Training Materials"
              description="Text for training Materials"
              icon={LocalLibraryIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Search Membership Registry"
              description="Text for searching registry"
              icon={ViewListIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Symposium Discount"
              description="Text for Symposium Discount"
              icon={MoneyOffIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Receive Quarterly Newsletter"
              description="Text for searching registry"
              icon={EmailIcon}
              iconColor="primary"
              vertical
            />

          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
