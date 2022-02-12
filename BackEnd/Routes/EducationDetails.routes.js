const controller = require('../controller/EducationDetails.controller');
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
    '/api/v1/seeker/educations',
    [authJwt.verifyToken],
    controller.AddEducationDetails
  );
  app.put('/api/v1/education/seeker/update', controller.UpdateEducationDetails);
  app.get(
    '/api/v1/seeker/educations',
    [authJwt.verifyToken],
    controller.findAllEducationDetailsBySeekerId
  );
  app.get('/api/v1/education/:id', controller.findEducationDetailsById);
  app.delete('/api/v1/education/:id', controller.deleteEducationDetailsById);
};
