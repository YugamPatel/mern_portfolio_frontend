/*
 * Info — Code-Style Info Block
 *
 * Renders the modernAboutData.info array as a monospaced block that
 * mimics variable declarations (e.g. `name = "Yugam Patel"`).
 * Each line is a <Subinfo> component that colours the three parts
 * (variable, operator, string) independently.
 *
 * Props:
 *   infoData — array of { var, char, str } objects from modernAboutData.js
 */

import React from "react";
import "./info.css";
import Subinfo from "./Subinfo";

const Info = ({ infoData }) => {
  return (
    <pre>
      {infoData.map((item, index) => (
        <Subinfo
          key={index}
          variable={item.var}
          character={item.char}
          string={item.str}
        />
      ))}
      <br />
    </pre>
  );
};

export default Info;
