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
    borderRadius: borderRadius,
    left: left,
    animationDelay: animationDelay,
    animationDuration: animationDuration,
  };

  return <li style={style}></li>;
};

export default GradientCircle;
