import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Quote from "../components/Typography/Quote.js";

import descriptionStyle from "/styles/jss/nextjs-material-kit-pro/pages/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >

          <Quote
            text="You have to know the past to understand the present."
            author=" Carl Sagan"

          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
