import React from "react";
import "./skillTab.css";
import { motion } from "framer-motion";

const SkillTab = () => {
  const skillTabContainerVariant = {
    hidden: { scale: 0.4 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      id="box"
      variants={skillTabContainerVariant}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <ul id="info">
        <li className="html5">html5</li>
        <li className="css3">css3</li>
        <li className="javascript">javascript</li>
        <li className="react">react</li>
        <li className="gsap">gsap</li>
        <li className="java">java</li>
        <li className="sql">sql</li>
        <li className="cpp">c++</li>
        <li className="express">express</li>
        <li className="objectoriented">Object-oriented</li>
        <li className="android">Android studio</li>
        <li className="responsive">responsive layout</li>
        <li className="flutter">flutter</li>
        <li className="teamb">Team Building</li>
        <li className="framer">Framer-motion</li>
        <li className="creative">Creative thinking</li>
      </ul>
    </motion.div>
  );
};

export default SkillTab;
