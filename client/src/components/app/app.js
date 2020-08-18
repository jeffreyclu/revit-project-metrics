import React, { useState, useEffect } from "react";
import "./app.styles.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let resp = await fetch("/app");
      console.log(resp);
      let data = await resp.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>sup</h1>
    </div>
  );
};

export default App;
