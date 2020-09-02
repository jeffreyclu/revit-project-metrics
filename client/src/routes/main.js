import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AllProjects from "../pages/all-projects/all-projects";
import SearchProjects from "../pages/search-projects/search-projects";
import AddProject from "../pages/add-project/add-project";
import NotFound from "../pages/not-found/not-found";
import ViewProject from "../pages/view-project/view-project";
import EditProject from "../pages/edit-project/edit-project";

import NavBar from "../components/nav-bar/nav-bar";
import NavMenu from "../components/nav-menu/nav-menu";

import "./main.styles.css";

const Main = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/allprojects" component={AllProjects} />
          <Route path="/searchprojects" component={SearchProjects} />
          <Route path="/addproject" component={AddProject} />
          <Route path="/viewproject/:project_id" component={ViewProject} />
          <Route path="/editproject/:project_id" component={EditProject} />
          <Route path="/" component={NavMenu} exact />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
