import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./view-project.styles.css";
import ProjectDisplay from "../../components/project-display/project-display";

const ViewProject = (props) => {
  const project_id = props.match.params.project_id;
  const [project, setProject] = useState({});
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      let resp = await fetch(`/api/project/${project_id}/all`);
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
        <ProjectDisplay project={project} />
      ) : (
        <h2>Invalid Project ID</h2>
      )}
    </div>
  );
};

export default withRouter(ViewProject);
