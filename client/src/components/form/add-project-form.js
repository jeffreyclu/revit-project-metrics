import React, { useState } from "react";

import "./form.styles.css";

import AddProjectFormSection from "./add-project-form-section";
import { useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);

  const addProject = async () => {
    const resp = await fetch("/api/addproject", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const res = await resp.json();
    if (res) history.push(`/editproject/${res.project_id}`);
  };

  return (
    <div className="Form">
      <AddProjectFormSection
        formData={formData}
        setFormData={setFormData}
        validated={validated}
        setValidated={setValidated}
        addProject={addProject}
      />
    </div>
  );
};

export default Form;
