const controller = require('../Controller/JobPreferences.controller');

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
    '/api/v1/seeker/JobPreferences',
    [authJwt.verifyToken],
    controller.AddJobPreferences
  );
  app.get(
    '/api/v1/seeker/JobPreferences',
    [authJwt.verifyToken],
    controller.findJobPreferencesBySeekerId
  );
};
