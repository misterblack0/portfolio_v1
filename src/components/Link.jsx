/* eslint-disable react/prop-types */
import React from "react";

const Link = (props) => (
  <span>
    <a
      className="link"
      rel="noopener noreferrer"
      target="_blank"
      href={props.URL}
    >
      {props.text}
    </a>
  </span>
);

export default Link;
