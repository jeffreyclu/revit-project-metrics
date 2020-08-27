import React, { useState, useEffect } from "react";
import "./app.styles.css";

import Form from "../form/form";

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetch("/api");
      let res = await resp.json();
      console.log(res);
      setData(res);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Form />
    </div>
  );
};

export default App;
