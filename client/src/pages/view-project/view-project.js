import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./view-project.styles.css";

const ViewProject = (props) => {
  const project_id = props.match.params.project_id;
  const [project, setProject] = useState({});
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      let resp = await fetch(`/api/project/${project_id}`);
      let fetchedProject = await resp.json();
      if (!fetchedProject.length) return setFetched(false);
      setProject(fetchedProject[0]);
      return setFetched(true);
    };
    fetchProject();
  }, [project_id]);
  return (
    <div className="ViewProject">
      {fetched ? (
        <h2>
          {project.project_number} {project.project_name}
        </h2>
      ) : (
        <h2>Invalid Project ID</h2>
      )}
    </div>
  );
};

export default withRouter(ViewProject);
