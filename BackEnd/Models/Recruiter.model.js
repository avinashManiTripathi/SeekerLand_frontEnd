const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RecruiterSchema = mongoose.Schema(
  {
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
  },
  {
    toJSON: { virtuals: true },
  }
);

RecruiterSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//JWT Token
RecruiterSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_AUTH_TOKEN, {
    expiresIn: process.env.JWT_AUTH_TOKEN_EXPIRES,
  });
};

//compare password
RecruiterSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Recruiter = new mongoose.model('Recruiter', RecruiterSchema);
module.exports = Recruiter;
