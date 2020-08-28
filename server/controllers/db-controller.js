const db = require('../models/db-model');

const dbController = {};

dbController.getProjects = (req, res, next) => {
  const queryString = `SELECT * FROM projects`;
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

// dbController.getProject = (req, res, next) => {
//   const { project_name, project_number } = req.body;
//   const queryString = `SELECT * FROM projects WHERE project_name='${project_name}' OR project_number='${project_number}'`;
//   (async () => {
//     try {
//       const resp = await db.query(queryString);
//       res.locals.foundProjects = resp.rows;
//       next();
//     }
//     catch (err) {
//       next({ msg: err, status: 400 });
//     }
//   })()
// }

dbController.getProject = (req, res, next) => {
  const { project_id } = req.params;
  const queryString = `SELECT * FROM projects WHERE project_id='${project_id}';`;
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

dbController.addProject = (req, res, next) => {
  const { project_name, project_number } = req.body;
  console.log(req.body)
  if (!project_name || !project_number) return next({ msg: 'body is undefined', status: 400 });
  const queryString = `INSERT INTO projects (project_name, project_number)
  VALUES ('${project_name}', '${project_number}')
  RETURNING project_id`;
  (async () => {
    try {
      const resp = await db.query(queryString);
      res.locals.projectId = resp.rows[0];
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
      next({ msg: err, status: 400 })
    }
  })()
}

module.exports = dbController;
