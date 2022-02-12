const mongoose = require('mongoose');

const SavedJobSchema = mongoose.Schema({
  job: {
    type: mongoose.Schema.ObjectId,
    ref: 'jobs',
    required: true,
  },
  seeker: {
    type: mongoose.Schema.ObjectId,
    ref: 'Seeker',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const SavedJobs = mongoose.model('SavedJobs', SavedJobSchema);
module.exports = SavedJobs;
