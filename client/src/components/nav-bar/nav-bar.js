import React from "react";
import { Link } from "react-router-dom";

import "./nav-bar.styles.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <span className="NavBarLink">
        <Link exact="true" to="/">
          Home
        </Link>
      </span>
      <span className="NavBarLink">
        <Link to="/allprojects">View all Projects</Link>
      </span>
      <span className="NavBarLink">
        <Link to="/searchprojects">Find a Project</Link>
      </span>
      <span className="NavBarLink">
        <Link to="/addproject">Add a Project</Link>
      </span>
    </nav>
  );
};

export default NavBar;
