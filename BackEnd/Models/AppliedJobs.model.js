const mongoose = require('mongoose');

const AppliedJobSchema = mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'jobs',
      required: true,
    },
    seeker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seeker',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

const AppliedJobs = mongoose.model('AppliedJobs', AppliedJobSchema);
module.exports = AppliedJobs;
