import React from "react";

const ProjectCard = ({ img, title, description, skills, URL, githubURL }) => (
  <div className="project">
    <div className="project__image-container">
      <img className="project__image" src={img} alt={title}></img>
    </div>
    <div className="project__side-container">
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
      <div className="project__skills-container">{skills}</div>
      <div className="project__buttons-container">
        <a className="project__btn" href={URL}>
          Live Demo
        </a>
        <a className="project__btn secondary" href={githubURL}>
          View Source
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
