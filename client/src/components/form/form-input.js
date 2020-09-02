import React from "react";
import enums from "../../data/enums";

const FormInput = (props) => {
  const { formLabel, formData, setFormData } = props;
  const { displayText, inputType, required } = formLabel;

  const inputId = displayText.toLowerCase().replace(/\s/g, "_");
  console.log(formData);
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
          // checked={formData[inputId]}
          onChange={(e) => {
            console.log(e.target.checked);
            setFormData({ ...formData, [inputId]: e.target.value });
          }}
        />
      </label>
    </>
  );
};

export default FormInput;
