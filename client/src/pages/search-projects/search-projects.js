import React, { useState, useEffect } from "react";

import ProjectsList from "../../components/projects-list/projects-list";

import "./search-projects.styles.css";

const SearchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [searchValue, setSearchValue] = useState({ searchTerm: "" });
  useEffect(() => {
    setProjects([]);
  }, []);
  const handleSearch = async () => {
    const resp = await fetch("/api/findproject", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(searchValue),
    });
    const res = await resp.json();
    console.log(res);
    if (res.length) setProjects(res);
  };
  return (
    <div className="SearchProjects">
      <h2>Search</h2>
      <input
        className="SearchBar"
        type="text"
        placeholder="Search for a project by name or number"
        value={searchValue.searchTerm}
        onChange={(e) => {
          setSearchValue({ searchTerm: e.target.value });
          handleSearch();
        }}
      ></input>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default SearchProjects;
