const db = require('../Models/index');
const Recruiter = db.recruiter;
const sendToken = require('../utils/jwtToken');

exports.RecruiterRegistration = async (req, res) => {
  try {
    const recruiter = new Recruiter(req.body);
    await recruiter.save(function (err, result) {
      if (err)
        res
          .status(500)
          .send({ message: 'something went wrong please try again ' });
      if (result)
        res
          .status(201)
          .send({ message: 'Thank You ! You have Registered Successfully' });
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

exports.RecruiterLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({
        message: 'Please Enter Email and Password',
      });
    }
    const recruiter = await Recruiter.findOne({ email }).select('+password');
    if (!recruiter) {
      return res.status(404).send({
        message: 'Entered Email and Password is Wrong',
      });
    }
    const isPasswordMatched = await recruiter.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(401).send({
        message: 'Wrong Credentials',
      });
    }
    sendToken.sendRecruiterToken(recruiter, 200, res);
  } catch (error) {
    console.log('Error , ', error);
  }
};

exports.loadRecruiterDetails = async (req, res) => {
  try {
    const seeker = await Recruiter.findOne(
      { _id: req.recruiterId },
      function (err, details) {
        if (err)
          res.status(401).send({
            success: false,
            message: 'Not Found Please Try Again',
          });
        if (details)
          res.status(200).send({
            success: true,
            data: details,
          });
      }
    ).clone();
  } catch (error) {
    res.status(401).send({
      success: false,
      message: error.message,
    });
  }
};
