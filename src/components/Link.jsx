import React from "react";

function Link(props) {
  return (
    <span>
      <a
        className="link--blue"
        rel="noopener noreferrer"
        target="_blank"
        href={props.URL}
      >
        {props.text}
      </a>
    </span>
  );
}

export default Link;
