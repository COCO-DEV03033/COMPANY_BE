const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReferSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
		},
		user: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			require: true,
		},
		status: {
			type: String,
			require: true,
		},
		statusComment: {
			type: String,
			require: false,
		},
		referUser: {
			type: String,
			required: true,
			default: "",
		},
		completedDate: {
			type: Date,
			require: false,
			default: "",
		},
		lastUpdate: {
			type: Date,
			require: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("refer", ReferSchema);
