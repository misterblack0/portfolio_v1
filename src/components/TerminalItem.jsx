import React from "react";

const TerminalItem = (props) => (
  <div>
    <div className="terminal__prompt">{props.input}</div>
    <div className="terminal__command">{props.return}</div>
  </div>
);

export default TerminalItem;
