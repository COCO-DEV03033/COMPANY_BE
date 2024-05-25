const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EarningSchema = new Schema(
  {
    id:{
      type: String,
      require: true
    },
    user_id: {
      type: String,
      require: true
    },
    calendar_id: {
      type: String,
      require: true
    },
    plan: {
      type: Number,
      require: false
    },
    day1: {
      type: Number,
      require: false
    },
    day2: {
      type: Number,
      require: false
    },
    day3: {
      type: Number,
      require: false
    },
    day4: {
      type: Number,
      require: false
    },
    day5: {
      type: Number,
      require: false
    },
    day6: {
      type: Number,
      require: false
    },
    day7: {
      type: Number,
      require: false
    },
    day8: {
      type: Number,
      require: false
    },
    day9: {
      type: Number,
      require: false
    },
    day10: {
      type: Number,
      require: false
    },
    day11: {
      type: Number,
      require: false
    },
    day12: {
      type: Number,
      require: false
    },
    day13: {
      type: Number,
      require: false
    },
    day14: {
      type: Number,
      require: false
    },
    day15: {
      type: Number,
      require: false
    },
    day16: {
      type: Number,
      require: false
    },
    day17: {
      type: Number,
      require: false
    },
    day18: {
      type: Number,
      require: false
    },
    day19: {
      type: Number,
      require: false
    },
    day20: {
      type: Number,
      require: false
    },
    day21: {
      type: Number,
      require: false
    },
    day22: {
      type: Number,
      require: false
    },
    day23: {
      type: Number,
      require: false
    },
    day24: {
      type: Number,
      require: false
    },
    day25: {
      type: Number,
      require: false
    },
    day26: {
      type: Number,
      require: false
    },
    day27: {
      type: Number,
      require: false
    },
    day28: {
      type: Number,
      require: false
    },
    day29: {
      type: Number,
      require: false
    },
    day30: {
      type: Number,
      require: false
    },
    day31: {
      type: Number,
      require: false
    },
    day32: {
      type: Number,
      require: false
    },
    day33: {
      type: Number,
      require: false
    },
    day34: {
      type: Number,
      require: false
    },
    day35: {
      type: Number,
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

module.exports = mongoose.model("Earning", EarningSchema);
