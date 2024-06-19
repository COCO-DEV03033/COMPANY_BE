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
      require: false  // 7*9, 3*9, 8*2, 5*4, AI, NetProtect
    },
    department: {
      type: String,
      require: false   // 1, 2
    },
    team: {
      type: String,
      require: false   // 1, 2, ...
    },
    role: {
      type: String,
      require: true,
      default: 'Engineer' // superAdmin, President, Officer, Researcher, Engineer,
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
    avatar: {
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
      type: String,
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
