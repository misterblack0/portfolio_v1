import React from "react";
import "./about.scss";
import Typewriter from "typewriter-effect";

const About = () => (
  <section className="about">
    <div className="about__heading">
      <Typewriter
        className="test"
        onInit={(typewriter) => {
          typewriter.typeString("Marius Ciocoiu").start();
        }}
        options={{
          delay: 50,
        }}
      />
    </div>
    <p>
      My goal is to increase my value as a developer and to produce valuable
      work which can help companies and individuals. I love learning and I
      believe that our knowledge should have solid foundations. I think that
      learning from different domains gives you original ideas, helps you
      innovate and brings value in your life.
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

export default About;
