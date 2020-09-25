import React from "react";

function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard />
      ))}
    </div>
  );
}

export default Projects;
