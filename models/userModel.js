const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userID: {
      type: String,
      require: true
    },
    status: {
      type: Boolean,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: false
    },
    organization: {
      type: String,
      require: false
    },
    role: {
      type: String,
      require: true,
      default: 'engineer'
    },
    age: {
      type: Number,
      require: false
    },
    gender: {
      type: String,
      require: false
    },
    dob: {
      type: Date,
      require: false
    },
    enter_date: {
      type: Date,
      require: false
    },
    university: {
      type: String,
      require: false
    },
    major_subject: {
      type: String,
      require: false
    },
    old_job: {
      type: String,
      require: false,
    },
    tech_field: {
      type: String,
      require: false,
    },
    main_skill: {
      type: String,
      require: false,
    },
    tech_level: {
      type: Number,
      require: false,
    },
    lang_level: {
      type: String,
      require: false,
    },
    special: {
      type: String,
      require: false,
    },
    overview: {
      type: String,
      require: false,
    },
    created_at: {
      type: Date,
      require: false,
    },
    updated_at: {
      type: Date,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
