const express = require('express');

const dbController = require('../controllers/db-controller');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({msg: 'Welcome to the Revit Project Metrics API!'})
});

router.get('/projects', 
  dbController.getProjects,
  (req, res) => res.status(200).json(res.locals.projects)
);

router.get('/project/:project_id',
  dbController.getProject,
  (req, res) => res.status(200).json(res.locals.project))

router.post('/addproject',
  dbController.addProject,
  (req, res) => res.status(200).json(res.locals.projectId)
)

router.delete('/resettable',
  dbController.resetTable,
  (req, res) => res.status(200).json(res.locals.result)
)

module.exports = router;
