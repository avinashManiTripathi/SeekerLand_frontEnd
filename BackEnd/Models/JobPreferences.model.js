const mongoose = require('mongoose');

const JobPreferencesSchema = mongoose.Schema({
  Industry: {
    type: String,
    required: true,
  },
  Function: {
    type: String,
    required: true,
  },

  EmploymentType: {
    type: String,
    required: true,
  },
  PreferredLocation: {
    type: String,
    required: true,
  },
  AvailabilityToJoin: {
    type: String,
    required: true,
  },
});

const JobPreferences = mongoose.model('JobPreferences', JobPreferencesSchema);
module.exports = JobPreferences;
