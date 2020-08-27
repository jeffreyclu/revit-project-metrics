import React from "react";

import FormInput from "./form-input";

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
        {/* add a validate button for step 1*/}
        {section === 0 && <a href="">Validate</a>}
      </div>
      <div className="Buttons">
        {/* only show prev button if user is past the first section */}
        {section > 0 && (
          <span
            className="Prev"
            onClick={() => setSection((currentSection -= 1))}
          >
            Prev
          </span>
        )}
        {/* only show next button if user is before the last section */}
        {section < maxSections && (
          <button
            className="Next"
            onClick={() => setSection((currentSection += 1))}
          >
            Next
          </button>
        )}
        {/* show submit button if user is at the last section */}
        {section === maxSections && <button className="Submit">Submit</button>}
      </div>
    </div>
  );
};

export default FormSection;
