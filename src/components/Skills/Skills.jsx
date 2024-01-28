import React from "react";
import "./skills.css";
import SkillTab from "./SkillList/SkillTab.jsx";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const contVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
      },
    },
  };
  const skillContainerVariant = {
    initial: { x: -100 },
    visible: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const subSkillContainerVariant = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="skills" id="skillsPage">
      <div className="upperSkills">
        <div className="boxTitleSkills">
          <motion.h1
            className="titleSkills"
            variants={skillContainerVariant}
            initial="initial"
            whileInView={"visible"}
          >
            Skills
          </motion.h1>

          <motion.div
            className="subtitleBoxSkills"
            variants={subSkillContainerVariant}
            initial="initial"
            whileInView={"visible"}
          >
            <i class="gem fa-solid fa-gem"></i>
            <h3 className="subTitleSkills">here are my top skills</h3>
          </motion.div>
        </div>
        <SkillTab></SkillTab>
      </div>

      <div className="lowerSkills">

        <motion.h2
          className="lowerTitleSkills"
          variants={skillContainerVariant}
          initial="initial"
          whileInView={"visible"}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          Beyond the Basics
        </motion.h2>

        <div className="marquee one">
          <Marquee
            speed={100}
            pauseOnHover={true}
            gradient={false}
            pauseOnClick={true}
          >
            <motion.p variants={contVariant} initial="hidden" animate="visible">
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>Git</span>
              <span>Docker</span>
            </motion.p>
          </Marquee>
        </div>

        <div className="marquee two">
          <Marquee
            speed={100}
            pauseOnHover={true}
            gradient={false}
            pauseOnClick={true}
            direction="right"
          >
            <motion.p variants={contVariant} initial="hidden" animate="visible">
              <span>AWS</span>
              <span>Linux</span>
              <span>SQL</span>
              <span>GraphQL</span>
              <span>REST APIs</span>
              <span>WebSockets</span>
            </motion.p>
          </Marquee>
        </div>

        <div className="marquee">
          <Marquee
            speed={110}
            pauseOnHover={true}
            gradient={false}
            pauseOnClick={true}
          >
            <motion.p
              variants={contVariant}
              initial="hidden"
              animate="visible"
            >
              <span>Problem Solving</span>
              <span>Teamwork</span>
              <span>Leadership</span>
              <span>Communication</span>
              <span>Agile Methodology</span>
              <span>Critical Thinking</span>
            </motion.p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
