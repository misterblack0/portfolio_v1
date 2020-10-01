import React from "react";
import Terminal from "./Terminal";
import Link from "./Link";

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
        Check out my <Link URL="#projects" text="side-projects" /> below.
      </p>
      <Terminal />
    </section>
  );
}

export default About;
