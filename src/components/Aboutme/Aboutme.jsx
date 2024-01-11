import "./aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutme theFinalAboutmePage" id="about">
      <div className="container">
        <h1>Heres more about me</h1>
        <div className="row">
          <div className="about-col-1">
            <img
              src="http://drive.google.com/uc?export=view&id=1Fp5Y0Bf2QvdZ-sLCOTasIKQCdv7BEoGH"
              alt="YUGAM"
            />
          </div>

          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p className="about-me-p">
              Hi i'm Yugam Patel, a Computer Science student at the University
              of Manitoba, deeply passionate about coding and technology. My
              journey began with a simple "Hello World" and has since evolved
              into a quest to make the digital world better. Skilled in Java and
              always eager to learn new technologies like Flutter, ReactJS, and
              AWS, I thrive on problem-solving and innovation. I believe in
              daily learning and I'm currently open to co-op and job
              opportunities that match my expertise.
            </p>
            <button className="learn">some</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
