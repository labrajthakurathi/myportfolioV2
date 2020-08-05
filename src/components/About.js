import React from "react";
import Profile from "../images/lalit.png";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="section about" id="about">
      <h3 className="text-center lead pt-1">
        {" "}
        <strong> ABOUT ME</strong>
      </h3>
      <Fade bottom>
        <div className=" cont content-about">
          <div className="pic-wrapper mb-4">
            {" "}
            <img src={Profile} alt="Lab raj thakurathi" className="my-pic" />
          </div>

          <p>
            Hi, I am Lab Raj Thakurathi a Front-End-Developer based on San
            Francisco Bay Area. Focused on developing pixel perfect responsive
            UI's. I believe in power of Visual representation, hence been
            working as a front-end-developer for over 2 years.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default About;
