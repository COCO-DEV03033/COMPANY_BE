const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      require: false
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    devField: {
      type: String,
      require: false
    },
    requiredSkills: {
      type: [String],
      require: false
    },    
    description: {
      type: String,
      require: false
    },
    clientLocation: {
      type: String,
      require: false
    },
    type: {
      type: String,
      require: false
    },
    potentialBudget: {
      type: Number,
      require: false
    },
    paymentDate: {
      type: Date,
      require: false
    },
    siteID: {
      type: String,
      require: false
    },
    progress: {
      type: String,
      require:false
    },
    status: {
      type: String,
      require:false
    },
    note: {
      type: String,
      require:false
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

module.exports = mongoose.model("Project", ProjectSchema);
