const controller = require('../Controller/Job.controller');
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
    '/api/v1/recruiter/post-job',
    [authJwt.verifyRecruiterToken],
    controller.AddJob
  );
  app.get(
    '/api/v1/recruter/jobs',
    [authJwt.verifyRecruiterToken],
    controller.findPostedJobByRecruiterId
  );

  app.get('/api/v1/jobs/:city', controller.findJobsByLocation);
  app.get('/api/v1/job/:id', controller.findJobById);
  app.get('/api/v1/jobs/:skill/jobs', controller.findSkillJobs);
  app.get('/api/v1/jobs/:skill/:city', controller.findSkillsJobsInLocation);
};
