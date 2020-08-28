import React, { useState } from "react";

import "./form.styles.css";

import AddProjectFormSection from "./add-project-form-section";

const Form = () => {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);

  return (
    <div className="Form">
      <AddProjectFormSection
        formData={formData}
        setFormData={setFormData}
        validated={validated}
        setValidated={setValidated}
      />
    </div>
  );
};

export default Form;
