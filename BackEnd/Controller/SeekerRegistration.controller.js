const db = require('../Models');
const Seeker = db.seeker;

exports.SeekerRegistration = async (req, res) => {
  try {
    const seeker = new Seeker(
    req.body
    );
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
