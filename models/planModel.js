const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema(
  {
    id: {
      type: String,
      require: true
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    year: {
      type: Number,
      require: false
    },
    month: {
      type: Number,
      require: false
    },
    amount: {
      type: Number,
      require: false
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

module.exports = mongoose.model("Plan", PlanSchema);
