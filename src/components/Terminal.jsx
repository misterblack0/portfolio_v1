import React from "react";

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
            [<a href="mailto:">&quot;csmarius0@gmail.com&quot;</a>,{" "}
            <a href="https://www.linkedin.com/in/marius-ciocoiu/">
              &quot;LinkedIn&quot;
            </a>
            , <a href="https://github.com/misterblack0">&quot;GitHub&quot;</a>]
          </div>
          <div className="terminal__prompt">Marius.resume</div>
          <div className="terminal__command">
            [<a href="https://">&quot;mariusciocoiu.pdf&quot;</a>]
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
