import React, { useState, useEffect } from "react";

import FormInput from "./form-input";
import FormMessage from "./form-message";

// import { warningMessages } from "../../data/enums";

const FormSection = ({
  project_id,
  sectionTitle,
  formLabels,
  currentSection,
  section,
  setSection,
  maxSections,
  formData,
  setFormData,
}) => {
  const [formMessage, setFormMessage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const table_name = sectionTitle.toLowerCase().replace(/\s/g, "_");
      const resp = await fetch(`/api/project/${project_id}/${table_name}`);
      const res = await resp.json();
      if (res.length) setFormData(res[0]);
    };
    if (currentSection === section) fetchData();
  }, [currentSection, project_id, section, sectionTitle, setFormData]);

  const submitData = async () => {
    const table_name = sectionTitle.toLowerCase().replace(/\s/g, "_");
    const resp = await fetch(`/api/project/${project_id}/${table_name}`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(formData),
    });
    // const res = await resp.json();
    // console.log(res);
  };

  // display nothing if the user is not at this section
  if (currentSection !== section) return null;

  // generate the form inputs
  const formInputs = Object.values(formLabels).map((formLabel, i) => (
    <FormInput
      key={`formInput ${i}`}
      formLabel={formLabel}
      formData={formData}
      setFormData={setFormData}
    />
  ));

  // generate the form warnings/messages
  const formMessages = Object.values(formMessage).map(
    (msg, i) =>
      msg.warning && (
        <FormMessage key={`formMessage ${i}`} message={msg.message} />
      )
  );

  return (
    <div className="Section">
      <h4>
        Step {section + 1} of {maxSections + 1}
      </h4>
      <h2>{sectionTitle}</h2>
      <span className="Required">
        <span className="Asterisk">*</span>required
      </span>
      <div className="Inputs">
        {formInputs}
        {formMessages}
      </div>
      <div className="Buttons">
        {section > 0 && (
          <span
            className="Prev"
            onClick={() => {
              submitData();
              setSection((currentSection -= 1));
            }}
          >
            Prev
          </span>
        )}
        {section < maxSections && (
          <button
            className="Next"
            onClick={() => {
              submitData();
              setSection((currentSection += 1));
            }}
          >
            Next
          </button>
        )}
        {section === maxSections && (
          <button onClick={submitData} className="Submit">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default FormSection;
