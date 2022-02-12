const controller = require('../controller/RecruiterAuth.controller');
const authJwt = require('../Middleware/verifyToken');
const jobController = require('../Controller/RecruiterJobs.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/v1/recruiter_registration', controller.RecruiterRegistration);
  app.post('/api/v1/recruiter_login', controller.RecruiterLogin);
  app.get(
    '/api/v1/recruiter_details',
    [authJwt.verifyRecruiterToken],
    controller.loadRecruiterDetails
  );
  app.get(
    '/api/v1/recruiter/jobs/applied-jobs/:id',
    [authJwt.verifyRecruiterToken],
    jobController.findJobAppliedJobByJobId
  );
};
