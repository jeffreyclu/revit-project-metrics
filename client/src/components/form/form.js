import React from "react";
import "./form.styles.css";
import enums from "../../data/enums";

const FormInput = ({ formLabel }) => {
  console.log(formLabel);
  return (
    <>
      <label>
        {formLabel}
        <input type="text"></input>
      </label>
    </>
  );
};

const Form = () => {
  const formLabels = Object.values(enums.formLabels).map((formLabel) => (
    <FormInput key={`${formLabel} Label`} formLabel={formLabel} />
  ));
  return (
    <div className="Form">
      <div className="Form Section">{formLabels}</div>
    </div>
  );
};

export default Form;
