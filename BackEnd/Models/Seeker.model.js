const mongoose = require('mongoose');
const SeekerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female'],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      },
      message: 'Please enter a valid email',
    },
    required: [true, 'Email required'],
  },
  mobileNumber: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (arr) {
        return (arr.length = 10);
      },
      message: 'Mobile Number Length should be 10 ',
    },
  },
  created_at: { type: Date, default: Date.now },
});

const Seeker = new mongoose.model('Seeker', SeekerSchema);
module.exports = Seeker;
