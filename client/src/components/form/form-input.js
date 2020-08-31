import React from "react";
import enums from "../../data/enums";

const FormInput = (props) => {
  const { formLabel, formData, setFormData } = props;
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
            setFormData({ ...formData, [inputId]: e.target.value });
          }}
        />
      </label>
    </>
  );
};

export default FormInput;
