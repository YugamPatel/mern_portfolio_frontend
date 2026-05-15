/*
 * ModernAboutMe — Interactive About Section (large screens only)
 *
 * Displayed on viewports > 1200 px. Uses a CSS custom-property mask
 * driven by GSAP to create a "peek" effect: hovering reveals the dark
 * back layer (code-style info block + gradient circles) through a
 * radial clip centred on the cursor.
 *
 * GSAP timeline on mount:
 *   1. Mask expands from 0 % → 20 % (--m1) to reveal a small circle.
 *   2. Then expands to 30 % (--m2) with a bounce ease.
 *
 * Mouse events:
 *   onMouseEnter — re-runs the expand animation and tracks cursor.
 *   onMouseMove  — updates --x / --y so the mask follows the cursor.
 *   onMouseLeave — collapses the mask back to 0 %.
 *
 * Props:
 *   modernAboutData — shape defined in modernAboutData.js
 */

import React, { useEffect } from "react";
import gsap from "gsap";
import "./modernaboutme.css";
import Info from "./Info";
import GradientCircles from "./GradientCircles";

const ModernAboutMe = ({ modernAboutData }) => {

  /* Initial entrance animation — expands mask on page load */
  const makeMagic = () => {
    const mask = document.querySelector("#div-mask-back");
    const main = document.querySelector(".modernAboutme");

    gsap
      .timeline()
      .to(mask, { "--m1": "20%", delay: 2, duration: 0.2, ease: "back.out(2)" })
      .to(mask, { "--m2": "30%", duration: 0.5, ease: "back.out(2)" });

    /* Track cursor to reposition the mask reveal */
    main.addEventListener("mousemove", (e) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      gsap.to(mask, { "--x": `${x}%`, "--y": `${y}%`, duration: 0.3, ease: "sine.out" });
    });
  };

  /* Collapse mask when cursor leaves the section */
  const leaveMagic = () => {
    const mask = document.querySelector("#div-mask-back");
    gsap.to(mask, { "--m1": "0%", "--m2": "0%", duration: 0.5, ease: "power1.out" });
  };

  /* Re-expand mask when cursor re-enters the section */
  const addMagic = (e) => {
    const mask = document.querySelector("#div-mask-back");
    const x = Math.round((e.clientX / window.innerWidth) * 100);
    const y = Math.round((e.clientY / window.innerHeight) * 100);

    gsap
      .timeline()
      .to(mask, { "--m1": "20%", delay: 0.3, duration: 0.3, ease: "back.out(2)" })
      .to(mask, { "--m2": "30%", duration: 0.4, delay: 0.1, ease: "back.out(2)" });

    gsap.to(mask, { "--x": `${x}%`, "--y": `${y}%`, duration: 0.3, ease: "sine.out" });
  };

  useEffect(() => {
    makeMagic();
  }, []);

  return (
    <div
      className="modernAboutme"
      id="theFinalAboutmePage"
      onMouseLeave={leaveMagic}
      onMouseEnter={addMagic}
    >
      <div className="wrapper">

        {/* Front layer — visible by default, hides behind the mask reveal */}
        <div
          className="area"
          style={{ position: "fixed", backgroundColor: "#786d61" }}
        >
          <ul className="circles">
            {[...Array(10)].map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
        </div>

        <div id="div-mask-front">
          <h1>{modernAboutData.title}</h1>
          <p>{modernAboutData.subTitle}</p>
        </div>

        {/* Back layer — revealed through the cursor-tracked mask */}
        <div id="div-mask-back" area-hidden="true">
          <div
            className="area"
            style={{ position: "absolute", backgroundColor: "#111" }}
          >
            <ul className="circles">
              <GradientCircles />
            </ul>
          </div>
          <Info infoData={modernAboutData.info} />
        </div>

      </div>
    </div>
  );
};

export default ModernAboutMe;
