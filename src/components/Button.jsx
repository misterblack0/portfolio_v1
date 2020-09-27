import React from "react";

function Button(props) {
  return <a href={props.URL}>{props.content}</a>;
}

export default Button;
