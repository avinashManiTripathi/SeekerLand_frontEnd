const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.seeker = require('./Seeker.model');

module.exports = db;
