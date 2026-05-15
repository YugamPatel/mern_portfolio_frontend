/*
 * GradientCircle — Single Animated Orb
 *
 * Renders one <li> with inline CSS custom properties that drive its
 * gradient, size, position, and float animation. The CSS animation
 * keyframes are defined in modernaboutme.css (.circles li).
 *
 * Props:
 *   gradient          — CSS linear-gradient string
 *   size              — width and height (e.g. "48px")
 *   borderRadius      — CSS border-radius (e.g. "15%")
 *   left              — horizontal start position (e.g. "42%")
 *   animationDelay    — CSS animation-delay (e.g. "1.2s")
 *   animationDuration — CSS animation-duration (e.g. "10s")
 */

import React from "react";

const GradientCircle = ({
  gradient,
  size,
  borderRadius,
  left,
  animationDelay,
  animationDuration,
}) => {
  const style = {
    "--color": gradient,
    width: size,
    height: size,
    borderRadius,
    left,
    animationDelay,
    animationDuration,
  };

  return <li style={style}></li>;
};

export default GradientCircle;
