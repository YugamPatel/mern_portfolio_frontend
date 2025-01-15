import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="cup">
        <div className="handle"></div>
      </div>
      <div class="center-line-x"></div>
      <div class="center-line-y"></div>
    </div>
  );
};

export default Spinner;
