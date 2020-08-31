import React from "react";

const Loading = (props) => {
  const { text } = props;
  return <span className="Loading">{text}</span>;
};

export default Loading;
