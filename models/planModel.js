const { isInteger } = require("core-js/core/number");
const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanSchema = new Schema(
  {
    
    amount: {
      type: Number,
      require: true
    },
    month: {
        type: Number,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
  }
);

module.exports = mongoose.model("Plan", PlanSchema);
