import React from "react";
import GradientCircle from "./GradianCircle";

const GradiantCircles = () => {
  function getRandomGradientStyle() {
    // Function to generate random color
    const randomColor = () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Generate two random colors for the gradient
    const color1 = randomColor();
    const color2 = randomColor();

    // Generate a random angle for the linear gradient
    const angle = Math.floor(Math.random() * 360);

    // Generate random size between 20px and 100px
    const size = `${Math.floor(20 + Math.random() * 70)}px`;

    const borderRadius = `${Math.floor(Math.random() * 30)}%`;

    const animationDelay = `${Math.random() * 2}s`;

    const animationDuration = `${5 + Math.random() * 15}s`;

    const left = `${Math.floor(Math.random() * 110)}%`;

    return {
      gradient: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
      size: size,
      borderRadius: borderRadius,
      left: left,
      animationDelay: animationDelay,
      animationDuration: animationDuration,
    };
  }

  // Create an array of GradientCircle components using a for loop
  const gradientCircles = [];
  for (let i = 0; i < 20; i++) {
    const style = getRandomGradientStyle();
    gradientCircles.push(
      <GradientCircle
        key={i}
        gradient={style.gradient}
        size={style.size}
        borderRadius={style.borderRadius}
        left={style.left}
        animationDelay={style.animationDelay}
        animationDuration={style.animationDuration}
      />
    );
  }

  const randomStyle = getRandomGradientStyle();

  return <>{gradientCircles}</>;
};

export default GradiantCircles;
