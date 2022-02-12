const { mongoose } = require('../Models');
const db = require('../Models');
const ITSkills = db.itSkills;

exports.AddITSkills = async (req, res) => {
  req.body.seeker = req.seekerId;
  try {
    const itSKills = new ITSkills(req.body);
    await itSKills.save(function (error, success) {
      if (error)
        res.status(500).send({
          success: false,
          message: 'something went wrong please try again ',
        });

      if (success)
        res
          .status(201)
          .send({ success: true, message: 'It Skills Added SuccessFully' });
    });
  } catch (error) {
    if (error) {
      res.status(500).send({
        success: true,
        message: 'Internal Server Error Please Try Again ',
      });
    }
  }
};

exports.UpdateITSkills = async (req, res) => {
  ITSkills.findByIdAndUpdate(
    req.params.id,
    {
      skillName: req.body.skillName,
      version: req.body.version,
      lastUsed: req.body.lastUsed,
      experience: req.body.experience,
    },
    function (err) {
      if (err) {
        res.send({
          success: true,
          message: err,
        });
        return;
      }
      res.send({
        success: true,
        message: 'Skills  has been Updated SuccessFully ..!!',
      });
    }
  );
};

exports.deleteITSkillsById = async (req, res) => {
  ITSkills.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err)
      res.status(404).send({
        success: false,
        message: 'Failed ! Skills Does not Exist with Given Id ',
      });
    if (docs)
      res.status(200).send({
        success: true,
        message: 'Skills  Deleted SuccessFully',
      });
  });
};

exports.findITSkillsById = async (req, res) => {
  ITSkills.findById(req.params.id, function (error, skills) {
    if (error) {
      res.status(500).send({
        success: false,
        message: 'Failed !  IT Skills not found With This ID',
      });
    }
    if (skills)
      res.status(202).send({
        success: true,
        data: skills,
      });
  });
};

exports.findAllITSkillsBySeekerId = async (req, res) => {
  try {
    await ITSkills.find({ seeker: req.seekerId }, function (err, skills) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Failed ! Something Went Wrong Please Try Again',
        });
        return;
      }
      if (skills) {
        console.log('Skills', skills);
        res.status(200).send({
          success: true,
          data: skills,
        });
        return;
      }
    }).clone();
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
