const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IncomeSchema = new Schema(
  {
    id:{
      type: String,
      require: true
    },
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    date: {
      type: Date,
      require: true
    },
    cost: {
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

module.exports = mongoose.model("Income", IncomeSchema);
