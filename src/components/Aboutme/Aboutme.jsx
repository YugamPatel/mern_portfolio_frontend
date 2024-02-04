import "./aboutme.css";
import logo from "../../assets/yugam-logo.png";
import logo2 from "../../assets/Yugam-logo2.png";

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
                  src="https://res.cloudinary.com/dwig4hupj/image/upload/v1707072393/portfolio/about/aboutImage/n6te3wcibgpugpg1ptsl.jpg"
                  alt="black"
                />
              </div>
              <div className="main-image">
                <img
                  src="https://res.cloudinary.com/dwig4hupj/image/upload/v1707072392/portfolio/about/aboutImage/o6j5ehbsxha1bparz8cz.jpg"
                  alt="yugam"
                />
                {/* Update path */}
              </div>
            </div>
            <div className="about-me-content">
              <div className="about-me-logo">
                <img src={vlogo ? logo2 : logo} alt="yugam" />
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
