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
      type: String,
      require: false
    },
    month: {
      type: String,
      require: false
    },
    start_date: {
      type: String,
      require: false
    },
    end_date: {
      type: String,
      require: false
    },
    namelist: {
      type: [String],
      require: false
    },
    status: {
      type: Boolean,
      require: true
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
