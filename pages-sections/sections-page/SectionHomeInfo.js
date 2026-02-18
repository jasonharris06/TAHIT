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
import { motion } from "framer-motion";

const useStyles = makeStyles(pricingStyle);

export default function SectionHomeInfo({ ...rest }) {
  const classes = useStyles();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const checkmarkVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="cd-section" {...rest}>
      {/* Pricing 5 START */}
      <div className={classes.pricingSection}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            {/* 2025 Symposium Poster Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              style={{ marginBottom: "60px" }}
            >
              <h2 className={classes.title + " " + classes.textCenter}>2025 TAHIT Symposium</h2>
              <h4 className={classes.description + " " + classes.textCenter} style={{ marginBottom: "30px" }}>
                From Policy to Practice: The Executive Order and the Future of Language Access
              </h4>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
              }}>
                <div style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "700px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}>
                  <Image
                    src="/img/symposiums/2025/2025_poster.png"
                    alt="2025 TAHIT Symposium Poster - September 12, 2025 at MD Anderson Cancer Center"
                    width={700}
                    height={990}
                    layout="responsive"
                    priority
                  />
                </div>
              </div>

              {/* Thank You Message */}
              <motion.div
                style={{
                  marginTop: "40px",
                  padding: "40px 30px",
                  background: "linear-gradient(135deg, #0097a7 0%, #00bcd4 100%)",
                  borderRadius: "16px",
                  boxShadow: "0 15px 40px rgba(0, 188, 212, 0.35)",
                  textAlign: "center",
                  border: "3px solid #fff",
                  position: "relative",
                  overflow: "hidden"
                }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-10%",
                  width: "300px",
                  height: "300px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  pointerEvents: "none"
                }} />
                <div style={{
                  position: "absolute",
                  bottom: "-30%",
                  left: "-5%",
                  width: "200px",
                  height: "200px",
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "50%",
                  pointerEvents: "none"
                }} />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                >
                  <i className="fas fa-heart" style={{
                    fontSize: "3.5rem",
                    color: "#fff",
                    marginBottom: "20px",
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
                  }} />
                </motion.div>

                <h2 style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  position: "relative",
                  zIndex: 1
                }}>
                  Thank You!
                </h2>
                <p style={{
                  color: "#fff",
                  fontSize: "1.3rem",
                  lineHeight: "1.8",
                  maxWidth: "800px",
                  margin: "0 auto",
                  fontWeight: "500",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
                  position: "relative",
                  zIndex: 1
                }}>
                  We extend our heartfelt gratitude to all who supported and made the 2025 TAHIT Symposium a tremendous success. Your dedication to advancing language access and improving healthcare equity continues to inspire our mission.
                </p>

                <motion.div
                  style={{ marginTop: "20px" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div style={{
                    display: "inline-flex",
                    gap: "15px",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    position: "relative",
                    zIndex: 1
                  }}>
                    <i className="fas fa-star" style={{ fontSize: "1.2rem" }} />
                    <span>September 12, 2025</span>
                    <i className="fas fa-star" style={{ fontSize: "1.2rem" }} />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Title Section with fade in */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
              style={{ marginTop: "60px" }}
            >
              <h2 className={classes.title + " " + classes.textCenter}>ISpeak Cards: Your Language Access Tool</h2>
              <h4 className={classes.description + " " + classes.textCenter} style={{ marginBottom: "30px" }}>
                Empowering individuals with limited English proficiency to access essential services
              </h4>
            </motion.div>

            {/* ISpeak Card Explanation Section */}
            <GridContainer style={{ marginBottom: "40px" }}>
              <GridItem xs={12} sm={12} md={6}>
                <motion.div
                  style={{ padding: "20px" }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  variants={fadeInUp}
                >
                  <h3 style={{ color: "#e91e63", marginBottom: "20px" }}>What are ISpeak Cards?</h3>
                  <p style={{ lineHeight: "1.8", fontSize: "16px", marginBottom: "20px", color: "#333" }}>
                    ISpeak Cards are free, pocket-sized language identification cards that help non-English speaking individuals
                    communicate their language needs when accessing critical services. These cards bridge the communication gap
                    and ensure that everyone receives the language assistance they are entitled to under Title VI of the Civil Rights Act.
                  </p>

                  <h3 style={{ color: "#e91e63", marginBottom: "20px" }}>Why are they important?</h3>

                  {/* Checkmarks appear one at a time */}
                  <motion.div
                    style={{ lineHeight: "1.8", fontSize: "16px" }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                  >
                    <motion.p
                      style={{ marginBottom: "15px", color: "#333" }}
                      variants={checkmarkVariant}
                      transition={{ duration: 0.5 }}
                    >
                      <strong>✓ Legal Right:</strong> Non-English speaking persons have a right to free interpretation assistance in their language.
                    </motion.p>
                    <motion.p
                      style={{ marginBottom: "15px", color: "#333" }}
                      variants={checkmarkVariant}
                      transition={{ duration: 0.5 }}
                    >
                      <strong>✓ Easy Identification:</strong> Service providers can quickly identify your language before calling an interpreter.
                    </motion.p>
                    <motion.p
                      style={{ marginBottom: "15px", color: "#333" }}
                      variants={checkmarkVariant}
                      transition={{ duration: 0.5 }}
                    >
                      <strong>✓ Universal Access:</strong> Use them at hospitals, public assistance programs, schools, courts, and emergency services.
                    </motion.p>
                    <motion.p
                      style={{ marginBottom: "15px", color: "#333" }}
                      variants={checkmarkVariant}
                      transition={{ duration: 0.5 }}
                    >
                      <strong>✓ No Barriers:</strong> This card is not required to receive services—it simply makes the process smoother.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <motion.div
                  style={{ padding: "20px" }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  variants={fadeInUp}
                >
                  <h3 style={{ color: "#e91e63", marginBottom: "20px" }}>Where can you use ISpeak Cards?</h3>

                  {/* Cards appear with stagger effect */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                  >
                    <GridContainer>
                      {[
                        { icon: "fa-hospital", text: "Hospitals & Health Clinics" },
                        { icon: "fa-hands-helping", text: "Public Assistance Programs" },
                        { icon: "fa-graduation-cap", text: "Public Schools & Universities" },
                        { icon: "fa-balance-scale", text: "Courts (City, County, State, Federal)" },
                        { icon: "fa-ambulance", text: "Emergency Services (911/311)" },
                        { icon: "fa-lightbulb", text: "Public Services (Water, Trash, Electric)" }
                      ].map((item, index) => (
                        <GridItem key={index} xs={6} sm={6} md={6} style={{ marginBottom: "20px" }}>
                          <motion.div
                            style={{
                              textAlign: "center",
                              padding: "15px",
                              backgroundColor: "#f8f9fa",
                              borderRadius: "8px",
                              height: "140px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center"
                            }}
                            variants={cardVariant}
                            transition={{ duration: 0.4 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                          >
                            <i className={`fas ${item.icon}`} style={{ fontSize: "2rem", color: "#e91e63", marginBottom: "10px" }} />
                            <p style={{ margin: "0", fontWeight: "500", color: "#333" }}>{item.text}</p>
                          </motion.div>
                        </GridItem>
                      ))}
                    </GridContainer>
                  </motion.div>
                </motion.div>
              </GridItem>
            </GridContainer>

            {/* Call to Action */}
            <motion.div
              className={classes.textCenter}
              style={{
                backgroundColor: "#f8f9fa",
                padding: "30px",
                borderRadius: "12px",
                marginBottom: "40px"
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h3 style={{ color: "#e91e63", marginBottom: "20px" }}>Get Your Free ISpeak Cards Today</h3>
              <p style={{ fontSize: "16px", marginBottom: "25px", maxWidth: "700px", margin: "0 auto 25px", color: "#333" }}>
                Download, print, and cut out your ISpeak Cards. Keep them with you to ensure you receive
                the language assistance you deserve in any situation.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
              </motion.div>
            </motion.div>

            {/* Language Access is the Law Banner */}
            <motion.div
              className={classes.textCenter}
              style={{
                backgroundColor: "#ffd700",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "40px"
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <h2 style={{ margin: "0", fontWeight: "bold", fontSize: "2rem", color: "#333" }}>
                Language Access is the Law
              </h2>
            </motion.div>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            {/* Mission Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className={classes.title + " " + classes.textCenter}>Our Mission</h2>
              <h4 className={classes.description + " " + classes.textCenter} style={{ marginBottom: "40px" }}>
                To promote language access within healthcare by facilitating training, education, and communication between government, providers, interpreters, translators, and individual stakeholders. We pursue our mission with a commitment to improving health equity, clinical outcomes, and patient safety for people with limited English proficiency.
              </h4>
            </motion.div>

            {/* Centered Video Section */}
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "40px"
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
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
            </motion.div>
          </GridItem>

        </GridContainer>
      </div>
      {/* Pricing 5 END */}
    </div>
  );
}
