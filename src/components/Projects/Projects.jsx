import ProjectCard from "./SubComponents/ProjectCard";
import "./projects.css";
import { motion } from "framer-motion";
import { projectData } from "../../Data/projectsData.js";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };
  return (
    <section className="project" id="projects">
      <h1 className="title">Projects</h1>
      <motion.div
        class="projects-container gridDesign"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
      >
        {projectData.map((project,index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            projectUrl={project.projectUrl}
            liveUrl={project.liveUrl}
            title={project.title}
            cover={project.cover}
            stack={project.stack}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
