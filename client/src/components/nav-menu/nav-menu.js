import React from "react";
import { Link } from "react-router-dom";

import "./nav-menu.styles.css";

const NavMenu = () => {
  return (
    <nav className="NavMenu">
      <h2>Menu</h2>
      <span className="NavMenuLink">
        <Link to="/allprojects">View all Projects</Link>
      </span>
      <span className="NavMenuLink">
        <Link to="/searchprojects">Find a Project</Link>
      </span>
      <span className="NavMenuLink">
        <Link to="/addproject">Add a Project</Link>
      </span>
    </nav>
  );
};

export default NavMenu;
