import React, { useEffect } from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import ProfileImage from "../ProfileImage/ProfileImage";


const Hero = ({ heroData }) => {
  const textAnimate = () => {
    window.Shery.textAnimate(".whoAmI", heroData.heroSubTitle.shery);
  };

  useEffect(() => {
    window.Shery.makeMagnet(".logo", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.4,
    });
    textAnimate();
  }, []);

  return (
    <div className="hero">
      <div className="header">
        <div className="headerImage">
          <img
            className="smallImage"
            src={
              heroData.heroImage.isRandom || !heroData.heroImage.img
                ? heroData.heroImage.randomImg
                : heroData.heroImage.img
            }
          />
        </div>

        <ProfileImage
          src={heroData.profileImage.img?.url}
          styleOverrides={heroData.profileImage.style}
          className={"profile"}
        ></ProfileImage>

        <div className="text">
          <div className="nameH1">
            <h1 className="hi">
              {heroData.heroTitle.intro}
              <span className="name">{heroData.heroTitle.name}</span>
            </h1>
            <h2
              className="whoAmI"
              onMouseMoveCapture={(e) => {
                e.preventDefault();
                textAnimate();
              }}
            >
              {heroData.heroSubTitle.subTitle}
            </h2>
          </div>

          <div className="typewriter">
            <Typewriter
              options={{
                strings: [...heroData.typewriter],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
                pauseFor: 2000,
              }}
            />
          </div>

          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.3,
              delay: 0.5,
            }}
          >
            {heroData.socialLinks.map((social) => (
              <a
                className="social"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </motion.div>

          <motion.button
            className="learn"
            whileHover={{ scale: 1.05, borderRadius: "5px" }}
            whileTap={{ scale: 0.8 }}
          >
            <a
              href={heroData.button.url}
              download
              target="_blank"
              className="noLink"
            >
              {heroData.button.name}
            </a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
