export const inputTypes = {
  text: "text",
  checkbox: "checkbox",
  number: "number",
  password: "password",
  email: "email",
  date: "date",
  month: "month",
  time: "time",
  range: "range",
};

export const warningMessages = {
  formWarnings: {
    projectNameBlank: "Project Name cannot be blank",
    projectNumberBlank: "Project Number cannot be blank",
    projectAlreadyExists:
      "Project already exists - do you want to edit the data for the existing project?",
  },
};

export default {
  addProject: {
    projectData: {
      title: "Project Data",
      formLabels: {
        projectName: {
          displayText: "Project Name",
          inputType: inputTypes.text,
          required: true,
        },
        projectNumber: {
          displayText: "Project Number",
          inputType: inputTypes.number,
          required: true,
        },
      },
    },
  },
  editProject: {
    visionData: {
      title: "Vision Data",
      formLabels: {
        constructionCost: {
          displayText: "Construction Cost",
          inputType: inputTypes.number,
        },
        fee: {
          displayText: "Fee",
          inputType: inputTypes.number,
        },
        structuralFee: {
          displayText: "Structural Fee",
          inputType: inputTypes.number,
        },
        mepFee: {
          displayText: "MEP Fee",
          inputType: inputTypes.number,
        },
        actualStaffHours: {
          displayText: "Actual Staff Hours",
          inputType: inputTypes.number,
        },
        budgetedStaffHours: {
          displayText: "Budgeted Staff Hours",
          inputType: inputTypes.number,
        },
        profitability: {
          displayText: "Profitability",
          inputType: inputTypes.number,
        },
        constructionType: {
          displayText: "Construction Type",
          inputType: inputTypes.text,
        },
        residentialType: {
          displayText: "Residential Type",
          inputType: inputTypes.text,
        },
        location: {
          displayText: "Location",
          inputType: inputTypes.text,
        },
        designYear: {
          displayText: "Design Year",
          inputType: inputTypes.month,
        },
        builtYear: {
          displayText: "Built Year",
          inputType: inputTypes.month,
        },
      },
    },
    revitData: {
      title: "Revit Data",
      formLabels: {
        interiorAmenityArea: {
          displayText: "Interior Amenity Area",
          inputType: inputTypes.number,
        },
        outdoorAmenityArea: {
          displayText: "Outdoor Amenity Area",
          inputType: inputTypes.number,
        },
      },
    },
  },
};
