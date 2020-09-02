const express = require('express');

const dbController = require('../controllers/db-controller');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({msg: 'Welcome to the Revit Project Metrics API!'})
});

router.get('/allprojects', 
  dbController.getProjects,
  (req, res) => res.status(200).json(res.locals.projects)
);

router.get('/project/:project_id/all',
  dbController.getAllDataByProjectId,
  (req, res) => res.status(200).json(res.locals.allProjectData)
);

router.get('/project/:project_id/:table_name',
  dbController.getDataByProjectId,
  (req, res) => res.status(200).json(res.locals.projectData)
);

router.get('/project/:project_id',
  dbController.getProjectById,
  (req, res) => res.status(200).json(res.locals.project)
);

router.post('/findprojectbynameornumber',
  dbController.findProjectByNameOrNumber,
  (req, res) => res.status(200).json(res.locals.foundProjects)
);

router.post('/findproject',
  dbController.findProject,
  (req, res) => res.status(200).json(res.locals.foundProjects)
);

router.post('/addproject',
  dbController.addProject,
  (req, res) => res.status(200).json(res.locals.projectId)
);

router.put('/project/:project_id/:table_name',
  dbController.updateDataByProjectId,
  (req, res) => res.status(200).json(res.locals.result)
);

router.delete('/resettable',
  dbController.resetTable,
  (req, res) => res.status(200).json(res.locals.result)
);

module.exports = router;
