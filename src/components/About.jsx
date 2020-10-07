import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__heading">
        <h1>Marius Ciocoiu</h1>
        <span className="about__caret">&nbsp;</span>
      </div>
      <p>
        I am a web developer and my passion is building simple, beautiful user
        experiences.
      </p>
      <p>
        Check out my{" "}
        <a href="#projects" className="link">
          side-projects
        </a>{" "}
        below.
      </p>
    </section>
  );
}

export default About;
