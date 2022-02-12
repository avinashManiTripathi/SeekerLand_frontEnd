const db = require('../Models/index');
const AppliedJob = db.appliedJobs;

exports.findJobAppliedJobByJobId = async (req, res) => {
  try {
    await AppliedJob.find({ job: req.params.id })
      .populate('seeker')
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
      message: error.message,
    });
  }
};
