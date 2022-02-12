const AppliedJobs = require('../Models/AppliedJobs.model');
const { savedJobs } = require('../Models/index');
const db = require('../Models/index');
const AppliedJob = db.appliedJobs;
const SavedJob = db.savedJobs;

exports.ApplyJob = async (req, res) => {
  try {
    const appliedjobs = new AppliedJob({
      job: req.body.jobId,
      seeker: req.seekerId,
    });
    await appliedjobs.save(function (err, applySuccess) {
      if (err)
        res.status(401).send({
          success: false,
          message: err,
        });
      if (applySuccess)
        res.status(201).send({
          success: true,
          message: 'Job applied Successfully',
        });
    });
  } catch (error) {
    res.send({
      success: true,
      message: error,
    });
  }
};
exports.SavedJob = async (req, res) => {
  try {
    const savedjobs = new SavedJob({
      job: req.body.jobId,
      seeker: req.seekerId,
    });
    await savedjobs.save(function (err, savedSuccess) {
      if (err)
        res.status(401).send({
          success: false,
          message: err,
        });
      if (savedSuccess)
        res.status(201).send({
          success: true,
          message: 'Job Saved Successfully',
        });
    });
  } catch (error) {
    res.send({
      success: true,
      message: error,
    });
  }
};

exports.findAppliedJobBySeekerId = async (req, res) => {
  console.log('applied jobs seeker', req.seekerId);
  try {
    const applied = await AppliedJobs.find({
      seeker: req.seekerId,
    })
      .populate('job')
      .exec(function (err, appliedJobs) {
        if (err) {
          res.status(401).send({
            success: false,
            message: 'something went wrong',
          });
        }
        if (appliedJobs) {
          res.status(200).send({
            success: true,
            data: appliedJobs,
          });
        }
      });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
    });
  }
};

exports.findSavedJobBySeekerId = async (req, res) => {
  try {
    const saved = await SavedJob.find({
      seekerId: req.seekerId,
    })
      .populate('job')
      .exec(function (err, savedJobs) {
        if (err) {
          res.status(401).send({
            success: false,
            message: 'something went wrong',
          });
        }
        if (savedJobs)
          res.status(200).send({
            success: true,
            data: savedJobs,
          });
      });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};
