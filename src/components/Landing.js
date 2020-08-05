import React from "react";
import Fade from "react-reveal/Fade";

const Landing = () => {
  return (
    <div className="section landing">
      <Fade bottom>
        <div className=" content-landing cont">
          <h2>
            JUST ANOTHER UI DEVELOPER BUT THIS ONE BREATHES CREATIVITY. I CODE
            FOR PASSION
          </h2>
          <p>Check out my work below</p>
          <a href="#project" className="btn-main">
            My Works
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Landing;
