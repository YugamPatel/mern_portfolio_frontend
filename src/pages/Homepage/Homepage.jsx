import { useState, useEffect } from "react";
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
import { modernAboutData as localModernAboutData } from "../../Data/modernAboutData.js";
import { aboutData as localAboutData } from "../../Data/aboutData.js";
import { eduAndWorkData as localEduAndWorkData } from "../../Data/eduAndWorkData.js";
import { skillsData as localSkillsData } from "../../Data/skillsData.js";
import useWindowWidth from "../../hooks/useWindowWidth.js";

const Homepage = ({ user = null }) => {
  const windowWidth = useWindowWidth();
  const [modernAboutData, setModernAboutData] = useState(localModernAboutData);
  const [aboutData, setAboutData] = useState(localAboutData);
  const [heroData, setHeroData] = useState(localHeroData);
  const [eduAndWorkData, setEduAndWorkData] = useState(localEduAndWorkData);
  const [skillsData, setSkillsData] = useState(localSkillsData);

  useEffect(() => {
    if (user?.hero) {
      setHeroData(user.hero);
    }
    if (user?.about) {
      setAboutData(user.about);
    }
    if (user?.modernAbout) {
      setModernAboutData(user.modernAbout);
    }
    if (user?.education || user?.work) {
      setEduAndWorkData({
        education: user?.education ?? localEduAndWorkData.education,
        work: user?.work ?? localEduAndWorkData.work,
      });
    }
    if (user?.skillsOne || user?.skillsTwo || user?.softSkills) {
      setSkillsData({
        skillsOne: user.skillsOne ?? localSkillsData.skillsOne,
        skillsTwo: user.skillsTwo ?? localSkillsData.skillsTwo,
        softSkills: user.softSkills ?? localSkillsData.softSkills,
      });
    }
  }, [user]);

  return (
    <div id="homepage">
      <Sidebar></Sidebar>
      <Hero heroData={heroData}></Hero>
      {windowWidth > 1200 ? (
        <ModernAboutme modernAboutData={modernAboutData}></ModernAboutme>
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
