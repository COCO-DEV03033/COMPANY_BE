const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema(
  {
    id: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: false
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    devFieldID: {
      type: Schema.Types.ObjectId,
      ref: 'devFields'
    },
    requiredSkill: {
      type: Schema.Types.ObjectId,
      ref: 'skills'
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
      type: Schema.Types.ObjectId,
      ref: 'sites'
    },
    progress: {
      type: Number,
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
