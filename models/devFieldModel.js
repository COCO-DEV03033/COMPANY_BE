const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devFieldSchema = new Schema(
  {
    id: {
      type: String,
      require: true
    },
    field: {
      type: String,
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

module.exports = mongoose.model("devField", devFieldSchema);
