import React from "react";
import "./marqueeTab.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const MarqueeTab = ({ spans, isLeft = true, speed = 100 }) => {
  const contVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
      },
    },
  };

  const marqueeVariants = {
    initial: {
      marginTop: "0px",
      marginBottom: "0px",
    },
    animate: {
      marginTop: "15px",
      marginBottom: "15px",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="marquee"
      variants={marqueeVariants}
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
        <motion.p variants={contVariant} initial="hidden" animate="visible">
          {spans.map((span, index) => (
            <span key={index}>{span}</span>
          ))}
        </motion.p>
      </Marquee>
    </motion.div>
  );
};

export default MarqueeTab;
