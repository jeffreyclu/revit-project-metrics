import React from "react";

import ProjectsList from "../../components/projects-list/projects-list";

import "./search-projects.styles.css";

const SearchProjects = () => {
  return (
    <div className="SearchProjects">
      <input
        className="SearchBar"
        type="text"
        placeholder="Search for a project by name or number"
      ></input>
      <ProjectsList />
    </div>
  );
};

export default SearchProjects;
