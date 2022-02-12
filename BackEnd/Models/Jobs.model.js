const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    vacancy: {
      type: Number,
      required: true,
    },
    minSalary: {
      type: Number,
      required: true,
    },
    maxSalary: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    expiredDate: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      required: true,
      enum: ['active', 'in_active'],
    },
    description: {
      type: String,
      required: true,
    },
    skills: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    role: [
      {
        name: { type: String, required: true },
      },
    ],
    industry: [
      {
        name: { type: String, required: true },
      },
    ],
    functionalArea: [
      {
        name: { type: String, required: true },
      },
    ],
    employmentType: [
      {
        name: { type: String, required: true },
      },
    ],
    roleCategory: [
      {
        name: { type: String, required: true },
      },
    ],

    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recruiter',
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

const Job = mongoose.model('jobs', JobSchema);
module.exports = Job;
