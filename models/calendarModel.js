const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalendarSchema = new Schema(
  {
    id: {
      type: String,
      require: true
    },
    year: {
      type: Number,
      require: false
    },
    month: {
      type: Number,
      require: false
    },
    startDate: {
      type: Date,
      require: false
    },
    endDate: {
      type: Date,
      require: false
    },
    namelist: {
      type: [String],
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

module.exports = mongoose.model("Calendar", CalendarSchema);
