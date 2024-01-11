import React from "react";
import "./info.css";

const Info = () => {
  return (
    <pre>
      <span className="variable">name</span>
      <span className="character">= </span>
      <span className="string">"Yugam Amish Patel" </span>
      <br />
      <span className="variable">age </span>
      <span className="character">= </span>
      <span className="number">20 </span>
      <br />
      <span className="variable">profession </span>
      <span className="character">= </span>
      <span className="string">
        "Software Engineer & CyberSecurity Enthusiast"
      </span>
      <br />
      <span className="variable">experties </span>
      <span className="character">= </span>
      <span className="string">
        "Developing Mobile, Desktop and Web Applications"
      </span>
      <br />
      <br />
      <span class="variable">skills</span> <span class="character">= </span>
      <br />
      <span class="bracket">{"{"}</span>
      <br />
      <br />
      <span class="string">"Full-Stack Web Developer"</span>
      <span class="character"> : </span>
      <span class="string">"HTML/CSS | Node/JS | Laravel | React..."</span>
      <span class="character">,</span>
      <br />
      <br />
      <span class="string">"Desktop App Developer"</span>
      <span class="character"> : </span>
      <span class="string">".Net | UWP | WPF | C# | C++ | Winform"</span>
      <span class="character">,</span>
      <br />
      <br />
      <span class="string">"Mobile App Developer"</span>
      <span class="character"> : </span>
      <span class="string">"Java | Kotlin | Flutter"</span>
      <span class="character">,</span>
      <br />
      <br />
      <span class="string">"Game Developer"</span>
      <span class="character"> : </span>
      <span class="string">"Unity | Godot | C++"</span>
      <span class="character">,</span>
      <br />
      <br />
      <span class="string">"Cyber Security"</span>
      <span class="character"> : </span>
      <span class="string">"Linux | Wireshark | Fiddler..."</span>
      <span class="character">,</span>
      <br />
      <br />
      <span class="string">"Other"</span>
      <span class="character"> : </span>
      <span class="string">"Python | Git/Github | GCP | Firebase..."</span>
      <span class="character">,</span>
      <br />
      <br />
      <span class="bracket">{"}"}</span>
    </pre>
  );
};

export default Info;
