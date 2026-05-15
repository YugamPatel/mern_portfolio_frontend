/*
 * Hero — Landing Section
 *
 * The first thing visitors see: a full-width banner with a background
 * image, a circular profile photo, animated name/subtitle text, a
 * typewriter role cycle, social links, and a resume download button.
 *
 * Animation notes:
 *   - Shery.js drives the "Who Am I" text distortion and the magnetic
 *     logo pull effect; both are initialised in useEffect on mount.
 *   - Social icons and the resume button use Framer Motion.
 *
 * Props:
 *   heroData — shape defined in heroData.js (falls back to local data
 *              in HomePage if the API is unavailable)
 */

import React, { useEffect } from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = ({ heroData }) => {
  /* Re-runs the Shery text animation; called on mount and on mouse re-enter */
  const textAnimate = () => {
    window.Shery.textAnimate(".whoAmI", heroData.heroSubTitle.shery);
  };

  useEffect(() => {
    /* Magnetic pull on the sidebar logo element */
    window.Shery.makeMagnet(".logo", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.4,
    });
    textAnimate();
  }, []);

  /* Resolve the hero background image: prefer the custom URL, fall back to random */
  const heroImgSrc =
    heroData.heroImage.isRandom || !heroData.heroImage.img
      ? heroData.heroImage.randomImg
      : heroData.heroImage.img;

  return (
    <div className="hero">
      <div className="header">

        {/* Full-width background banner image */}
        <div className="headerImage">
          <img className="smallImage" src={heroImgSrc} alt="hero background" />
        </div>

        {/* Circular profile photo */}
        <div className="profile">
          <div className="profileImage">
            <img
              className="smallImage"
              style={heroData.profileImage.style}
              src={heroData.profileImage.img?.url}
              alt="profile"
            />
          </div>
        </div>

        {/* Name, subtitle, typewriter, socials, and resume button */}
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

          {/* Social media icon links — fade in after a short delay */}
          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
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
