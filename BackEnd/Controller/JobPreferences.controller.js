const db = require('../Models/index');

const JobPreferences = db.jobPreferences;

exports.AddJobPreferences = async (req, res) => {
  try {
    const jobPreferences = new JobPreferences(req.body);
    await jobPreferences.save(function (error, success) {
      if (error)
        res.status(500).send({
          message: 'SomeThing Went Wrong Please Try Again',
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
