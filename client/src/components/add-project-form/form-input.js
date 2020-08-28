import React from "react";

const FormInput = ({ formLabel, formData, setFormData, setValidated }) => {
  const { displayText, inputType, required } = formLabel;
  const inputId = displayText.toLowerCase().replace(/\s/g, "_");
  return (
    <>
      <label className="Label">
        <div className="Row">
          {required && <span className="Asterisk">*</span>}
          <span>{displayText}</span>
        </div>
        <input
          className="Input"
          type={inputType}
          id={inputId}
          value={formData[inputId] || ""}
          onChange={(e) => {
            setValidated(false);
            setFormData({ ...formData, [inputId]: e.target.value });
          }}
        />
      </label>
    </>
  );
};

export default FormInput;
