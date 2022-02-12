const db = require('../Models');
const Seeker = db.seeker;
const jwt = require('jsonwebtoken');
const sendToken = require('../utils/jwtToken');
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;


exports.SeekerRegistration = async (req, res) => {
  try {
    const seeker = new Seeker(req.body);
    await seeker.save(function (err, result) {
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

exports.SeekerLogin = async (req, res) => {
  console.log('Eeeee');
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        message: 'Please Enter Email and Password',
      });
    }
    const seeker = await Seeker.findOne({ email }).select('+password');
    if (!seeker) {
      return res.status(404).send({
        message: 'Entered Email and Password is Wrong',
      });
    }
    const isPasswordMatched = await seeker.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(404).send({
        message: 'Wrong Credentials',
      });
    }
    sendToken.sendSeekerToken(seeker, 200, res);
  } catch (error) {
    console.log('Error , ', error);
  }
};

exports.loadSeekerDetails = async (req, res) => {
  try {
    const seeker = await Seeker.findOne(
      { _id: req.seekerId },
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

exports.logOut = async (req, res) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
  });

  res.status(200).json({
    success: true,
    message: 'Logged Out',
  });
};
