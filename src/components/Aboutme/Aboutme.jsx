import "./aboutme.css";
import logo from "../../assets/yugam-logo.png";
import logo2 from "../../assets/Yugam-logo2.png";
import { useEffect } from "react";

const Aboutme = ({ aboutData }) => {
  const vlogo = window.innerWidth < 501;

  useEffect(() => {
    // console.log("Updated aboutData:", aboutData);
  }, [aboutData]);

  return (
    <section className="about-me aboutme" id="theFinalAboutmePage">
      <div className="container">
        <div className="about-me-container">
          <div className="about-me-title">
            About <br /> Yugam Patel
          </div>

          <div className="about-me-flex-container">
            <div className="about-me-image">
              <div className="back-div"></div>
              <div className="black-image">
                <img src={aboutData.backPhoto} alt="black" />
              </div>
              <div className="main-image">
                <img src={aboutData.frontPhoto} alt="yugam" />
              </div>
            </div>
            <div className="about-me-content">
              <div className="about-me-logo">
                <img
                  src={vlogo ? aboutData.mobileLogo : aboutData.logo}
                  alt="yugam"
                />
              </div>
              <div className="about-me-text">
                {aboutData.textP1} <br />
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

export default Aboutme;
