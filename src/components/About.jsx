import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__heading">
        <h1>Marius Ciocoiu</h1>
        <span className="about__caret">&nbsp;</span>
      </div>
      <p>
        My goal is to increase my value as a developer and to produce valuable
        work which can help companies and individuals. I love learning and I
        believe that our knowledge should have solid foundations. I think that
        learning from different domains gives you original ideas, helps you
        innovate and, brings value in your life.
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
