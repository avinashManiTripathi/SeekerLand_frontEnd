const controller = require('../Controller/SeekerJob.controller');
const verifyDuplicateJob = require('../Middleware/verifyJobDuplicateEntry.middleware');
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
    '/api/v1/job/apply_job',
    [authJwt.verifyToken, verifyDuplicateJob.checkDuplicateAppliedJob],
    controller.ApplyJob
  );
  app.post(
    '/api/v1/job/saved_job',
    [authJwt.verifyToken, verifyDuplicateJob.checkDuplicateSavedJob],
    controller.SavedJob
  );
  app.get(
    '/api/v1/job/applied/jobs',
    [authJwt.verifyToken],
    controller.findAppliedJobBySeekerId
  );
  app.get(
    '/api/v1/job/saved_job',
    [authJwt.verifyToken],
    controller.findSavedJobBySeekerId
  );
};
