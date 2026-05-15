/*
 * ProjectCard — Individual Project Tile
 *
 * Displays a project image (or autoplay video) with a hover overlay
 * showing GitHub and live-demo links. Below the image sits the project
 * title and a slash-separated tech stack list.
 *
 * Video behaviour:
 *   - Autoplays muted and looped on mount.
 *   - Pauses on hover (so the overlay links are accessible without motion).
 *   - Clicking the video itself toggles play/pause.
 *
 * Animation:
 *   - Card scales from 0.4 → 1 and fades in when it enters the viewport.
 *
 * Props:
 *   imgSrc     — image URL or video URL (when video = true)
 *   projectUrl — GitHub repository URL
 *   liveUrl    — live demo URL (optional; link is omitted if not provided)
 *   title      — project name
 *   cover      — true → object-fit: cover, false → object-fit: contain
 *   stack      — array of technology name strings
 *   video      — true if imgSrc points to a video file (default false)
 */

import React, { useRef } from "react";
import git from "../../assets/git.svg";
import live from "../../assets/live.svg";
import { motion } from "framer-motion";

const ProjectCard = ({
  imgSrc,
  projectUrl,
  liveUrl,
  title,
  cover = true,
  stack = [],
  video = false,
}) => {
  const videoRef = useRef(null);

  const cardVariant = {
    initial: { scale: 0.4, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const handleVideoToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariant}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => videoRef.current?.pause()}
      onMouseLeave={() => videoRef.current?.play()}
    >
      <div className="cardImg">

        {/* Render a video or image depending on the media type */}
        {video ? (
          <video
            ref={videoRef}
            src={imgSrc}
            className={cover ? "coverImg" : "containImg"}
            muted
            loop
            playsInline
            onClick={handleVideoToggle}
          />
        ) : (
          <img
            src={imgSrc}
            alt={title}
            className={cover ? "coverImg" : "containImg"}
          />
        )}

        {/* Hover overlay with GitHub and live-demo icon links */}
        <div className="layer">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="gitLogoProject">
            <img src={git} alt="GitHub" />
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="liveLogoProject">
              <img src={live} alt="Live demo" />
            </a>
          )}
        </div>

      </div>

      {/* Title and tech stack below the image */}
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
