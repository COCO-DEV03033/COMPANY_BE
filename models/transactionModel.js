const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
	{
		userId: {
			type: Number,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
		date: {
			type: String,
			require: false,
		},
		amount: {
			type: String,
			required: true,
		},
		paymentType: {
			type: String,
			required: true,
		},
		paymentStatus: {
			type: String,
			require: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("transactions", TransactionSchema);
