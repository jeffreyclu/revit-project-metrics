const db = require('../models/db-model');

const dbController = {};

dbController.getProjects = (req, res, next) => {
  const queryString = `SELECT * FROM project_data`;
  (async () => {
    try {
      const resp = await db.query(queryString);
      res.locals.projects = resp.rows;
      next();
    }
    catch (err) {
      next({ msg: err, status: 400 });
    }
  })();
}

dbController.getProjectById = (req, res, next) => {
  const { project_id } = req.params;
  const queryString = `SELECT * FROM project_data WHERE project_id='${project_id}';`;
  (async () => {
    try {
      const resp = await db.query(queryString);
      res.locals.project = resp.rows;
      next();
    }
    catch (err) {
      next({ msg: err, status: 400 });
    }
  })()
}

dbController.findProjectByNameOrNumber = (req, res, next) => {
  const { project_name, project_number } = req.body;
  const queryString = `SELECT * FROM project_data WHERE project_name='${project_name}' OR project_number='${project_number}';`;
  (async () => {
    try {
      const resp = await db.query(queryString);
      res.locals.foundProjects = resp.rows;
      next();
    }
    catch (err) {
      next({ msg: err, status: 400 });
    }
  })();
}

dbController.findProject = (req, res, next) => {
  const { searchTerm } = req.body;
  const queryString = `SELECT * FROM project_data WHERE to_tsvector('english', project_name) @@ to_tsquery('english', '${searchTerm}');`;
  (async () => {
    try {
      const resp = await db.query(queryString);
      res.locals.foundProjects = resp.rows;
      next();
    }
    catch (err) {
      next({ msg: err, status: 400 });
    }
  })();
}

dbController.addProject = (req, res, next) => {
  const { project_name, project_number } = req.body;
  if (!project_name || !project_number) return next({ msg: 'body is undefined', status: 400 });
  const projectsQueryString = `INSERT INTO project_data (project_name, project_number)
  VALUES ('${project_name}', '${project_number}')
  RETURNING project_id`;
  (async () => {
    try {
      const projects = await db.query(projectsQueryString);
      const newProject = await projects.rows[0];
      res.locals.projectId = newProject;
      console.log(newProject.project_id);
      const visionQueryString = `INSERT INTO vision_data (project_id)
      VALUES ('${newProject.project_id}')`;
      await db.query(visionQueryString);
      const revitQueryString = `INSERT INTO revit_data (project_id)
      VALUES ('${newProject.project_id}')`;
      await db.query(revitQueryString);
      const sustainabilityQueryString = `INSERT INTO sustainability_data (project_id)
      VALUES ('${newProject.project_id}')`;
      await db.query(sustainabilityQueryString);
      next();
    }
    catch (err) {
      console.log(err)
      next({ msg: err, status: 400 });
    }
  })();
}

dbController.resetTable = (req, res, next) => {
  const { table_name } = req.body;
  if (!table_name) return next({ msg: 'body is undefined', status: 400 });
  const queryString = `DELETE FROM ${table_name};`;
  (async () => {
    try {
      const resp = await db.query(queryString);
      res.locals.result = resp;
      next();
    }
    catch (err) {
      next({ msg: err, status: 400 });
    }
  })();
}

dbController.getDataByProjectId = (req, res, next) => {
  const { project_id, table_name } = req.params;
  const queryString = `SELECT * FROM ${table_name} WHERE project_id='${project_id}';`;
  (async () => {
    try {
      const resp = await db.query(queryString);
      res.locals.projectData = resp.rows;
      next();
    }
    catch (err) {
      next({ msg: err, status: 400 });
    }
  })();
}

dbController.updateDataByProjectId = (req, res, next) => {
  const { project_id, table_name } = req.params;
  const data = {};
  // build an data object for the db
  for (const[key, value] of Object.entries(req.body)) {
    // only store non-null values or non-id column values
    if (value && key !== 'project_id' && key !== 'vision_data_id' && key !== 'revit_id' && key !== 'sustainability_id') data[key] = value; 
  }
  // if there's no new data just skip
  if (JSON.stringify(data) === '{}') return next();
  // start building a query string
  let setString = '';
  for (const[key, value] of Object.entries(data)) {
    setString += `${key}='${value}',`;
  }
  setString = setString.slice(0, setString.length - 1);
  let queryString = `UPDATE ${table_name}
    SET ${setString}
    WHERE project_id='${project_id}';`;
  (async () => {
    try {
        const resp = await db.query(queryString);
        res.locals.result = resp || true;
        next();
      }
      catch (err) {
        next({ msg: err, status: 400 });
      }
    })();
}


module.exports = dbController;
