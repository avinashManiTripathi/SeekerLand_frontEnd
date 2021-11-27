const { mongoose } = require('../Models');
const db = require('../Models');
const ITSkills = db.itSkills;

exports.AddITSkills = async (req, res) => {
  try {
    const itSKills = new ITSkills({
      skillName: req.body.skillName,
      version: req.body.version,
      lastUsed: req.body.lastUsed,
      experience: req.body.experience,
    });
    await itSKills.save(function (error, itSkills) {
      if (error)
        res
          .status(500)
          .send({ message: 'something went wrong please try again ' });

      if (itSKills)
        res.status(201).send({ message: 'It Skills Added SuccessFully' });
    });
  } catch (error) {
    if (error) {
      res.status(500).send({ message: error });
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
        res.send(err);
        return;
      }
      res.send({
        message: 'Skills  has been Updated SuccessFully ..!!',
      });
    }
  );
};

exports.deleteITSkillsById = async (req, res) => {
  ITSkills.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err)
      res.status(404).send({
        message: 'Failed ! Skills Does not Exist with Given Id ',
      });
    if (docs)
      res.status(200).send({
        message: 'Skills  Deleted SuccessFully',
      });
  });
};

exports.findITSkillsById = async (req, res) => {
  ITSkills.findById(req.params.id, function (error, skills) {
    if (error) {
      res.status(500).send({
        message: 'Failed !  IT Skills not found With This ID',
      });
    }
    if (skills) res.status(202).send(skills);
  });
};

exports.findAllITSkillsBySeekerId = async (req, res) => {
  try {
    await ITSkills.find({ seeker: req.seekerId }, function (err, skills) {
      if (err) {
        res.send({ message: err });
      }
      if (skills) {
        res.send(skills);
      }
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
