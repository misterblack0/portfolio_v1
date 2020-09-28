import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <NavbarItem id="#projects" section="Projects" />
        <NavbarItem id="#contact" section="Contact" />
      </ul>
    </nav>
  );
}

export default Navbar;
