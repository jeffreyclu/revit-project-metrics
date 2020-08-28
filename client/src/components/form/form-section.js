import React, { useState } from "react";

import FormInput from "./form-input";
import FormMessage from "./form-message";

import { warningMessages } from "../../data/enums";

const FormSection = ({
  sectionTitle,
  formLabels,
  currentSection,
  section,
  setSection,
  maxSections,
  formData,
  setFormData,
  validated,
  setValidated,
}) => {
  const [formMessage, setFormMessage] = useState({
    projectName: {
      warning: false,
    },
    projectNumber: {
      warning: false,
    },
  });

  const validateProject = async () => {
    const msg = { ...formMessage };
    msg.projectName = !formData.project_name
      ? {
          warning: true,
          message: warningMessages.formWarnings.projectNameBlank,
        }
      : {
          warning: false,
        };
    msg.projectNumber = !formData.project_number
      ? {
          warning: true,
          message: warningMessages.formWarnings.projectNumberBlank,
        }
      : {
          warning: false,
        };

    if (!formData.project_name || !formData.project_number)
      return setFormMessage(msg);

    const resp = await fetch("/api/validateproject", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const res = await resp.json();
    console.log(res);
    if (res.length === 0) {
      setFormMessage(msg);
      return setValidated(true);
    }
    msg.projectAlreadyExists = {
      warning: true,
      message: warningMessages.formWarnings.projectAlreadyExists,
    };
    setFormMessage(msg);
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
      setValidated={setValidated}
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
        {section === 0 && !validated && (
          <span className="Validate" onClick={validateProject}>
            Validate
          </span>
        )}
      </div>
      <div className="Buttons">
        {section > 0 && (
          <span
            className="Prev"
            onClick={() => setSection((currentSection -= 1))}
          >
            Prev
          </span>
        )}
        {section < maxSections && validated && (
          <button
            className="Next"
            onClick={() => setSection((currentSection += 1))}
          >
            Next
          </button>
        )}
        {section === maxSections && <button className="Submit">Submit</button>}
      </div>
    </div>
  );
};

export default FormSection;
