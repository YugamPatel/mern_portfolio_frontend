import React from "react";
import "./skills.css";
import SkillTab from "./SkillTab/SkillTab";
import { motion } from "framer-motion";

const Skills = () => {
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
    </div>
  );
};

export default Skills;
