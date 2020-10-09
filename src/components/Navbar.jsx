import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => (
  <header>
    <nav className="navbar">
      <ul>
        <NavbarItem id="#projects" section="Projects" />
        <NavbarItem id="#contact" section="Contact" />
      </ul>
    </nav>
  </header>
);

export default Navbar;
