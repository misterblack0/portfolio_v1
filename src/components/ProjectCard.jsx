import React from "react";

function ProjectCard(props) {
  return (
    <div className="project">
      <img className="project__image" src={props.img} alt={props.title}></img>
      <div className="project__side-container">
        <h3 className="project__title">{props.title}</h3>
        <p className="project__description">{props.description}</p>
        <div className="project__skills-container">{props.skills}</div>
        <div className="project__buttons-container">
          <a className="project__link" href={props.URL}>
            Live Demo
          </a>
          <a className="project__link secondary" href={props.githubURL}>
            View Source
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
