/*eslint-disable*/
import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Image from 'next/image'
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page

import SectionFooter from "../../pages-sections/components/SectionFooterTahit.js";
import SectionSymposiumCards from "../../pages-sections/sections-page/SectionPastSymposia.js"

import aboutUsStyle from "/styles/jss/nextjs-material-kit-pro/pages/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function Symposium2023Page() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <Header
                brand="TAHIT"
                links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 300,
                    color: "info"
                }}
            />
            <Parallax image={"/img/background-gradient.jpg"} filter="dark" small>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem
                            md={8}
                            sm={8}
                            className={classNames(
                                classes.mlAuto,
                                classes.mrAuto,
                                classes.textCenter
                            )}
                        >
                            <h1 className={classes.title}>TAHIT Symposium Booklet</h1>

                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.pricingSection}>
                    <GridContainer justify="center">
                        <GridItem
                            md={8}
                            sm={8}
                            className={classNames(
                                classes.mlAuto,
                                classes.mrAuto,
                                classes.textCenter
                            )}
                            style={{ marginTop: "20px" }}
                        >
                            {/* <SectionDescription /> */}

                            {/* <SectionTeam /> */}
                            {/* <SectionServices />
          <SectionOffice />


          <SectionContact /> */}
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_01.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_02.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_03.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_04.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_05.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_06.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_07.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_08.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_09.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_10.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_11.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_12.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_13.png"} width={750} height={1000} />
                            <Image src={"https://symposium2023.blob.core.windows.net/symposium/Tahit Symposium Booklet 2023_Page_14.png"} width={750} height={1000} />


                        </GridItem>
                    </GridContainer>
                </div>
            </div>
            <SectionFooter />
        </div>
    );
}
