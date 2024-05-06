const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentDetailSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      require: true
    },
    account: {
      type: String,
      require: true
    },
    country: {
      type: String,
      require: false
    },
    currency: {
      type: String,
      require: true
    },
    status: {
      type: String,
      require: true
    },
    reviewDate: {
      type: String,
      require: false
    },
    reviewer: {
      type: String,
      require: false
    },
    lastUpdate: {
      type: Date,
      require: false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PaymentDetail", PaymentDetailSchema);
