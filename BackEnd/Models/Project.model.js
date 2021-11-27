const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  projectStatus: {
    type: String,
    required: true,
    enum: ['inProgress', 'finished'],
  },
  client: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
