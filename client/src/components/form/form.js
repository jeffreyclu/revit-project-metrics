import React, { useState } from "react";
import "./form.styles.css";
import enums from "../../data/enums";

const FormSection = ({
  sectionTitle,
  formLabels,
  currentSection,
  section,
  setSection,
  maxSections,
  formData,
  setFormData,
}) => {
  if (currentSection !== section) return null;
  const formInputs = Object.values(formLabels).map((formLabel, i) => (
    <FormInput
      key={`formInput ${i}`}
      formLabel={formLabel}
      formData={formData}
      setFormData={setFormData}
    />
  ));
  return (
    <div className="Section">
      <h4>
        Step {section + 1} of {maxSections + 1}{" "}
      </h4>
      <h2>{sectionTitle}</h2>
      <div className="Inputs">
        {formInputs}
        {section === 0 && <button>Validate</button>}
      </div>
      <div className="Buttons">
        {section > 0 && (
          <button onClick={() => setSection((currentSection -= 1))}>
            Prev
          </button>
        )}
        {section < maxSections && (
          <button onClick={() => setSection((currentSection += 1))}>
            Next
          </button>
        )}
        {section === maxSections && <button>Submit</button>}
      </div>
    </div>
  );
};

const FormInput = ({ formLabel, formData, setFormData }) => {
  const { displayText, inputType } = formLabel;
  const inputId = displayText.toLowerCase().replace(/\s/g, "_");
  return (
    <>
      <label className="Label">
        {displayText}
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

const FormSelect = ({ formLabel }) => {
  return (
    <>
      <select className="Select"></select>
    </>
  );
};

const Form = () => {
  const [currentSection, setSection] = useState(0);
  const [formData, setFormData] = useState({});
  const formSections = Object.values(enums).map((formSection, i) => (
    <FormSection
      key={`${formSection.title} Label`}
      sectionTitle={formSection.title}
      formLabels={formSection.formLabels}
      section={i}
      currentSection={currentSection}
      setSection={setSection}
      maxSections={Object.values(enums).length - 1}
      formData={formData}
      setFormData={setFormData}
    />
  ));
  return <div className="Form">{formSections}</div>;
};

export default Form;
