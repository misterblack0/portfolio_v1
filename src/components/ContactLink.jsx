import React from "react";

function ContactLink(props) {
  return (
    <span>
      <a rel="noopener noreferrer" target="_blank" href={props.URL}>
        {props.text}
      </a>
    </span>
  );
}

export default ContactLink;
