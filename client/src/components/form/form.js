import React, { useState } from "react";

import "./form.styles.css";
import enums from "../../data/enums";
import FormSection from "./form-section";

const Form = (props) => {
  const { project_id } = props;
  const [currentSection, setSection] = useState(0);
  const [formData, setFormData] = useState({});

  const formSections = Object.values(
    enums.editProject
  ).map((formSection, i) => (
    <FormSection
      project_id={project_id}
      key={`Form Section ${i}`}
      sectionTitle={formSection.title}
      formLabels={formSection.formLabels}
      section={i}
      currentSection={currentSection}
      setSection={setSection}
      maxSections={Object.values(enums.editProject).length - 1}
      formData={formData}
      setFormData={setFormData}
    />
  ));
  return <div className="Form">{formSections}</div>;
};

export default Form;
