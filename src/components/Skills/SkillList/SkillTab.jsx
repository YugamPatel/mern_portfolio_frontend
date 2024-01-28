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
        <li className="jquery">jquery</li>
        <li className="ajax">ajax</li>
        <li className="lamp">lamp</li>
        <li className="seo">seo</li>
        <li className="jg">j.g.</li>
        <li className="sysadmin">sysadmin</li>
        <li className="objectoriented">Object-oriented</li>
        <li className="accessibility">accessibility</li>
        <li className="responsive">responsive layout</li>
        <li className="usability">usability</li>
        <li className="webstandards">webstandards</li>
        <li className="crossbrowser">cross-browser</li>
        <li className="revisionctrl">Revision control</li>
      </ul>
    </motion.div>
  );
};

export default SkillTab;
