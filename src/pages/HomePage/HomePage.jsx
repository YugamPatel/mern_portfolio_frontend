/*
 * HomePage — Main Portfolio Page
 *
 * Orchestrates all portfolio sections in order. On mount it merges any
 * API data (from Redux state.user.userData) over the local data-file
 * defaults, so the page degrades gracefully when the backend is down.
 *
 * Responsive about section:
 *   > 1200 px → ModernAboutMe (GSAP mask reveal, desktop-only effect)
 *   ≤ 1200 px → AboutMe       (simple photo + bio layout)
 *
 * Props:
 *   user — Redux userData object (null if the API call failed/timed out)
 */

import React, { useState, useEffect } from "react";
import "./homepage.css";

/* Shared layout components */
import Sidebar from "../../shared/components/Sidebar/Sidebar";

/* Feature section components */
import Hero          from "../../features/hero/Hero";
import AboutMe       from "../../features/about/AboutMe";
import ModernAboutMe from "../../features/about/modern/ModernAboutMe";
import Education     from "../../features/education/Education";
import Skills        from "../../features/skills/Skills";
import Projects      from "../../features/projects/Projects";
import Contact       from "../../features/contact/Contact";

/* Local data fallbacks — used when the API is unavailable */
import { heroData        as localHeroData        } from "../../features/hero/heroData.js";
import { modernAboutData as localModernAboutData } from "../../features/about/modern/modernAboutData.js";
import { aboutData       as localAboutData       } from "../../features/about/aboutData.js";
import { eduAndWorkData  as localEduAndWorkData  } from "../../features/education/eduAndWorkData.js";
import { skillsData      as localSkillsData      } from "../../features/skills/skillsData.js";

const HomePage = ({ user = null }) => {
  const [windowWidth,     setWindowWidth]     = useState(window.innerWidth);
  const [heroData,        setHeroData]        = useState(localHeroData);
  const [aboutData,       setAboutData]       = useState(localAboutData);
  const [modernAboutData, setModernAboutData] = useState(localModernAboutData);
  const [eduAndWorkData,  setEduAndWorkData]  = useState(localEduAndWorkData);
  const [skillsData,      setSkillsData]      = useState(localSkillsData);

  /* Merge API data over local defaults whenever the user prop changes */
  useEffect(() => {
    if (user?.hero)        setHeroData(user.hero);
    if (user?.about)       setAboutData(user.about);
    if (user?.modernAbout) setModernAboutData(user.modernAbout);

    if (user?.education || user?.work) {
      setEduAndWorkData({
        education: user?.education ?? localEduAndWorkData.education,
        work:      user?.work      ?? localEduAndWorkData.work,
      });
    }

    if (user?.skillsOne || user?.skillsTwo || user?.softSkills) {
      setSkillsData({
        skillsOne:  user.skillsOne  ?? localSkillsData.skillsOne,
        skillsTwo:  user.skillsTwo  ?? localSkillsData.skillsTwo,
        softSkills: user.softSkills ?? localSkillsData.softSkills,
      });
    }
  }, [user]);

  /* Track viewport width to toggle between About section variants */
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="homepage" id="homePage">
      <Sidebar />
      <Hero heroData={heroData} />

      {windowWidth > 1200 ? (
        <ModernAboutMe modernAboutData={modernAboutData} />
      ) : (
        <AboutMe aboutData={aboutData} />
      )}

      <Education eduAndWorkData={eduAndWorkData} />
      <Skills    skillsData={skillsData} />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
