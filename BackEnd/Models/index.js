const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.seeker = require('./Seeker.model');
db.itSkills = require('./ITSkills.model');
db.educationDetail = require('./EducationDetail.model');
db.project = require('./Project.model');
db.appliedJobs = require('./AppliedJobs.model');
db.savedJobs = require('./SavedJobs.model');
db.jobPreferences = require('./JobPreferences.model');
module.exports = db;
