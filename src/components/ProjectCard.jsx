import React from "react";

function ProjectCard(props) {
  return (
    <div className="project">
      <img className="project__image" src="#"></img>
      <div className="project__side-container">
        <h2 className="project__title">{props.title}</h2>
        <p className="project__description">{props.description}</p>
        <span className="project__skill">{props.skill}</span>
        <a className="project__link" href={props.URL}>
          Live Demo
        </a>
        <a className="project__link secondary" href={props.githubURL}>
          View Source
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
