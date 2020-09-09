import React from "react";

const CostDisplay = (props) => {
  const { construction_cost, fee } = props.project;
  return (
    <div className="CostDisplay">
      <span className="ConstructionCost">{construction_cost}</span>
      <span className="Fee">{fee}</span>
    </div>
  );
};

export default CostDisplay;
