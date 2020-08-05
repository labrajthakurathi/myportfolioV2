import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import Data from "../images/data.png";
import Red from "../images/red.png";
import Raj from "../images/raj.png";
import Fade from "react-reveal/Fade";
import Labraj from "../images/labraj.png";

const Project = () => {
  const containerRef = useRef();
  const handleScroll = (e) => {
    console.log(containerRef.current.getBoundingClientRect());
  };
  return (
    <div className="section project" id="project">
      <h3 className="text-center lead pt-1">
        {" "}
        <strong> PROJECTS</strong>
      </h3>

      {/* <div className="content-project row">
        {" "}
        <ProjectCard
          name="DATAGURKHAS.COM"
          url="https://www.datagurkhas.com"
          codeUrl="https://www.datagurkhas.com"
          imgUrl={Data}
        />
        <ProjectCard
          name="REDPEPPERXPRESS.COM"
          url="https://redpepperxpress.com/"
          codeUrl="https://redpepperxpress.com/"
          imgUrl={Red}
        />
        <ProjectCard
          name="RajendraPortfolio"
          url="https://hopeful-bell-d95bc4.netlify.app/"
          codeUrl="https://redpepperxpress.com/"
          imgUrl={Raj}
        />
        <ProjectCard
          name="REDPEPPERXPRESS"
          url="https://redpepperxpress.com/"
          codeUrl="https://redpepperxpress.com/"
          imgUrl={Red}
        />
      </div> */}
      <Fade bottom>
        <div className="content-project">
          <div
            onScroll={handleScroll}
            ref={containerRef}
            className="project-wrapper"
          >
            <ProjectCard
              name="DATAGURKHAS.COM"
              url="https://www.datagurkhas.com"
              codeUrl="https://www.datagurkhas.com"
              imgUrl={Data}
            />
            <ProjectCard
              name="REDPEPPERXPRESS.COM"
              url="https://redpepperxpress.com/"
              codeUrl="https://redpepperxpress.com/"
              imgUrl={Red}
            />
            <ProjectCard
              name="RajendraPortfolioDemo"
              url="https://hopeful-bell-d95bc4.netlify.app/"
              codeUrl="https://redpepperxpress.com/"
              imgUrl={Raj}
            />
            <ProjectCard
              name="LABRAJ.COM V1"
              url="https://elastic-bhabha-833ffe.netlify.app/"
              codeUrl="https://redpepperxpress.com/"
              imgUrl={Labraj}
            />
          </div>
        </div>
      </Fade>
      <div className="icon">
        <i className="las la-angle-double-right"></i>
      </div>
    </div>
  );
};

export default Project;
