/* eslint-disable react/prop-types */
import React from "react";

const NavbarItem = (props) => (
  <li>
    <a href={props.id}>{props.section}</a>
  </li>
);

export default NavbarItem;
