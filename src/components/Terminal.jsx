import React from "react";
import Link from "./Link";
import Item from "./Item";
import aboutMe from "../data/aboutMe";
import TerminalItem from "./TerminalItem";

const Terminal = () => (
  <div className="terminal__window">
    <div className="terminal__bar">
      <div className="terminal__btn"></div>
    </div>
    <div className="terminal__body">
      <pre>
        {/* <div className="terminal__prompt">Marius.currentLocation</div>

        <div className="terminal__command">
          [&quot;Bucharest, Romania&quot;]
        </div>
        <div className="terminal__prompt">Marius.contactInfo</div>
        <div className="terminal__command">
          [
          <Link URL="mailto:csmarius0@gmail.com" text='"csmarius0@gmail.com"' />
          ,{" "}
          <Link
            URL="https://www.linkedin.com/in/marius-ciocoiu/"
            text='"LinkedIn"'
          />
          , <Link URL="https://github.com/misterblack0" text='"GitHub"' />]
        </div>
        <div className="terminal__prompt">Marius.resume</div>
        <div className="terminal__command">
          [
          <Link
            URL="https://mariusc.dev/marius-ciocoiu_resume.pdf"
            text='"mariusciocoiu.pdf"'
          />
          ]
        </div>
        <div className="terminal__prompt">Marius.interests</div>
        <div className="terminal__command">
          [
          <Item content="web development" />, <Item content="linux" />,{" "}
          <Item content="blockchain" />, <Item content="finance" />,{" "}
          <Item content="sport" />]
        </div>
        <div className="terminal__prompt">Marius.skills</div>
        <div className="terminal__command">
          [<Item content="Sass" />, <Item content="Javascript" />,{" "}
          <Item content="React" />, <Item content="webpack" />,{" "}
          <Item content="git" />]
        </div>
        <div className="terminal__prompt">
          <span className="terminal__pulse">_</span>
        </div> */}
        {aboutMe.map((item) => (
          <TerminalItem
            input={item.input}
            
          />
        ))}
        ;
      </pre>
    </div>
  </div>
);

export default Terminal;
