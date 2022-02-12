const db = require('../Models/index');
const verifyJobs = require('../utils/getVerifiedJobs');
const jwt = require('jsonwebtoken');
const Job = db.job;

exports.AddJob = async (req, res) => {
  try {
    req.body.recruiter = req.recruiterId;
    const job = new Job(req.body);
    await job.save(function (err, jobs) {
      if (err)
        res.status(500).send({
          message: err,
        });
      if (jobs) {
        console.log('Jobs ===  ', jobs);
        res.status(201).send({
          message: 'jobs added Successfully',
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      message: 'server error',
    });
  }
};

exports.findJobsByLocation = async (req, res) => {
  try {
    verifySeekerToken(req, res);
    const seekersId = req.seekerId ? req.seekerId : '61b45b479a2e9959c89227ec';

    console.log('fffd', seekersId, 'df', req.seekerId);

    Job.aggregate([
      {
        $match: {
          city: {
            $regex: req.params.city,
            $options: 'i',
          },
        },
      },
      {
        $lookup: {
          from: 'appliedjobs',
          let: { custId: '$_id' },
          pipeline: [
            {
              $addFields: {
                seekerId: { $toObjectId: seekersId },
              },
            },
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$job', '$$custId'] },
                    seekersId
                      ? { $eq: ['$seeker', '$seekerId'] }
                      : { $ne: ['$seeker', '$seekerId'] },
                  ],
                },
              },
            },
          ],
          as: 'applied',
        },
      },
      // {
      //   $unwind: '$applied_info',
      // },
    ])
      .then((result) => {
        let validate = [];
        result &&
          result.forEach((element) => {
            if (element.applied.length < 1) {
              validate.push(element);
            }
          });
        res.status(200).send({
          success: true,
          data: validate,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.findSkillJobs = async (req, res) => {
  try {
    verifySeekerToken(req, res);

    const seekersId = req.seekerId ? req.seekerId : '61b45b479a2e9959c89227ec';
    Job.aggregate([
      {
        $match: {
          'skills.name': {
            $regex: req.params.skill,
            $options: 'i',
          },
        },
      },
      {
        $lookup: {
          from: 'appliedjobs',
          let: { custId: '$_id' },
          pipeline: [
            {
              $addFields: {
                seekerId: { $toObjectId: seekersId },
              },
            },
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$job', '$$custId'] },
                    seekersId
                      ? { $eq: ['$seeker', '$seekerId'] }
                      : { $ne: ['$seeker', '$seekerId'] },
                  ],
                },
              },
            },
          ],
          as: 'applied',
        },
      },
      // {
      //   $unwind: '$applied_info',
      // },
    ])
      .then((result) => {
        let validate = [];
        result &&
          result.forEach((element) => {
            if (element.applied.length < 1) {
              validate.push(element);
            }
          });
        res.status(200).send({
          success: true,
          data: validate,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

exports.findSkillsJobsInLocation = async (req, res) => {
  try {
    verifySeekerToken(req, res);

    const seekersId = req.seekerId ? req.seekerId : '61b45b479a2e9959c89227ec';
    console.log('Skills Jobs  iN Location', seekersId, 'df', req.seekerId);

    Job.aggregate([
      {
        $match: {
          city: {
            $regex: req.params.city,
            $options: 'i',
          },
          'skills.name': {
            $regex: req.params.skill,
            $options: 'i',
          },
        },
      },
      {
        $lookup: {
          from: 'appliedjobs',
          let: { custId: '$_id' },
          pipeline: [
            {
              $addFields: {
                seekerId: { $toObjectId: seekersId },
              },
            },
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$job', '$$custId'] },
                    seekersId
                      ? { $eq: ['$seeker', '$seekerId'] }
                      : { $ne: ['$seeker', '$seekerId'] },
                  ],
                },
              },
            },
          ],
          as: 'applied',
        },
      },
      // {
      //   $unwind: '$applied_info',
      // },
    ])
      .then((result) => {
        let validate = [];
        result &&
          result.forEach((element) => {
            if (element.applied.length < 1) {
              validate.push(element);
            }
          });
        res.status(200).send({
          success: true,
          data: validate,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.findJobById = async (req, res) => {
  try {
    Job.findOne({ _id: req.params.id }, function (err, details) {
      if (err)
        res.status(404).send({
          success: false,
          message: err,
        });
      if (details)
        res.status(200).send({
          success: true,
          data: details,
        });
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

const verifySeekerToken = (req, res) => {
  let token = req.cookies.token;
  if (!token) {
    return null;
  }
  jwt.verify(token, process.env.JWT_AUTH_TOKEN, (err, decoded) => {
    if (err) {
      return null;
    }

    req.seekerId = decoded.id;
    return;
  });
};

exports.findPostedJobByRecruiterId = async (req, res) => {
  try {
    await Job.find({ recruiter: req.recruiterId }, function (err, jobs) {
      if (err)
        res.status(400).send({
          success: false,
          message: 'Something Went Wrong Please Try Again',
        });
      if (jobs)
        res.status(200).send({
          success: true,
          data: jobs,
        });
    }).clone();
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};



