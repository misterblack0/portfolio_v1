import React from "react";
import NavbarLink from "./NavbarLink";
import "./navbar.scss";

const Navbar = () => (
  <header>
    <nav className="navbar">
      <ul>
        <NavbarLink id="#projects" section="Projects" />
        <NavbarLink id="#contact" section="Contact" />
      </ul>
    </nav>
  </header>
);

export default Navbar;
