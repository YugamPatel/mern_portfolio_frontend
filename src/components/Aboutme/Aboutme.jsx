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
                  src="https://res.cloudinary.com/dwig4hupj/image/upload/v1707097539/portfolio/about/vhtose4jdeupelcqnrd1.jpg"
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
                Hello, I'm Yugam, a MERN,Full Stack and Flutter Developer. I
                merge technical expertise with effective communication and
                problem-solving skills to deliver outstanding projects with
                impressive presentation <br />
                <br />
                As a Computer Science student at the University of Manitoba, my
                passion for technology drives me. Committed to continuous
                learning, I embrace the dynamic tech industry, eager to
                contribute and collaborate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
