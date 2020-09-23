import React from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div>

      <ul>
        <NavbarItem id="https://google.ro" section="About" />
        <NavbarItem id="https://google.ro" section="Projects" />
        <NavbarItem id="https://google.ro" section="Contact" />
        <NavbarItem id="https://google.ro" section="Resume" />
      </ul>
      
    </div>
  );
}

export default Navbar;
