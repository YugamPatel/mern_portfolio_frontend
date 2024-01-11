import React from "react";
import "./homepage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import Aboutme from "../../components/Aboutme/Aboutme";
import Education from "../../components/Education/Education";
import ModernAboutme from "../../components/ModernAboutMe/ModernAboutme";

const Homepage = () => {
  return (
    <div className="homepage" id="homePage">
      <Sidebar></Sidebar>
      <Hero></Hero>
      <ModernAboutme></ModernAboutme>
      {/* <Aboutme></Aboutme> */}
      <Education></Education>
    </div>
  );
};

export default Homepage;
