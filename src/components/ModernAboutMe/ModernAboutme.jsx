import React, { useEffect } from "react";
import gsap from "gsap";
import "./modernaboutme.css";
import Info from "./Info";
import GradiantCircles from "./GradiantCircles";

const ModernAboutme = ({ modernAboutData }) => {
  const makeMagic = () => {
    const mask = document.querySelector("#div-mask-back");
    const main = document.querySelector(".modernAboutme");
    const tl = gsap.timeline();
    tl.to(mask, {
      "--m1": "20%",
      delay: 2,
      duration: 0.2,
      ease: "back.out(2)",
    }).to(mask, {
      "--m2": "30%",
      duration: 0.5,
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
  };

  const addMagic = (e) => {
    const mask = document.querySelector("#div-mask-back");
    const tl = gsap.timeline();
    tl.to(mask, {
      "--m1": "20%",
      delay: 0.3,
      duration: 0.3,
      ease: "back.out(2)",
    }).to(mask, {
      "--m2": "30%",
      duration: 0.4,
      delay: 0.1,
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
          <h1>{modernAboutData.title}</h1>
          <p>{modernAboutData.subTitle}</p>
        </div>

        <div id="div-mask-back" area-hidden="true">
          <div
            className="area"
            style={{ position: "absolute", backgroundColor: "#111" }}
          >
            <ul className="circles">
              <GradiantCircles />
            </ul>
          </div>
          <Info infoData={modernAboutData.info} />
        </div>
      </div>
    </div>
  );
};

export default ModernAboutme;
