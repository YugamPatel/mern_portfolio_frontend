import React, { useRef } from "react";
import git from "../../../assets/git.svg";
import live from "../../../assets/live.svg";
import { motion } from "framer-motion";

const ProjectCard = ({
  imgSrc,
  projectUrl,
  liveUrl,
  title,
  cover = true,
  stack = "null",
  video = false,
}) => {
  const videoRef = useRef(null);

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
      onMouseEnter={() => videoRef.current && videoRef.current.pause()}
      onMouseLeave={() => videoRef.current && videoRef.current.play()}
    >
      <div className="cardImg">
        {video ? (
          <video
            ref={videoRef}
            src={imgSrc} // Use imgSrc as the video source (or change prop name as needed)
            className={cover ? "coverImg" : "containImg"}
            muted
            loop
            playsInline
            onClick={() => {
              if (videoRef.current) {
                if (videoRef.current.paused) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
              }
            }}
          />
        ) : (
          <img
            src={imgSrc}
            alt={title}
            className={cover ? "coverImg" : "containImg"}
          />
        )}

        <div className="layer">
          <a href={projectUrl} target="_blank" className="gitLogoProject">
            <img src={git} alt="Git Logo" />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" className="liveLogoProject">
              <img src={live} alt="Live Logo" />
            </a>
          )}
          {/* <h3 className="projectTitle">{title}</h3> */}
        </div>
      </div>

      <div className="morph">
        <h1>{title}</h1>
        <p>
          {stack.map((tech, index) => (
            <span key={index}>{tech + " / "}</span>
          ))}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
