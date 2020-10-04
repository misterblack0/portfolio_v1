import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <div>
      <h2 className="secondary-heading">Projects</h2>
      {projects.map((project) => (
        <ProjectCard
          title={project.name}
          description={project.description}
          skill={project.techStack}
          URL={project.appLink}
          githubURL={project.github}
          key={project.id}
        />
      ))}
    </div>
  );
}

export default Projects;
