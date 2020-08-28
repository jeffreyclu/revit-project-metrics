import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.styles.css";

import Form from "../form/form";
// import Nav from "../nav/nav";

const App = () => {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    const fetchProjects = async () => {
      let resp = await fetch("/api/projects");
      let res = await resp.json();
      console.log(res);
      setProjects(res);
    };
    fetchProjects();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Form} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
