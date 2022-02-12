const controller = require('../Controller/PersonalDetails.controller');
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
    '/api/v1/seeker/personalDetails',
    [authJwt.verifyToken],
    controller.AddPersonalDetails
  );
  app.get(
    '/api/v1/seeker/personalDetails',
    [authJwt.verifyToken],
    controller.findPersonalDetailsBySeekerId
  );
};
