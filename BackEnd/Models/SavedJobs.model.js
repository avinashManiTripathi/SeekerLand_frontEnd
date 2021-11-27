const mongoose = require('mongoose');

const SavedJobschema = mongoose.Schema({});

const SavedJobs = mongoose.model('SavedJobs', SavedJobschema);
module.exports = SavedJobs;
