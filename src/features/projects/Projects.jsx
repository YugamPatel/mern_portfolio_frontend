/*
 * Projects — Portfolio Projects Section
 *
 * Renders a responsive grid of <ProjectCard> components sourced from
 * the local projectsData.js file. Cards animate in with a stagger so
 * they appear one-by-one rather than all at once.
 *
 * projectsData is imported directly here rather than passed as a prop
 * because this section has no API override — the project list always
 * comes from the local data file.
 */

import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import { motion } from "framer-motion";
import { projectData } from "./projectsData.js";

const Projects = () => {

  /* Parent variant enables staggerChildren so each card animates in sequence */
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="project" id="projects">
      <h1 className="title">Projects</h1>

      <motion.div
        className="projects-container gridDesign"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
      >
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            projectUrl={project.projectUrl}
            liveUrl={project.liveUrl}
            title={project.title}
            cover={project.cover}
            stack={project.stack}
            video={project.video}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
