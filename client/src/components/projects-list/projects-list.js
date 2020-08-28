import React from "react";

import "./projects-list.styles.css";
import ProjectItem from "../project-item/project-item";

const ProjectsList = ({ projects }) => {
  const projectsList = projects.map((project, i) => (
    <ProjectItem key={`ProjectItem ${i}`} project={project} />
  ));

  return (
    <div className="ProjectsList">
      {projects.length ? projectsList : <h2>Loading Projects</h2>}
    </div>
  );
};

export default ProjectsList;
