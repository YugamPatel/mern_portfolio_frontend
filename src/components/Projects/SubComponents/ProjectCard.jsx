import React from "react";
import git from "../../../assets/git.svg";
import live from "../../../assets/live.svg";
import { motion } from "framer-motion";

const ProjectCard = ({
  imgSrc,
  projectUrl,
  liveUrl,
  title,
  technologies,
  cover = true,
  stack = "null",
}) => {
  const projectVariant = {
    initial: {
      scale: 0.4,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="project-card"
      variants={projectVariant}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="cardImg">
        <img src={imgSrc} alt={title} className={cover ? "" : "containImg"} />

        <div className="layer">
          <a href={projectUrl} target="_blank" className="gitLogoProject">
            <img src={git} alt="Git Logo" />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" className="liveLogoProject">
              <img src={live} alt="Live Logo" />
            </a>
          )}
          <h3 className="projectTitle">{title}</h3>
        </div>
      </div>

      <div className="morph">
        <h1>{title}</h1>
        <p>{stack}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
