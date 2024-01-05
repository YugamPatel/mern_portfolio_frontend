import React from "react";
import "./homepage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";

const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar></Sidebar>
      <Hero></Hero>
    </div>
  );
};

export default Homepage;
