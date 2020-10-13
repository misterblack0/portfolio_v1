/* eslint-disable react/prop-types */
import React from "react";

const NavbarItem = ({ id, section }) => (
  <li>
    <a href={id}>{section}</a>
  </li>
);

export default NavbarItem;
