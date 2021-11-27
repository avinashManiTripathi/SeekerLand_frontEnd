const db = require('../Models');
const Seeker = db.seeker;

exports.SeekerRegistration = async (req, res) => {
  try {
    const seeker = new Seeker({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      gender: req.body.gender,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
    });
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
