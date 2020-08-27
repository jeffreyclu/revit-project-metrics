import React, { useState, useEffect } from "react";
import "./app.styles.css";

import Form from "../form/form";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetch("/api");
      console.log(resp);
      let data = await resp.json();
      setData(data);
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
