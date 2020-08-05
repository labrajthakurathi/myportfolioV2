import React from "react";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

const Pages = () => {
  return (
    <div>
      <Landing />

      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Pages;
