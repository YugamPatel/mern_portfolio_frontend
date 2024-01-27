import React from "react";
import "./education.css";
import Box from "./Box/Box";
import { motion } from "framer-motion";

const Education = () => {
  const screenWidth = window.innerWidth;

  const containerVariant = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  const backgroundVariant =
    screenWidth > 800
      ? {
          initial: { backgroundColor: "#ffffff" },
          visible: {
            backgroundColor: "#021d35",
          },
        }
      : {};

  const transition = {
    backgroundColor: {
      duration: 1, // Duration for the background color transition
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className="education"
      id="EducationPage"
      initial={screenWidth > 800 ? "initial" : undefined}
      whileInView={screenWidth > 800 ? "visible" : undefined}
      variants={backgroundVariant}
      transition={screenWidth > 800 ? transition : undefined}
      viewport={screenWidth > 800 ? { once: true } : undefined}
    >
      <main className="row">
        <section className="col">
          <header className="title">
            <h2 className="Merriweather">EDUCATION</h2>
          </header>

          <motion.div
            className="contents"
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: true }} // Ensures the animation only plays once
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Box
              title="High School Degree"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              date="2018 - 2022"
              isEducation={true}
            />
            <Box
              title="High School Degree"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              date="2018 - 2022"
              isEducation={true}
            />
          </motion.div>
        </section>

        <section className="col">
          <header className="title">
            <h2 className="Merriweather">EXPERIENCE</h2>
          </header>

          <motion.div
            className="contents"
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: true }} // Ensures the animation only plays once
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Box
              date="2018 - 2022"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              title="UI/UX Designer"
            />

            <Box
              date="2018 - 2022"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              title="UI/UX Designer"
            />

            <Box
              date="2018 - 2022"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              title="UI/UX Designer"
            />
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
};

export default Education;
