import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <NavbarItem id="#about" section="about" />
        <NavbarItem id="#projects" section="projects" />
        <NavbarItem id="#contact" section="contact" />
        <NavbarItem id="#resume" section="resume" />
        <NavbarItem id="https://github.com/" section="github" />
      </ul>
    </nav>
  );
}

export default Navbar;
