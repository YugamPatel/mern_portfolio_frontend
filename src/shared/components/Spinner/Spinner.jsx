/*
 * Spinner — Full-Screen Loading Indicator
 *
 * Displayed while the app waits for the initial API response in App.jsx.
 * The animation is CSS-only (six divs that rotate and fade) so it never
 * blocks the JS thread during the fetch.
 */

import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div id="spinner-container">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
