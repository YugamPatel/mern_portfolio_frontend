/*
 * GradientCircles — Animated Background Orbs
 *
 * Generates 20 <GradientCircle> elements with randomised gradient
 * colours, sizes, positions, and animation timings. Rendered inside
 * the dark back layer of ModernAboutMe as a decorative background.
 *
 * All values are randomised on each mount; no seeds are used so the
 * pattern changes every time the about section is visited.
 */

import React from "react";
import GradientCircle from "./GradientCircle";

const GradientCircles = () => {

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

  const randomStyle = () => ({
    gradient:          `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${randomColor()}, ${randomColor()})`,
    size:              `${Math.floor(20 + Math.random() * 70)}px`,
    borderRadius:      `${Math.floor(Math.random() * 30)}%`,
    left:              `${Math.floor(Math.random() * 110)}%`,
    animationDelay:    `${Math.random() * 2}s`,
    animationDuration: `${5 + Math.random() * 15}s`,
  });

  const circles = Array.from({ length: 20 }, (_, i) => {
    const s = randomStyle();
    return (
      <GradientCircle
        key={i}
        gradient={s.gradient}
        size={s.size}
        borderRadius={s.borderRadius}
        left={s.left}
        animationDelay={s.animationDelay}
        animationDuration={s.animationDuration}
      />
    );
  });

  return <>{circles}</>;
};

export default GradientCircles;
