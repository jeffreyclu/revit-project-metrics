import React from "react";
import { Link } from "react-router-dom";

import "./nav.styles.css";

const Nav = () => {
  return (
    <nav className="MainNav">
      <h2>Menu</h2>
      <span className="NavLink">
        <Link to="/allprojects">View all Projects</Link>
      </span>
      <span className="NavLink">
        <Link to="/searchprojects">Find a Project</Link>
      </span>
      <span className="NavLink">
        <Link to="/addproject">Add a Project</Link>
      </span>
    </nav>
  );
};

export default Nav;
