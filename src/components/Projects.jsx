import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import "./projects.scss";

const Projects = () => (
  <section id="projects">
    <h2 className="section__title">Projects</h2>
    {projects.map((project) => (
      <ProjectCard
        title={project.name}
        description={project.description}
        skills={project.techStack.map((skill, id) => {
          return (
            <span key={project.techStack[id]} className="project__skill">
              {skill}
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
