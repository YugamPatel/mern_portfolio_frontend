/*
 * EducationCard — Timeline Entry Card
 *
 * Handles both education and work experience entries. The visual
 * accent colour switches based on the entry type:
 *   isEducation = true  → blue  (#2b95dc)
 *   isEducation = false → teal  (#34d399)
 *
 * Card anatomy (top to bottom):
 *   1. Header  — icon, institution/company name, date badge
 *   2. Sub-row — role title, type badge, location
 *   3. Divider — hairline separator
 *   4. Bullets — responsibility / achievement list
 *   5. Stack   — technology tag pills (work entries only)
 *
 * Props (all sourced from eduAndWorkData.js):
 *   name        — institution or company name
 *   role        — degree or job title
 *   type        — sub-label (e.g. "Work-Term 2 · Part-time")
 *   location    — city string
 *   date        — date range string
 *   iconType    — "university" | "school" | "work"
 *   bullets     — string[]
 *   stack       — string[] (optional; shown only when non-empty)
 *   isEducation — boolean; controls accent colour
 */

import React from "react";
import "./educationCard.css";
import { motion } from "framer-motion";

/* Map iconType → Font Awesome class */
const ICON_MAP = {
  university: "fa-solid fa-graduation-cap",
  school:     "fa-solid fa-school",
  work:       "fa-solid fa-briefcase",
};

const EducationCard = ({
  name,
  role,
  type,
  location,
  date,
  iconType = "work",
  bullets = [],
  stack = [],
  isEducation = false,
}) => {
  const cardVariants = {
    hidden:   { y: 28, opacity: 0 },
    visible:  { y: 0,  opacity: 1 },
  };

  const spring = { type: "spring", stiffness: 55, damping: 14 };

  const accentClass = isEducation ? "ec--edu" : "ec--work";

  return (
    <motion.article
      className={`ec ${accentClass}`}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      transition={spring}
      viewport={{ once: true, margin: "-48px" }}
    >
      {/* ── 1. Header: icon + name + date ── */}
      <div className="ec__header">
        <div className="ec__header-left">
          <div className="ec__icon">
            <i className={ICON_MAP[iconType] ?? ICON_MAP.work} />
          </div>
          <h3 className="ec__name">{name}</h3>
        </div>
        <span className="ec__date">{date}</span>
      </div>

      {/* ── 2. Sub-row: role, type badge, location ── */}
      <div className="ec__sub">
        <span className="ec__role">{role}</span>
        {type && <span className="ec__badge">{type}</span>}
        {location && (
          <span className="ec__location">
            <i className="fa-solid fa-location-dot" />
            {location}
          </span>
        )}
      </div>

      {/* ── 3. Divider ── */}
      <div className="ec__divider" />

      {/* ── 4. Bullet list ── */}
      {bullets.length > 0 && (
        <ul className="ec__bullets">
          {bullets.map((b, i) => (
            <li key={i} className="ec__bullet">
              <span className="ec__dot" aria-hidden="true" />
              <span className="ec__bullet-text">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* ── 5. Tech stack tags (work entries only) ── */}
      {stack.length > 0 && (
        <div className="ec__stack">
          {stack.map((tech, i) => (
            <span key={i} className="ec__tag">{tech}</span>
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default EducationCard;
