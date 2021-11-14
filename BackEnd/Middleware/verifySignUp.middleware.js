const db = require('../Models');

const Seeker = db.seeker;

checkDuplicateMobileNumber = (req, res, next) => {
  Seeker.findOne({
    mobileNumber: req.body.mobileNumber,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res
        .status(404)
        .send({ message: 'Failed ! Mobile Number Already Exist ' });
      return;
    }
    next();
  });
};

checkDuplicateEmail = (req, res, next) => {
  Seeker.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(404).send({ message: 'Failed ! Email Already Exist ' });
      return;
    }

    next();
  });
};

const verifySignUp = {
  checkDuplicateMobileNumber,
  checkDuplicateEmail,
};

module.exports = verifySignUp;
