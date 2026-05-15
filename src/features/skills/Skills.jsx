/*
 * Skills — Skills Showcase Section
 *
 * Divided into two visual areas:
 *
 *   Upper  — A grid of colour-coded skill tag chips (SkillTab) with an
 *            animated section title that slides in from the left.
 *
 *   Lower  — Three rows of auto-scrolling marquee text (MarqueeTab) each
 *            carrying a different skill array from skillsData. The "Beyond
 *            the Basics" heading uses a CSS text-shadow trick (fancy.css)
 *            to create a layered shadow label effect.
 *
 * Props:
 *   skillsData — { skillsOne, skillsTwo, softSkills } from skillsData.js
 */

import React from "react";
import "./skills.css";
import "./fancy.css";
import SkillTab from "./SkillTab";
import MarqueeTab from "./MarqueeTab";
import { motion } from "framer-motion";

const Skills = ({ skillsData }) => {

  /* Title slides in from the left edge on scroll */
  const titleVariant = {
    initial: { x: -100 },
    visible: { x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  /* Subtitle fades in on scroll */
  const subtitleVariant = {
    initial: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  return (
    <div className="skills" id="skillsPage">

      {/* ── Upper: skill tag chips ── */}
      <div className="upperSkills">
        <div className="boxTitleSkills">
          <motion.h1
            className="titleSkills"
            variants={titleVariant}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {window.innerWidth > 600 ? "Skills" : "Top Skills"}
          </motion.h1>

          <motion.div
            className="subtitleBoxSkills"
            variants={subtitleVariant}
            initial="initial"
            whileInView="visible"
          >
            <i className="gem fa-solid fa-gem"></i>
            <h3 className="subTitleSkills">here are my top skills</h3>
          </motion.div>
        </div>

        <SkillTab />
      </div>

      {/* ── Lower: scrolling marquee rows ── */}
      <div className="lowerSkills">
        <motion.h2
          className="lowerTitleSkills"
          id="fancyTitle"
          data-shadow="Beyond the Basics"
          variants={titleVariant}
          initial="initial"
          whileInView="visible"
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          Beyond the Basics
        </motion.h2>

        <MarqueeTab spans={[...skillsData.skillsOne]} />
        <MarqueeTab spans={[...skillsData.skillsTwo]} isLeft={false} speed={110} />
        <MarqueeTab spans={[...skillsData.softSkills]} speed={105} />
      </div>

    </div>
  );
};

export default Skills;
