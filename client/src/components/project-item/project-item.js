import React from "react";
import { Link } from "react-router-dom";

import "./project-item.styles.css";

const ProjectItem = (props) => {
  const { project } = props;
  const { project_name, project_number, project_id } = project;
  return (
    <div className="ProjectItem">
      <div className="ProjectItemDetails">
        <span className="ProjectName">{project_name}</span>
        <span className="ProjectNumber">{project_number}</span>
      </div>
      <div className="ProjectItemButtons">
        <Link to={`/viewproject/${project_id}`}>View Project</Link>
        <Link to={`/editproject/${project_id}`}>Edit Project</Link>
      </div>
    </div>
  );
};

export default ProjectItem;
