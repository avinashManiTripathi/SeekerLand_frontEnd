const mongoose = require('mongoose');
const { seeker } = require('.');

const JobPreferencesSchema = mongoose.Schema(
  {
    industry: {
      type: String,
      required: true,
    },
    function: {
      type: String,
      required: true,
    },

    employmentType: {
      type: String,
      required: true,
    },
    preferredLocation: {
      type: String,
      required: true,
    },
    availabilityToJoin: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    preferredShift: {
      type: String,
      required: true,
    },
    expectedSalary: {
      type: String,
      required: true,
    },
    seeker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seeker',
      required: true,
    },
  },
  { timestamps: true }
);

const JobPreferences = mongoose.model('JobPreferences', JobPreferencesSchema);
module.exports = JobPreferences;
