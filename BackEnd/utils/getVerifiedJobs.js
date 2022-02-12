const db = require('../Models/index');
const jwt = require('jsonwebtoken');
const AppliedJob = db.appliedJobs;
const Job = db.job;
const SavedJob = db.savedJobs;

const verifyJobs = (jobsdd, req, res) => {
  const arr = [];
  var status = 'true';

  findAppliedJobsByLoggedInSeeker(req.res);

  Object.assign({}, ...arr);
  // jobsdd.forEach((elements) => {
  //   findAppliedJobs(elements._id, req, res);
  //   let verifiedJobs = elements.toObject();

  //   console.log('stdssd', req.status);

  //   arr.push({ ...verifiedJobs, applied: status });
  // });

  return arr;
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

const findAppliedJobs = (id, req, res) => {
  verifySeekerToken(req, res);
  let applied = AppliedJob.findOne({
    job: id,
    seeker: req.seekerId,
  }).exec();

  applied = applied.then((id) => {
    return false;
  });
  return applied;
};

const findAppliedJobsByLoggedInSeeker = (req, res) => {
  //  verifySeekerToken(req,res);
  // let appliedJobs = []
  //  const applied =  AppliedJob.find({seeker:req.seekerId}).then(repo => {
  //        callback(repo);
  // })
  // .catch(error => {
  //   console.log({ error })
  // })
  // console.log(applied);

  console.log('Entered ');

  Job.aggregate([
    {
      $lookup: {
        from: 'appliedjobs',
        let: { custId: '$_id' },
        pipeline: [
          {
            $addFields: {
              seekerId: { $toObjectId: '61c58b239575f70b729d8fd1' },
            },
          },
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$job', '$$custId'] },
                  { $eq: ['$seeker', '$seekerId'] },
                ],
              },
            },
          },
        ],
        as: 'orders_info',
      },
    },
    // {
    //   $unwind: '$orders_info',
    // },
  ])
    .then((result) => {
      console.log('result', result);
    })
    .catch((error) => {
      console.log(error);
    });

  // Job.aggregate([
  //   {
  //     $lookup: {
  //       from: 'appliedjobs',
  //       localField: '_id',
  //       foreignField: 'job',
  //       as: 'applied',
  //     },
  //   },
  // ])
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

module.exports = verifyJobs;
