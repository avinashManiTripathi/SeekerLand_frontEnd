const db = require('../Models/index');
const PersonalDetail = db.personalDetail;

exports.AddPersonalDetails = async (req, res) => {
  try {
    console.log('Personal Details ===', req.body);
    req.body.seeker = req.seekerId;
    const personalDetail = new PersonalDetail(req.body);
    await personalDetail.save(function (error, details) {
      if (error)
        res.status(403).send({
          success: false,
          message: error,
        });
      if (details)
        res.status(201).send({
          success: true,
          data: details,
        });
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

exports.findPersonalDetailsBySeekerId = async (req, res) => {
  try {
    await PersonalDetail.findOne({ seeker: req.seekerId }).exec(function (
      err,
      details
    ) {
      if (err)
        res.status(403).send({
          success: false,
          message: 'something went Wrong',
        });
      if (details)
        res.status(200).json({
          success: true,
          data: details,
        });
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal Server error',
    });
  }
};
