import React from "react";

function NavbarItem(props) {
  return (
    <li>
      <a href={props.id} className="navbar__item">
        {props.section}
      </a>
    </li>
  );
}

export default NavbarItem;
