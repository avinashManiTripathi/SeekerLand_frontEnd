const controller = require('../controller/ITSkills.controller');
const authJwt = require('../Middleware/verifyToken');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post(
    '/api/v1/seeker/itskills',
    [authJwt.verifyToken],
    controller.AddITSkills
  );
  app.put('/api/v1/itskills/:id', controller.UpdateITSkills);
  app.get('/api/v1/itskills/:id', controller.findITSkillsById);
  app.get(
    '/api/v1/seeker/itskills',
    [authJwt.verifyToken],
    controller.findAllITSkillsBySeekerId
  );
  app.delete('/api/v1/itskills/:id', controller.deleteITSkillsById);
};
