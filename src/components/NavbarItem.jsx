import React from "react";

function NavbarItem(props) {
  return (
    <div>
      <li>
        <a href={props.id} className="navbar__item">{props.section}</a>
      </li>
    </div>
  );
}

export default NavbarItem;
