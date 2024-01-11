import React, { useEffect } from "react";
import gsap from "gsap";
import "./ModernAboutme.css";

import Info from "./Info";
import GradiantCircles from "./GradiantCircles";

const ModernAboutme = () => {
  const makeMagic = () => {
    console.log("makeMagic");
    const mask = document.querySelector("#div-mask-back");
    const main = document.querySelector(".modernAboutme");
    const tl = gsap.timeline();
    tl.to(mask, {
      "--m1": "20%",
      delay: 2,
      duration: 0.5,
      ease: "back.out(2)",
    }).to(mask, {
      "--m2": "30%",
      duration: 0.5,
      delay: 0.5,
      ease: "back.out(2)",
    });

    main.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(mask, {
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.3,
        ease: "sine.out",
      });
    });
  };

  const leaveMagic = () => {
    const mask = document.querySelector("#div-mask-back");
    gsap.to(mask, {
      "--m1": "0%",
      "--m2": "0%",
      duration: 0.5,
      ease: "power1.out",
    });
    console.log("leaveMagic");
  };

  const addMagic = (e) => {
    const mask = document.querySelector("#div-mask-back");
    const main = document.querySelector(".modernAboutme");
    const tl = gsap.timeline();
    console.log("addMagic");
    tl.to(mask, {
      "--m1": "20%",
      delay: 0.7,
      duration: 0.5,
      ease: "back.out(2)",
    }).to(mask, {
      "--m2": "30%",
      duration: 0.5,
      delay: 0.5,
      ease: "back.out(2)",
    });

    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    gsap.to(mask, {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    });
  };

  useEffect(() => {
    makeMagic();
  }, []);

  return (
    <div
      className="modernAboutme"
      id="theFinalAboutmePage"
      onMouseLeave={() => leaveMagic()}
      onMouseEnter={(e) => addMagic(e)}
    >
      <div className="wrapper">
        <div
          className="area"
          style={{ position: "fixed", backgroundColor: "#786d61" }}
        >
          <ul className="circles">
            {[...Array(10)].map((_, i) => (
              <li key={i}></li>
            ))}
          </ul>
        </div>

        <div id="div-mask-front">
          <h1>I'm Yugam Patel</h1>
          <p>Explore More !</p>
        </div>

        <div id="div-mask-back" aria-hidden="true">
          <div
            className="area"
            style={{ position: "absolute", backgroundColor: "#111" }}
          >
            <ul className="circles">
              <GradiantCircles />
            </ul>
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default ModernAboutme;
