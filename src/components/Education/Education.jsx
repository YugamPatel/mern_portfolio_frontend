import React, { useEffect } from "react";
import "./education.css";
import Box from "./Box/Box";
import { motion } from "framer-motion";
// import { eduAndWorkData } from "../../Data/eduAndWorkData.js";

const Education = ({ eduAndWorkData }) => {
  const screenWidth = window.innerWidth;

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const backgroundVariant =
    screenWidth > 800
      ? {
          initial: { backgroundColor: "#000" },
          visible: {
            backgroundColor: "#021d35",
          },
        }
      : {};

  const transition = {
    backgroundColor: {
      duration: 1,
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
            <h1 className="Merriweather">EDUCATION</h1>
          </header>

          <motion.div
            className="contents"
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: true }} // Ensures the animation only plays once
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            {eduAndWorkData?.education?.map((edu, index) => (
              <Box
                key={index}
                title={edu.name}
                para={edu.desc}
                date={edu.date}
                isEducation={true}
              />
            ))}
          </motion.div>
        </section>

        <section className="col">
          <header className="title">
            <h1 className="Merriweather">EXPERIENCE</h1>
          </header>

          <motion.div
            className="contents"
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          >
            {eduAndWorkData?.work?.map((work, index) => (
              <Box
                key={index}
                title={work.name}
                para={
                  window.innerWidth < 500 && work.mobileDec
                    ? work.mobileDec
                    : work.desc
                }
                date={work.date}
                notice={work.isNotice}
              />
            ))}
          </motion.div>
        </section>
      </main>
    </motion.div>
  );
};

export default Education;
