import React, { useEffect } from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import user from "../../assets/user.jpeg";

const Hero = () => {
  // TO BE CHECKED BEFORE DEPLOYMENT ---------------
  // -----------------------------------------------
  // -----------------------------------------------
  // -----------------------------------------------
  // -----------------------------------------------

  const textAnimate = () => {
    window.Shery.textAnimate(".whoAmI" /* Element to target.*/, {
      style: 1,
      y: 10,
      delay: 0.2,
      duration: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });
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
            src="https://source.unsplash.com/random/?&mountains&forest&gradient&galaxy&ocean&landscape"
          />
        </div>

        <div className="profile">
          <div className="profileImage">
            <img
              className="smallImage selfImage"
              // src={user}
              src="https://res.cloudinary.com/dwig4hupj/image/upload/v1706492222/20230626_184305_dp26fb.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="text">
          <div className="nameH1">
            <h1 className="hi">
              Hi, I'm <span className="name">Yugam.</span>
            </h1>
            <h2
              className="whoAmI"
              onMouseMoveCapture={(e) => {
                e.preventDefault();
                textAnimate();
              }}
            >
              And i am a,
            </h2>
          </div>

          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "MERN Stack Developer",
                  "Guys-who-loves-Tea.js",
                  "< ButLovesTo-CodeMore />",
                ],
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
            <a href="https://www.facebook.com/yugampatel/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/_.yap07._/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/yugampatel/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/YugamPatel/ " target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </motion.div>

          <motion.button
            className="learn"
            whileHover={{ scale: 1.05, borderRadius: "5px" }}
            whileTap={{ scale: 0.8 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
