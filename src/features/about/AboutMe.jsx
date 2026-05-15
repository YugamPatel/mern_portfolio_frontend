/*
 * AboutMe — Compact About Section (mobile / narrow viewport)
 *
 * Rendered on screens ≤ 1200 px wide. Shows layered photos (front/back),
 * the Yugam logo, and two bio paragraphs. On screens > 500 px the wider
 * desktop logo is used; below that the square mobile logo is shown.
 *
 * The ModernAboutMe component (src/features/about/modern/) is shown
 * instead on large screens and offers an interactive mask reveal effect.
 *
 * Props:
 *   aboutData — shape defined in aboutData.js
 */

import "./aboutme.css";
import logo from "../../assets/yugam-logo.png";
import logo2 from "../../assets/Yugam-logo2.png";

const AboutMe = ({ aboutData }) => {
  const useSquareLogo = window.innerWidth < 501;

  return (
    <section className="about-me aboutme" id="theFinalAboutmePage">
      <div className="container">
        <div className="about-me-container">

          <div className="about-me-title">
            About <br /> Yugam Patel
          </div>

          <div className="about-me-flex-container">

            {/* Layered photo stack: decorative back div, accent photo, main photo */}
            <div className="about-me-image">
              <div className="back-div"></div>
              <div className="black-image">
                <img src={aboutData.backPhoto} alt="accent" />
              </div>
              <div className="main-image">
                <img src={aboutData.frontPhoto} alt="Yugam Patel" />
              </div>
            </div>

            {/* Bio text and logo */}
            <div className="about-me-content">
              <div className="about-me-logo">
                <img
                  src={useSquareLogo ? aboutData.mobileLogo : aboutData.logo}
                  alt="Yugam logo"
                />
              </div>
              <div className="about-me-text">
                {aboutData.textP1}
                <br />
                <br />
                {aboutData.textP2}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
