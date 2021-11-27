const controller = require('../controller/EducationDetails.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/v1/education/save', controller.AddEducationDetails);
  app.put('/api/v1/education/update', controller.UpdateEducationDetails);
  app.get(
    '/api/v1/education/educations',
    controller.findAllEducationDetailsBySeekerId
  );
  app.get('/api/v1/education/:id', controller.findEducationDetailsById);
  app.delete('/api/v1/education/:id', controller.deleteEducationDetailsById);
};
