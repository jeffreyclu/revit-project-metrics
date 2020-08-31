import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import FormInput from "../form/form-input";
import FormMessage from "../form/form-message";

import enums, { warningMessages } from "../../data/enums";

const AddProjectFormSection = (props) => {
  const { formData, setFormData, validated, setValidated } = props;
  const formLabels = enums.addProject.projectData.formLabels;
  const [formMessage, setFormMessage] = useState({
    projectName: {
      warning: false,
    },
    projectNumber: {
      warning: false,
    },
  });
  const history = useHistory();

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

  const addProject = async () => {
    const resp = await fetch("/api/addproject", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const res = await resp.json();
    if (res) history.push(`/editproject/${res.project_id}`);
  };

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
      <h2>Project Data</h2>
      <span className="Required">
        <span className="Asterisk">*</span>required
      </span>
      <div className="Inputs">
        {formInputs}
        {formMessages}
        {!validated && (
          <span className="Validate" onClick={validateProject}>
            Validate
          </span>
        )}
      </div>
      <div className="Buttons">
        {validated && (
          <button onClick={addProject} className="Submit">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default AddProjectFormSection;
