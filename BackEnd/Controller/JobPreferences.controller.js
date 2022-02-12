const db = require('../Models/index');

const JobPreferences = db.jobPreferences;

exports.AddJobPreferences = async (req, res) => {
  try {
    req.body.seeker = req.seekerId;
    const jobPreferences = new JobPreferences(req.body);
    await jobPreferences.save(function (error, success) {
      if (error)
        res.status(500).send({
          message: error,
        });
      if (success)
        res.status(201).send({
          message: 'Added Successfully in Data Base',
        });
    });
  } catch (error) {
    res.status(500).send({
      message: 'internal server error',
    });
  }
};

exports.findJobPreferencesBySeekerId = async (req, res) => {
  try {
    await JobPreferences.findOne({
      seeker: req.seekerId,
    }).exec(function (err, jobPreferences) {
      if (err)
        res.status(403).send({
          message: 'SomeThing Went Wrong Please Try Again',
        });
      if (jobPreferences)
        res.status(201).json({
          success: true,
          data: jobPreferences,
        });
    });
  } catch (error) {
    res.status(500).send({
      message: 'SomeThing Went Wrong Please Try Again',
    });
  }
};
