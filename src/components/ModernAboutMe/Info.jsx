import React from "react";
import "./info.css";
import Subinfo from "./Subinfo";
const Info = () => {
  return (
    <pre>
      <Subinfo
        variable="name"
        character="="
        string="Yugam Amish Patel"
      ></Subinfo>
      <Subinfo variable="age" character="=" string={20}></Subinfo>
      <Subinfo
        variable="profession"
        character="="
        string="Software Engineer & CyberSecurity Enthusiast"
      ></Subinfo>
      <Subinfo
        variable="experties"
        character="="
        string="Developing Mobile, Desktop and Web Applications"
      ></Subinfo>
      <Subinfo
        variable="About"
        character="="
        string="Hi i'm Yugam Patel, a Computer Science student at the University of Manitoba, deeply passionate about coding and technology. My journey began with a simple 'Hello World' and has since evolved into a quest to make the digital world better. Skilled in Java and always eager to learn new technologies like Flutter, ReactJS, and AWS, I thrive on problem-solving and innovation. I believe in daily learning and I'm currently open to co-op and job opportunities that match my expertise."
      ></Subinfo>
      
      <span className="variable">skills</span> 
      <span class="character">= </span>
      <br />
      <span className="bracket">{"{"}</span>
      <br />
      <span className="string">"Full-Stack Web Developer"</span>
      <span className="character"> : </span>
      <span className="string">"HTML/CSS | Node/JS | Laravel | React..."</span>
      <span className="character">,</span>
      <br />
      <span className="string">"Desktop App Developer"</span>
      <span className="character"> : </span>
      <span className="string">".Net | UWP | WPF | C# | C++ | Winform"</span>
      <span className="character">,</span>
      <br />
      <span className="string">"Mobile App Developer"</span>
      <span className="character"> : </span>
      <span className="string">"Java | Kotlin | Flutter"</span>
      <span className="character">,</span>
      <br />
      <span className="string">"Game Developer"</span>
      <span className="character"> : </span>
      <span className="string">"Unity | Godot | C++"</span>
      <span className="character">,</span>
      <br />
      <span className="string">"Cyber Security"</span>
      <span className="character"> : </span>
      <span className="string">"Linux | Wireshark | Fiddler..."</span>
      <span className="character">,</span>
      <br />
      <span className="string">"Other"</span>
      <span className="character"> : </span>
      <span className="string">"Python | Git/Github | GCP | Firebase..."</span>
      <span className="character">,</span>
      <br />
      <span className="bracket">{"}"}</span>
      <br />
    </pre>
  );
};

export default Info;
