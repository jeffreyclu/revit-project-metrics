import React, { useState, useEffect } from "react";

import ProjectsList from "../../components/projects-list/projects-list";

import "./search-projects.styles.css";

const SearchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [searchValue, setSearchValue] = useState({});
  useEffect(() => {
    setProjects([]);
  }, []);
  const handleSearch = async () => {
    const searchProjects = await fetch("/api/searchproject");
  };
  return (
    <div className="SearchProjects">
      <h2>Search</h2>
      <input
        className="SearchBar"
        type="text"
        placeholder="Search for a project by name or number"
      ></input>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default SearchProjects;
