const db = require('../Models');
const ITSkills = require('../Models/ITSkills.model');
const EducationDetails = db.educationDetail;

exports.AddEducationDetails = async (req, res) => {
  try {
    const educationDetails = new EducationDetails(
      req.body
    );
    await educationDetails.save(function (error, education) {
      if (error)
        res
          .status(500)
          .send({ message: 'Something went wrong please try again ' });

      if (education)
        res
          .status(201)
          .send({ message: 'Education Details Added SuccessFully' });
    });
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

exports.UpdateEducationDetails = async (req, res) => {
  EducationDetails.findByIdAndUpdate(
    req.params.id,
    {
      education: req.body.education,
      universityName: req.body.universityName,
      specialization: req.body.specialization,
      course: req.body.course,
      fromDate: req.body.fromDate,
      toDate: req.body.toDate,
      courseType: req.body.courseType,
    },
    function (err) {
      if (err) {
        res.send(err);
        return;
      }
      res.send({
        message: 'Education Details has been Updated SuccessFully ..!!',
      });
    }
  );
};

exports.deleteEducationDetailsById = async (req, res) => {
  EducationDetails.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err)
      res.status(404).send({
        message: 'Failed ! Education Does not Exist with Given Id ',
      });
    if (docs)
      res.status(200).send({
        message: 'Education Details Deleted SuccessFully',
      });
  });
};

exports.findEducationDetailsById = async (req, res) => {
  EducationDetails.findById(req.params.id, function (error, education) {
    if (error) {
      res.status(500).send({
        message: 'Failed ! Education Details not found With This ID',
      });
    }
    if (education) res.status(202).send(education);
  });
};

exports.findAllEducationDetailsBySeekerId = async (req, res) => {
  try {
    await ITSkills.find({ seeker: req.seekerId }, function (err, education) {
      if (err) {
        res.send({ message: err });
      }
      if (education) {
        res.send(education);
      }
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
