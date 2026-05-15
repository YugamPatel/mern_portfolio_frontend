/*
 * MarqueeTab — Auto-Scrolling Skill Row
 *
 * Wraps react-fast-marquee to display a row of skill spans that scroll
 * continuously. Three instances are used in Skills.jsx — one left-scrolling,
 * one right-scrolling, one at a slightly different speed — to give the
 * "Beyond the Basics" area visual depth.
 *
 * Animation:
 *   - The marquee wrapper grows vertical margin (0 → 15 px) as it enters
 *     the viewport, giving a subtle "breathe in" entrance.
 *   - The text content fades in after a 1.5 s delay so the motion settles
 *     before the labels appear.
 *
 * Props:
 *   spans  — array of skill label strings to display
 *   isLeft — scroll direction; true = left (default), false = right
 *   speed  — pixels per second (default 100)
 */

import React from "react";
import "./marqueeTab.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const MarqueeTab = ({ spans, isLeft = true, speed = 100 }) => {

  const wrapperVariant = {
    initial: { marginTop: "0px", marginBottom: "0px" },
    animate: {
      marginTop: "15px",
      marginBottom: "15px",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5 } },
  };

  return (
    <motion.div
      className="marquee"
      variants={wrapperVariant}
      initial="initial"
      whileInView="animate"
    >
      <Marquee
        speed={speed}
        pauseOnHover={true}
        gradient={false}
        pauseOnClick={true}
        direction={isLeft ? "left" : "right"}
      >
        <motion.p variants={contentVariant} initial="hidden" animate="visible">
          {spans.map((span, index) => (
            <span key={index}>{span}</span>
          ))}
        </motion.p>
      </Marquee>
    </motion.div>
  );
};

export default MarqueeTab;
