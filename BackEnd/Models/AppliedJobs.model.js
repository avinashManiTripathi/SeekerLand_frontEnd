const mongoose = require('mongoose');

const AppliedJobSchema = mongoose.Schema({});

const AppliedJobs = mongoose.model('AppliedJobs', AppliedJobSchema);
module.exports = AppliedJobs;
