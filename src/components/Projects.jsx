import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "./projects.scss";

const Projects = () => (
  <section id="projects">
    <h2 className="section__title">Projects</h2>
    {projects.map((project) => (
      <ProjectCard
        title={project.name}
        description={project.description}
        skills={project.techStack.map((tech, id) => {
          return (
            <span key={id} className="project__skill">
              {tech}
            </span>
          );
        })}
        URL={project.appLink}
        githubURL={project.github}
        img={project.image}
        key={project.id}
      />
    ))}
  </section>
);

export default Projects;
