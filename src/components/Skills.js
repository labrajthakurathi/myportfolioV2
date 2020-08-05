import React from "react";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div className="section skills" id="skills">
      <h3 className="text-center lead pt-1">
        {" "}
        <strong> SKILLS</strong>
      </h3>
      <div className="content-skills cont">
        <div className="row ">
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill">
              <i className="lab la-html5"></i>

              <small>HTML</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill">
              <i className="lab la-css3-alt"></i>

              <small>CSS</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill">
              <i className="lab la-js-square"></i>

              <small>JavaScript</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill">
              <i className="lab la-react"></i>

              <small>React</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill">
              <i className="lab la-linux"></i>

              <small>Linux</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill">
              <i className="lab la-adobe"></i>

              <small>Adobe XD</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill">
              <i className="lab la-adobe"></i>

              <small>Python</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill mx-auto">
              <i className="lab la-bootstrap"></i>

              <small>Bootstrap</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill mx-auto">
              <i class="lab la-sass"></i>

              <small>SASS</small>
            </div>
          </Fade>
          <Fade bottom>
            <div className="col col-sm-4 col-md-4 col-lg-3 col-xl-3 skill mx-auto">
              <i className="lab la-git-square"></i>

              <small>GIT</small>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Skills;
