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
import { aboutData as localAboutData } from "../../Data/aboutData.js";
import { eduAndWorkData as localEduAndWorkData } from "../../Data/eduAndWorkData.js";
import { skillsData as localSkillsData} from "../../Data/skillsData.js";

const Homepage = ({ user = null }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [aboutData, setAboutData] = useState(localAboutData);
  const [heroData, setHeroData] = useState(localHeroData);
  const [eduAndWorkData, setEduAndWorkData] = useState(localEduAndWorkData);
  const [skillsData, setSkillsData] = useState(localSkillsData);

  useEffect(() => {
    if (user?.about) {
      // console.log("Updating aboutData from API:", user.about);
      setAboutData(user.about);
    }
    if (user?.hero) {
      // console.log("Updating heroData from API:", user.hero);
      setHeroData(user.hero);
    }
    if (user?.education || user?.work) {
      setEduAndWorkData({
        education: user?.education ?? localEduAndWorkData.education,
        work: user?.work ?? localEduAndWorkData.work,
      });
    }
    if (user?.skillsOne || user?.skillsTwo || user?.softSkills) {
      setSkillsData(
        {
          skillsOne: user.skillsOne ?? localSkillsData.skillsOne,
          skillsTwo: user.skillsTwo ?? localSkillsData.skillsTwo,
          softSkills: user.softSkills ?? localSkillsData.softSkills,
        }
      );
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="homepage" id="homePage">
      <Sidebar></Sidebar>
      <Hero heroData={heroData}></Hero>
      {windowWidth > 1200 ? (
        <ModernAboutme></ModernAboutme>
      ) : (
        <Aboutme aboutData={aboutData}></Aboutme>
      )}
      <Education eduAndWorkData={eduAndWorkData}></Education>
      <Skills skillsData={skillsData}></Skills>
      <Projects></Projects>
      <Contact />
    </div>
  );
};

export default Homepage;
