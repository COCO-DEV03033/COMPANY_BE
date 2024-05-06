const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SelfieSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    require: true,
  },
  uploaded: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    require: true,
    default: "pending",
  },
  reviewer: {
    type: String,
    require: false,
  },
  reason: {
    type: String,
    require: false,
  },
  description: {
    type: String,
    require: false,
  },
  title: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("Selfie", SelfieSchema);
