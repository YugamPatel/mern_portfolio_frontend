/*
 * Subinfo — Single Info Line
 *
 * Renders one line of the code-style info block as three colour-coded
 * spans: the variable name, the assignment operator, and the string value.
 * CSS classes (.variable, .character, .string) are defined in info.css.
 *
 * Props:
 *   variable  — the identifier (e.g. "name")
 *   character — the operator (e.g. "=")
 *   string    — the value    (e.g. "Yugam Patel")
 */

import React from "react";

const Subinfo = ({ variable, character, string }) => {
  return (
    <>
      <span className="variable">{variable} </span>
      <span className="character">{character} </span>
      <span className="string">"{string}" </span>
      <br />
    </>
  );
};

export default Subinfo;
