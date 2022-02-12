const mongoose = require('mongoose');

const ITSkillsSchema = mongoose.Schema(
  {
    skillName: {
      type: String,
      required: true,
    },
    version: {
      type: String,
      required: true,
    },
    lastUsed: {
      type: String,
      required: true,
    },
    experience: {
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

const ITSkills = mongoose.model('ITSkills', ITSkillsSchema);
module.exports = ITSkills;
