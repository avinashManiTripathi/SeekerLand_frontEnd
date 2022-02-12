const db = require('../Models/index');
const AppliedJob = db.appliedJobs;
const SavedJob = db.savedJobs;

checkDuplicateAppliedJob = (req, res, next) => {
  AppliedJob.findOne({
    job: req.body.jobId,
    seeker: req.seekerId,
  }).exec((err, appliedJob) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (appliedJob) {
      res
        .status(409)
        .send({ message: 'Failed ! Job Has Been Already Applied ' });
      return;
    }
    next();
  });
};

checkDuplicateSavedJob = (req, res, next) => {
  SavedJob.findOne({
    job: req.body.jobId,
    seeker: req.seekerId,
  }).exec((err, savedJobs) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (savedJobs) {
      res.status(409).send({ message: 'Failed ! Job Has Been Saved Applied ' });
      return;
    }

    next();
  });
};

const verifyDuplicateJob = {
  checkDuplicateAppliedJob,
  checkDuplicateSavedJob,
};
module.exports = verifyDuplicateJob;
