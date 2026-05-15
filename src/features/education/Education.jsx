/*
 * Education — Education & Experience Section
 *
 * Two-column layout: academic history (left) and work experience (right).
 * On screens ≤ 850 px the columns stack vertically.
 *
 * Data from eduAndWorkData.js is passed straight through to EducationCard.
 * Each entry object now carries: name, role, type, location, date,
 * iconType, bullets, and (for work) a stack array.
 *
 * Props:
 *   eduAndWorkData — { education: [...], work: [...] }
 */

import React from "react";
import "./education.css";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

const Education = ({ eduAndWorkData }) => {
  const isWide = window.innerWidth > 800;

  /* Subtle background colour transition on wide screens */
  const backgroundVariant = isWide
    ? {
        initial: { backgroundColor: "#021d35" },
        visible: { backgroundColor: "#021d35" },
      }
    : {};

  /* Column content fades up as it enters the viewport */
  const columnVariant = {
    hidden:  { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0  },
  };

  return (
    <motion.div
      className="education"
      id="EducationPage"
      initial={isWide ? "initial" : undefined}
      whileInView={isWide ? "visible" : undefined}
      variants={backgroundVariant}
      transition={isWide ? { backgroundColor: { duration: 1.2, ease: "easeInOut" } } : undefined}
      viewport={isWide ? { once: true } : undefined}
    >
      <main className="row">

        {/* ── Education column ── */}
        <section className="col">
          <header className="title">
            <h1>EDUCATION</h1>
          </header>

          <motion.div
            className="contents"
            initial="hidden"
            whileInView="visible"
            variants={columnVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            {eduAndWorkData?.education?.map((edu, index) => (
              <EducationCard
                key={index}
                name={edu.name}
                role={edu.role}
                type={edu.type}
                location={edu.location}
                date={edu.date}
                iconType={edu.iconType}
                bullets={edu.bullets}
                isEducation={true}
              />
            ))}
          </motion.div>
        </section>

        {/* ── Work experience column ── */}
        <section className="col">
          <header className="title">
            <h1 className="Merriweather">EXPERIENCE</h1>
          </header>

          <motion.div
            className="contents"
            initial="hidden"
            whileInView="visible"
            variants={columnVariant}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            {eduAndWorkData?.work?.map((work, index) => (
              <EducationCard
                key={index}
                name={work.name}
                role={work.role}
                type={work.type}
                location={work.location}
                date={work.date}
                iconType={work.iconType}
                bullets={work.bullets}
                stack={work.stack}
                isEducation={false}
              />
            ))}
          </motion.div>
        </section>

      </main>
    </motion.div>
  );
};

export default Education;
