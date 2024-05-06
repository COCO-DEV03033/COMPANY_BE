const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const referModel = require("../models/referModel");
const jwt = require("jsonwebtoken");

exports.getAllRefers = async (req, res, next) => {
	try {
		const allRefers = await referModel.find();
		const allUsers = await userModel.find();

		const enhancedRefers = allRefers.map((refer) => {
			const user = allUsers.find((user) => user.id === refer.id);
			const referUser = allUsers.find((user) => user.id === refer.referUser);

			if (user) {
				return {
					...refer.toObject(),
					avatar: user.avatar,
					email: user.email,
					referUserName: referUser
						? referUser.firstname + " " + referUser.lastname
						: "",
					referUserAvatar: referUser ? referUser.avatar : "",
					referUserEmail: referUser ? referUser.email : "",
				};
			}

			return refer.toObject();
		});

		res.status(200).json({
			allRefers: enhancedRefers,
		});
	} catch (error) {
		console.error("Error fetching refers and users:", error);
		next(error);
	}
};

exports.getReferrals = async (req, res, next) => {
	const { id } = req.body;

	try {
		const refers = await referModel.find({ user: id });

		res.status(200).json({
			refers: refers,
		});
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		next(err);
	}
};

exports.changeReferStatus = async (req, res, next) => {
	try {
		const { id, status, statusComment } = req.body;

		const exist = await referModel.findOne({ id: id });

		if (!exist) {
			const error = new Error("Not Exist");
			res.status(409).json({
				error: "Not Exist",
			});
			error.statusCode = 409;
			throw error;
		} else {
			const update = await referModel.findOne({ id: id }).update({
				$set: {
					status: status,
					statusComment: statusComment,
				},
			});

			res.status(200).json({
				message: "Changed Status Succssfully!",
				status: req.body,
			});
		}
	} catch (error) {
		if (!error.statusCode) {
			error.statusCode = 500;
		}
		next(error);
	}
};
