import React, { useState, useEffect } from "react";

import ProjectsList from "../../components/projects-list/projects-list";
import "./all-projects.styles.css";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      let resp = await fetch("/api/allprojects");
      let res = await resp.json();
      setProjects(res);
    };
    setTimeout(fetchProjects, 1000);
    // fetchProjects();
  }, []);

  return (
    <div className="AllProjects">
      <h2>All Projects</h2>
      <ProjectsList projects={projects} />
    </div>
  );
};

export default AllProjects;
