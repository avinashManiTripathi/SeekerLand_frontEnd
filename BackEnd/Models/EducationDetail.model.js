const mongoose = require('mongoose');

const EducationDetailsSchema = mongoose.Schema(
  {
    education: {
      type: String,
      required: true,
    },
    universityName: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    course: {
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
    courseType: {
      type: String,
      required: true,
      enum: ['fullTime', 'partTime', 'distanceLearing'],
    },
    seeker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seeker',
      required: true,
    },
  },
  { timestamps: true }
);

const EducationDetails = new mongoose.model(
  'EducationDetail',
  EducationDetailsSchema
);
module.exports = EducationDetails;
