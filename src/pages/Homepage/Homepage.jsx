import React, { useState, useEffect } from "react";
import "./homepage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import Aboutme from "../../components/Aboutme/Aboutme";
import Education from "../../components/Education/Education";
import ModernAboutme from "../../components/ModernAboutMe/ModernAboutme";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/ContactMe/Contact";
import { heroData as localHeroData } from "../../Data/heroData.js";

const Homepage = ({ user = null }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("User Data:", user); 
    console.log("Hero Data:", user?.hero ?? localHeroData);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [user]);

  const heroData = user?.hero ?? localHeroData;

  return (
    <div className="homepage" id="homePage">
      <Sidebar></Sidebar>
      <Hero heroData={heroData}></Hero>
      {windowWidth > 1200 ? (
        <ModernAboutme></ModernAboutme>
      ) : (
        <Aboutme></Aboutme>
      )}
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Contact />
    </div>
  );
};

export default Homepage;
