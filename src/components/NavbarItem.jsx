import React from "react";

function NavbarItem(props) {
  return (
    <li>
      <a className="navbar__item" href={props.id}>
        {props.section}
      </a>
    </li>
  );
}

export default NavbarItem;
