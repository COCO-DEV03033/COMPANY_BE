const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: false,
    },
    lastname: {
      type: String,
      required: false,
    },
    birthday: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      require: false,
    },
    filledInfo: {
      type: Boolean,
      require: false,
    },
    role: {
      type: Number,
      require: true,
    },
    IDStatus: {
      type: String,
      require: false,
    },
    IDCardUrl: {
      type: String,
      required: false,
    },
    IDStatusComment: {
      type: String,
      require: false,
    },
    paymentStatus: {
      type: String,
      require: false,
    },
    paymentDetail: {
      tether: {
        type: String,
        required: false,
      },
      payoneer: {
        type: String,
        required: false,
      },
      cepa: {
        type: String,
        required: false,
      },
      require: false,
    },
    paymentStatusComment: {
      type: String,
      require: false,
    },
    emailStatus: {
      type: Boolean,
      require: false,
    },
    emailStatusComment: {
      type: String,
      require: false,
    },
    legalDocStatus: {
      type: Boolean,
      require: false,
    },
    legalDocStatusComment: {
      type: String,
      require: false,
    },
    legalDocUrl: {
      type: String,
      require: false,
    },
    referUser: {
      type: String,
      require: false,
    },
    referNumber: {
      type: Number,
      require: false,
      default: 0,
    },
    accountStatus: {
      type: String,
      require: false,
    },
    registerDate: {
      type: String,
      require: false,
    },
    balance: {
      type: Number,
      require: false,
    },
    avatar: {
      type: String,
      require: true,
      default: "",
    },
    legalSigned: {
      type: Boolean,
      require: false,
    },
    signName: {
      type: String,
      require: false,
    },
    legalDate: {
      type: String,
      require: false,
    },
    lastUpdate: {
      type: Date,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
