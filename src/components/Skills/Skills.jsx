import React from "react";
import "./skills.css";
import "./fancy.css";
import SkillTab from "./SkillList/SkillTab.jsx";
import { motion } from "framer-motion";
import MarqueeTab from "./Marquee/MarqueeTab.jsx";


const Skills = ({skillsData}) => {
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
            viewport={{ once: true }}
          >
            {window.innerWidth > 600 ? "Skills" : "Top Skills"}
          </motion.h1>

          <motion.div
            className="subtitleBoxSkills"
            variants={subSkillContainerVariant}
            initial="initial"
            whileInView={"visible"}
          >
            <i className="gem fa-solid fa-gem"></i>
            <h3 className="subTitleSkills">here are my top skills</h3>
          </motion.div>
        </div>
        <SkillTab></SkillTab>
      </div>

      <div className="lowerSkills">
        <motion.h2
          className="lowerTitleSkills"
          id="fancyTitle" /*fancy*/
          data-shadow="Beyond the Basics"
          variants={skillContainerVariant}
          initial="initial"
          whileInView={"visible"}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          Beyond the Basics
        </motion.h2>

        <MarqueeTab spans={[...skillsData.skillsOne]}></MarqueeTab>

        <MarqueeTab
          spans={[...skillsData.skillsTwo]}
          isLeft={false}
          speed={110}
        ></MarqueeTab>

        <MarqueeTab spans={[...skillsData.softSkills]} speed={105}></MarqueeTab>
      </div>
    </div>
  );
};

export default Skills;
