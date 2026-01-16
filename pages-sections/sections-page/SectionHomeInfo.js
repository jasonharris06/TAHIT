import React from "react";
import Image from "next/image";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import People from "@material-ui/icons/People";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Button from "../../components/CustomButtons/Button.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Accordion from "../../components/Accordion/Accordion.js";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/sectionsSections/pricingStyle.js";


import cardBlog3 from "../../assets/img/background-texture.jpg";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(pricingStyle);

export default function SectionHomeInfo({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>

      {/* Pricing 5 START */}
      <div className={classes.pricingSection}>
        {/* <div className={classes.container}> */}
        <GridContainer>
          {/* <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>2025 TAHIT Symposium</h2>
            <h4 className={classes.description + " " + classes.textCenter} style={{ marginBottom: "30px" }}>
              The leading event for professionals in healthcare interpretation and translation!
            </h4>


            <div className={classes.textCenter} style={{ marginBottom: "40px" }}>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "15px",
                alignItems: "center"
              }}>
                <Button
                  color="rose"
                  size="lg"
                  href="https://www.eventbrite.com/e/17th-annual-tahit-language-access-symposium-houston-texas-tickets-1432320151129?aff=erelpanelorg"
                  target="_blank"
                  style={{
                    animation: "pulse 2s 5",
                    transformOrigin: "center",
                    margin: "5px",
                    minWidth: "200px"
                  }}
                >
                  <i className="fas fa-user-plus" style={{ marginRight: "8px" }} />
                  Register Today
                </Button>
                <Button
                  color="warning"
                  size="lg"
                  href="https://www.eventbrite.com/e/2025-tahit-texas-star-award-reception-tickets-1487213087379?aff=erelpanelorg"
                  target="_blank"
                  style={{
                    animation: "pulse 2s 5",
                    transformOrigin: "center",
                    margin: "5px",
                    minWidth: "250px"
                  }}
                >
                  <i className="fas fa-star" style={{
                    marginRight: "8px",
                    animation: "twinkle 3s ease-in-out infinite"
                  }} />
                  Texas Star Award Reception
                </Button>
                <Button
                  color="info"
                  size="lg"
                  href="https://symposium2023.blob.core.windows.net/symposium/2025/2025%20Symposium%20Program.pdf"
                  target="_blank"
                  download="2025-Symposium-Program.pdf"
                  style={{
                    margin: "5px",
                    minWidth: "200px"
                  }}
                >
                  <i className="fas fa-download" style={{ marginRight: "8px" }} />
                  Download 2025 Symposium Booklet
                </Button>
              </div>
              <style jsx>{`
                    @keyframes pulse {
                      0% {
                      transform: scale(1);
                      box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.7);
                      }
                      70% {
                      transform: scale(1.05);
                      box-shadow: 0 0 0 15px rgba(233, 30, 99, 0);
                      }
                      100% {
                      transform: scale(1);
                      box-shadow: 0 0 0 0 rgba(233, 30, 99, 0);
                      }
                    }
                    
                    @keyframes twinkle {
                      0%, 100% {
                      opacity: 1;
                      text-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
                      }
                      25% {
                      opacity: 0.3;
                      text-shadow: 0 0 6px rgba(255, 255, 255, 1);
                      }
                      50% {
                      opacity: 0.8;
                      text-shadow: 0 0 10px rgba(255, 255, 255, 1);
                      }
                      75% {
                      opacity: 0.4;
                      text-shadow: 0 0 4px rgba(255, 255, 255, 0.9);
                      }
                    }
                    `}</style>
            </div>

            {/* Event Details Cards */}
          {/* <GridContainer style={{ marginBottom: "40px" }}>
              <GridItem xs={12} sm={6} md={3}>
                <Card style={{ height: "200px", display: "flex", flexDirection: "column" }}>
                  <CardBody style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className={classes.textCenter}>
                      <i className="fas fa-calendar-alt" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                      <h5 style={{ margin: "10px 0 5px 0", fontWeight: "bold" }}>Date</h5>
                      <p style={{ margin: "0", color: "#666" }}>September 12, 2025</p>
                    </div>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card style={{ height: "200px", display: "flex", flexDirection: "column" }}>
                  <CardBody style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className={classes.textCenter}>
                      <i className="fas fa-map-marker-alt" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                      <h5 style={{ margin: "10px 0 5px 0", fontWeight: "bold" }}>Location</h5>
                      <p style={{ margin: "0 0 10px 0", color: "#666" }}>MD Anderson Cancer Center<br />Texas Medical Center</p>
                      <Button
                        color="warning"
                        size="sm"
                        href="/img/symposiums/2025/MD Anderson Hospital Flyer (Front & Back) Don Battle.pdf"
                        target="_blank"
                        style={{
                          fontSize: "12px",
                          padding: "6px 12px",
                          backgroundColor: "#ffc107",
                          color: "#000",
                          border: "1px solid #ffc107"
                        }}
                      >
                        <i className="fas fa-download" style={{ marginRight: "4px", color: "#000" }} />
                        Hospital Info
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card style={{ height: "200px", display: "flex", flexDirection: "column" }}>
                  <CardBody style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className={classes.textCenter}>
                      <i className="fas fa-clock" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                      <h5 style={{ margin: "10px 0 5px 0", fontWeight: "bold" }}>Early Registration</h5>
                      <p style={{ margin: "0", color: "#666" }}>Deadline: July 31, 2025</p>
                    </div>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3}>
                <Card style={{ height: "200px", display: "flex", flexDirection: "column" }}>
                  <CardBody style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className={classes.textCenter}>
                      <i className="fas fa-certificate" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                      <h5 style={{ margin: "10px 0 5px 0", fontWeight: "bold" }}>CEUs</h5>
                      <p style={{ margin: "0", color: "#666" }}>4-5 (tentative)</p>
                    </div>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer> */}
          {/*keynote speaker section */}
          {/* 
            <div className={classes.textCenter} style={{ marginBottom: "40px" }}>
              <h2 className={classes.title} style={{ marginBottom: "20px" }}>
                Keynote Speaker
              </h2>

              <h4 className={classes.description} style={{ marginBottom: "30px" }}>
                Bruce Adelson, CEO of Federal Compliance Consulting, LLC
              </h4>
              <Image
                src="/img/symposiums/2025/2025_poster.png"
                alt="Bruce Adelson- 2025 TAHIT Symposium Keynote Speaker"
                width={800}
                height={1000}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                }}
              />

            </div> */}
          {/* Symposium Agenda Section */}
          {/* <div className={classes.textCenter} style={{ marginBottom: "40px" }}>
              <h2 className={classes.title} style={{ marginBottom: "20px" }}>
                Symposium Agenda
              </h2>
              <h4 className={classes.description} style={{ marginBottom: "30px" }}>
                From Policy to Practice: The Executive Order and the Future of Language Access
              </h4>
              <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
                padding: "20px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px"
              }}>
                <Image
                  src="/img/symposiums/2025/TAHIT 17th Annual Symposium From Policy to Practice The Executive Order and the Future of Language Access. (1).jpg"
                  alt="TAHIT 17th Annual Symposium Agenda - September 12, 2025"
                  width={800}
                  height={1000}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                  }}
                />
              </div>
              <Button
                color="primary"
                size="lg"
                href="/img/symposiums/2025/TAHIT 17th Annual Symposium From Policy to Practice The Executive Order and the Future of Language Access. (1).jpg"
                target="_blank"
                style={{ marginRight: '10px' }}
              >
                <i className="fas fa-expand" style={{ marginRight: "8px" }} />
                View Full Agenda
              </Button>
            </div> */}

          {/* <h4 className={classes.description}>
              Make sure you download or view the symposium booklet
            </h4>
            <br />
            <Button color="info" size="lg" href="https://symposium2023.blob.core.windows.net/symposium/2025/2025%20Symposium%20Program.pdf" style={{ marginRight: '10px' }}>
              <i className="fas fa-download" />
              Download
            </Button> */}
          {/* </GridItem> */}


          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>ISpeak Cards: Your Language Access Tool</h2>
            <h4 className={classes.description + " " + classes.textCenter} style={{ marginBottom: "30px" }}>
              Empowering individuals with limited English proficiency to access essential services
            </h4>

            {/* ISpeak Card Explanation Section */}
            <GridContainer style={{ marginBottom: "40px" }}>
              <GridItem xs={12} sm={12} md={6}>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ color: "#e91e63", marginBottom: "20px" }}>What are ISpeak Cards?</h3>
                  <p style={{ lineHeight: "1.8", fontSize: "16px", marginBottom: "20px", color: "#333" }}>
                    ISpeak Cards are free, pocket-sized language identification cards that help non-English speaking individuals
                    communicate their language needs when accessing critical services. These cards bridge the communication gap
                    and ensure that everyone receives the language assistance they are entitled to under Title VI of the Civil Rights Act.
                  </p>

                  <h3 style={{ color: "#e91e63", marginBottom: "20px" }}>Why are they important?</h3>
                  <div style={{ lineHeight: "1.8", fontSize: "16px" }}>
                    <p style={{ marginBottom: "15px", color: "#333" }}>
                      <strong>✓ Legal Right:</strong> Non-English speaking persons have a right to free interpretation assistance in their language.
                    </p>
                    <p style={{ marginBottom: "15px", color: "#333" }}>
                      <strong>✓ Easy Identification:</strong> Service providers can quickly identify your language before calling an interpreter.
                    </p>
                    <p style={{ marginBottom: "15px", color: "#333" }}>
                      <strong>✓ Universal Access:</strong> Use them at hospitals, public assistance programs, schools, courts, and emergency services.
                    </p>
                    <p style={{ marginBottom: "15px", color: "#333" }}>
                      <strong>✓ No Barriers:</strong> This card is not required to receive services—it simply makes the process smoother.
                    </p>
                  </div>
                </div>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ color: "#e91e63", marginBottom: "20px" }}>Where can you use ISpeak Cards?</h3>
                  <GridContainer>
                    <GridItem xs={6} sm={6} md={6} style={{ marginBottom: "20px" }}>
                      <div style={{
                        textAlign: "center",
                        padding: "15px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        height: "140px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        <i className="fas fa-hospital" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                        <p style={{ margin: "0", fontWeight: "500", color: "#333" }}>Hospitals & Health Clinics</p>
                      </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{ marginBottom: "20px" }}>
                      <div style={{
                        textAlign: "center",
                        padding: "15px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        height: "140px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        <i className="fas fa-hands-helping" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                        <p style={{ margin: "0", fontWeight: "500", color: "#333" }}>Public Assistance Programs</p>
                      </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{ marginBottom: "20px" }}>
                      <div style={{
                        textAlign: "center",
                        padding: "15px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        height: "140px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        <i className="fas fa-graduation-cap" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                        <p style={{ margin: "0", fontWeight: "500", color: "#333" }}>Public Schools & Universities</p>
                      </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{ marginBottom: "20px" }}>
                      <div style={{
                        textAlign: "center",
                        padding: "15px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        height: "140px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        <i className="fas fa-balance-scale" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                        <p style={{ margin: "0", fontWeight: "500", color: "#333" }}>Courts (City, County, State, Federal)</p>
                      </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{ marginBottom: "20px" }}>
                      <div style={{
                        textAlign: "center",
                        padding: "15px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        height: "140px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        <i className="fas fa-ambulance" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                        <p style={{ margin: "0", fontWeight: "500", color: "#333" }}>Emergency Services (911/311)</p>
                      </div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{ marginBottom: "20px" }}>
                      <div style={{
                        textAlign: "center",
                        padding: "15px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                        height: "140px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }}>
                        <i className="fas fa-lightbulb" style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                        <p style={{ margin: "0", fontWeight: "500", color: "#333" }}>Public Services (Water, Trash, Electric)</p>
                      </div>
                    </GridItem>
                  </GridContainer>
                </div>
              </GridItem>
            </GridContainer>

            {/* Call to Action */}
            <div className={classes.textCenter} style={{
              backgroundColor: "#f8f9fa",
              padding: "30px",
              borderRadius: "12px",
              marginBottom: "40px"
            }}>
              <h3 style={{ color: "#e91e63", marginBottom: "20px" }}>Get Your Free ISpeak Cards Today</h3>
              <p style={{ fontSize: "16px", marginBottom: "25px", maxWidth: "700px", margin: "0 auto 25px", color: "#333" }}>
                Download, print, and cut out your ISpeak Cards. Keep them with you to ensure you receive
                the language assistance you deserve in any situation.
              </p>
              <Button
                color="rose"
                size="lg"
                href="https://symposium2023.blob.core.windows.net/symposium/IspeakCardsTAHIT (3).pdf"
                target="_blank"
                style={{ marginRight: '10px' }}
              >
                <i className="fas fa-download" style={{ marginRight: "8px" }} />
                Download ISpeak Cards
              </Button>
            </div>

            {/* Language Access is the Law Banner */}
            <div className={classes.textCenter} style={{
              backgroundColor: "#ffd700",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "40px"
            }}>
              <h2 style={{ margin: "0", fontWeight: "bold", fontSize: "2rem", color: "#333" }}>
                Language Access is the Law
              </h2>
            </div>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>

          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>Our Mission</h2>
            <h4 className={classes.description + " " + classes.textCenter} style={{ marginBottom: "40px" }}>
              To promote language access within healthcare by facilitating training, education, and communication between government, providers, interpreters, translators, and individual stakeholders. We pursue our mission with a commitment to improving health equity, clinical outcomes, and patient safety for people with limited English proficiency.
            </h4>

            {/* Centered Video Section */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: "40px"
            }}>
              <div style={{
                position: "relative",
                width: "100%",
                maxWidth: "800px",
                paddingBottom: "45%" // 16:9 aspect ratio
              }}>
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: "8px"
                  }}
                  src="https://www.youtube.com/embed/89ny6vtP4gQ"
                  title="TAHIT Public Service Announcement"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </GridItem>


        </GridContainer>

      </div>
      {/* </div> */}
      {/* Pricing 5 END */}
    </div>
  );
}
