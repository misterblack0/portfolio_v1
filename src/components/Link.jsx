/* eslint-disable react/prop-types */
import React from "react";

const Link = ({ URL, text }) => (
  <span>
    <a className="link" rel="noopener noreferrer" target="_blank" href={URL}>
      {text}
    </a>
  </span>
);

export default Link;
