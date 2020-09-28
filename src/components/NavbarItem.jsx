import React from "react";

function NavbarItem(props) {
  return (
    <li>
      <a href={props.id}>{props.section}</a>
    </li>
  );
}

export default NavbarItem;
