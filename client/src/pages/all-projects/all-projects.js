import React, { useState, useEffect } from "react";
// import { PowerBIEmbed } from "powerbi-client-react";
// import {
//   models,
//   Report,
//   Embed,
//   IEmbedConfiguration,
//   service,
//   Page,
// } from "powerbi-client";

import ProjectsList from "../../components/projects-list/projects-list";
import "./all-projects.styles.css";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  // const embedConfig = {
  //   type: "report",
  //   id: "1f83ab70-8a02-4fec-a328-6f5f391993e0",
  //   embedUrl:
  //     "https://app.powerbi.com/reportEmbed?reportId=1f83ab70-8a02-4fec-a328-6f5f391993e0&groupId=bbe2616a-e927-4c4e-84bd-f8cf6f521b93&autoAuth=true&ctid=42523965-66b8-4e84-8ead-59b4ba83077b&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D",
  //   accessToken: undefined,
  //   tokenType: models.TokenType.Embed,
  // };
  useEffect(() => {
    const fetchProjects = async () => {
      let resp = await fetch("/api/allprojects");
      let res = await resp.json();
      if (Array.isArray(res)) return setProjects(res);
    };
    setTimeout(fetchProjects, 1000);
    // fetchProjects();
  }, []);

  return (
    <>
      <div className="DashboardContainer">
        <h2>Projects Dashboard</h2>
        <iframe
          title="All Projects Dashboard"
          className="ProjectsDashboard"
          // src="https://app.powerbi.com/reportEmbed?reportId=b3e759a9-5816-4edd-887d-e9abb192d1da&autoAuth=true&pageName=ReportSection"
          src="https://app.powerbi.com/view?r=eyJrIjoiNDc1NWM3MzgtNjkxZC00YWEwLWI5NjUtODk4OGQ0YmE5M2M4IiwidCI6IjQyNTIzOTY1LTY2YjgtNGU4NC04ZWFkLTU5YjRiYTgzMDc3YiIsImMiOjN9"
        />
      </div>
      <div className="AllProjects">
        <h2>Projects List</h2>
        <ProjectsList projects={projects} />
      </div>
    </>
  );
};

export default AllProjects;
