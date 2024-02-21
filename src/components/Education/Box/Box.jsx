import React from "react";
import "./box.css";
import { motion } from "framer-motion";

const Box = ({ title, para, date, isEducation = false, notice = false }) => {
  const spring = {
    type: "spring",
    stiffness: 9,
    damping: 1,
  };
  const containerVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      className="box"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      transition={spring}
    >
      <h4>{date}</h4>
      <div className="icon-line">
        {isEducation ? (
          <i className="fa-solid fa-school"></i>
        ) : notice ? (
          <i className="fa-solid fa-code"></i>
        ) : (
          <i className="fa-solid fa-briefcase"></i>
        )}
        <h3 className="icon-line">{title}</h3>
      </div>
      <p className="box-para">{para}</p>
    </motion.div>
  );
};

export default Box;
