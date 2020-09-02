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
          inputType: inputTypes.number,
        },
        builtYear: {
          displayText: "Built Year",
          inputType: inputTypes.number,
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
        mechanicalArea: {
          displayText: "Mechanical Area",
          inputType: inputTypes.number,
        },
        residentialArea: {
          displayText: "Residential Area",
          inputType: inputTypes.number,
        },
        retailArea: {
          displayText: "Retail Area",
          inputType: inputTypes.number,
        },
        officeArea: {
          displayText: "Office Area",
          inputType: inputTypes.number,
        },
        commercialArea: {
          displayText: "Commercial Area",
          inputType: inputTypes.number,
        },
        hospitalityArea: {
          displayText: "Hospitality Area",
          inputType: inputTypes.number,
        },
        parkingArea: {
          displayText: "Parking Area",
          inputType: inputTypes.number,
        },
        numberOfStories: {
          displayText: "Number of Stories",
          inputType: inputTypes.number,
        },
        numberOfPassengerElevators: {
          displayText: "Number of Passenger Elevators",
          inputType: inputTypes.number,
        },
        numberOfServiceElevators: {
          displayText: "Number of Service Elevators",
          inputType: inputTypes.number,
        },
        balconies: {
          displayText: "Balconies",
          inputType: inputTypes.number,
        },
      },
    },
    sustainabilityData: {
      title: "Sustainability Data",
      formLabels: {
        energyModel: {
          displayText: "Energy Model",
          inputType: inputTypes.text,
        },
        leedStatus: {
          displayText: "LEED Status",
          inputType: inputTypes.text,
        },
      },
    },
  },
};
