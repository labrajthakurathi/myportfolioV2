import React from "react";

const ProjectCard = ({ name, url, imgUrl }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pro-card mx-0">
      <div className="card-wrapper">
        <img
          src={imgUrl}
          alt="Datagurkhas.com"
          className="img-fluid project-img "
        />

        <div className="project-card mx-0">
          <h5 className="text-center ">{name}</h5>

          <p className=" m-0">
            {" "}
            <strong className="list-heading"> Used Technologies</strong>
          </p>

          <ul className="card-list">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
          <a href={url} target="blink" className="card-btn">
            VISIT SITE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
