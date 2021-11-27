const controller = require('../controller/Project.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/v1/project/save', controller.AddProject);
  app.put('/api/v1/project/:id', controller.UpdateProject);
  app.get('/api/v1/project/:id', controller.findProjectById);
  app.get('/api/v1/project/projects', controller.findAllProjectBySeekerId);
  app.delete('/api/v1/project/:id', controller.deleteProjectById);
};
