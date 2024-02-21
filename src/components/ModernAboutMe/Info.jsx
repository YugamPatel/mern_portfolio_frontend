import React from "react";
import "./info.css";
import Subinfo from "./Subinfo";
const Info = () => {
  return (
    <pre>
      <Subinfo variable="name" character="=" string="Yugam Patel"></Subinfo>
      <Subinfo
        variable="School"
        character="="
        string="University of Manitoba"
      ></Subinfo>
      <Subinfo
        variable="Degree"
        character="="
        string="Bachelor of Science, Computer Science (Major)"
      ></Subinfo>
      <Subinfo
        variable="About"
        character="="
        string="Hi i'm Yugam Patel, a Computer Science student at the University of Manitoba, deeply passionate about coding and technology. My journey began with a simple 'Hello World' and has since evolved into a quest to make the digital world better. Skilled in Java and always eager to learn new technologies like Flutter, ReactJS, and AWS, I thrive on problem-solving and innovation. I believe in daily learning and I'm currently open to co-op and job opportunities that match my expertise."
      ></Subinfo>
      <Subinfo
        variable="Hobbies"
        character="="
        string=" Photography, Cooking, Reading, Gaming, Traveling and Watching Movies"
      ></Subinfo>
      <br />
    </pre>
  );
};

export default Info;
