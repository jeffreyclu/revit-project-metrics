import React, { useState, useEffect } from "react";

const ProjectDisplay = (props) => {
  const { project } = props;
  const dataArray = Object.entries(project).map(([key, value]) => {
    return (
      <p>
        {key}: {value}
      </p>
    );
  });
  return (
    <div className="ProjectDisplay">
      <h2>
        {project.project_number} {project.project_name}
      </h2>
      {dataArray}
    </div>
  );
};

export default ProjectDisplay;
