import React from "react";

import ProjectItem from "../project-item/project-item";
import Loading from "../loading/loading";

import "./projects-list.styles.css";

const ProjectsList = ({ projects }) => {
  const projectsList = projects.map((project, i) => (
    <ProjectItem key={`ProjectItem ${i}`} project={project} />
  ));

  return (
    <div className="ProjectsList">
      {projects.length ? projectsList : <Loading text="Loading Projects" />}
    </div>
  );
};

export default ProjectsList;
