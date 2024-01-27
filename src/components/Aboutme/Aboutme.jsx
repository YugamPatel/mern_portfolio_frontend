import "./aboutme.css";
import logo from "../../assets/yugam-logo.png";
import logo2 from "../../assets/yugam-logo2.png";

const Aboutme = () => {
  const vlogo = window.innerWidth < 501;

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
                <img
                  src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg"
                  alt="black"
                />
                {/* Update path */}
              </div>
              <div className="main-image">
                <img
                  src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/smit.jpg"
                  alt="yugam"
                />
                {/* Update path */}
              </div>
            </div>
            <div className="about-me-content">
              <div className="about-me-logo">
                <img
                  src={vlogo ? logo2 : logo}
                  alt="yugam"
                />
                {/* Update path */}
              </div>
              <div className="about-me-text">
                {/* Update text */}
                An ambitious Front-end Developer and designer who takes great
                pride in the presentation and quality of work <br />
                <br />
                Smit is someone who can design and create simple, beautiful and
                easy to understand things. He is an expert at taking designs
                into original, exciting and new directions.
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
