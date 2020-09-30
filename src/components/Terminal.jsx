import React from "react";
import ContactLink from "./ContactLink";

function Terminal() {
  return (
    <div className="terminal__window">
      <div className="terminal__bar">
        <div className="terminal__btn"></div>
      </div>
      <div className="terminal__body">
        <pre>
          <div className="terminal__prompt">Marius.currentLocation</div>

          <div className="terminal__command">
            [&quot;Bucharest, Romania&quot;]
          </div>
          <div className="terminal__prompt">Marius.contactInfo</div>
          <div className="terminal__command">
            [
            <ContactLink
              URL="mailto:csmarius0@gmail.com"
              text='"csmarius0@gmail.com"'
            />
            ,{" "}
            <ContactLink
              URL="https://www.linkedin.com/in/marius-ciocoiu/"
              text='"LinkedIn"'
            />
            ,{" "}
            <ContactLink
              URL="https://github.com/misterblack0"
              text='"GitHub"'
            />
            ]
          </div>
          <div className="terminal__prompt">Marius.resume</div>
          <div className="terminal__command">
            [
            <ContactLink
              URL="https://www.linkedin.com/in/marius-ciocoiu/"
              text='"mariusciocoiu.pdf"'
            />
            ]
          </div>
          <div className="terminal__prompt">Marius.interests</div>
          <div className="terminal__command">
            [&quot;web development&quot;, &quot;linux&quot;,{" "}
            &quot;blockchain&quot;, &quot;finance&quot;, &quot;sport&quot;]
          </div>
          <div className="terminal__prompt">Marius.skills</div>
          <div className="terminal__command">
            [&quot;Sass&quot;, &quot;JavaScript&quot;, &quot;React&quot;,
            &quot;webpack&quot;, &quot;git&quot;]
          </div>
          <div className="terminal__prompt">
            <span className="terminal__pulse">_</span>
          </div>
        </pre>
      </div>
    </div>
  );
}

export default Terminal;
