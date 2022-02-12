const mongoose = require('mongoose');

const PersonalDetailSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      required: true,
    },
    materialStatus: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    homeTown: {
      type: String,
      required: true,
    },
    seeker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seeker',
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PersonalDetail = mongoose.model('PersonalDetails', PersonalDetailSchema);
module.exports = PersonalDetail;
