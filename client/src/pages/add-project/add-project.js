import React from "react";

import AddProjectForm from "../../components/add-project-form/add-project-form";

import "./add-project.styles.css";

const AddProject = () => {
  return (
    <div className="AddProject">
      <h2>Add new Project</h2>
      <AddProjectForm />
    </div>
  );
};

export default AddProject;
