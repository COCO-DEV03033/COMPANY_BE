const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const paymentModel = require("../models/paymentModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {

  const user = req.body.info.user;
  const paymentInfo = req.body.info;
  
  try {
    const result = await userModel.findOne({ _id: user._id }).update({ $set: { paymentStatus: "Pending" } });

    const exist = await paymentModel.findOne({ user: user._id });

    if (exist) {
      const updateresult = await paymentModel.findOne({ user: user._id }).updateMany({
        $set: {
          user: user._id,
          type: paymentInfo.paymentMethodName,
          account: paymentInfo.paymentAddress,
          country: paymentInfo.country | "",
          currency: paymentInfo.currency,
          status: "Pending",
          reviewDate: new Date(),
          reviewer: ""
        }
      })

      res.status(200).json({
        message: "payment detail updated!",
        detail: updateresult
      })
    }
    else {
      const newPaymentDetail = new paymentModel({
        user: user._id,
        type: paymentInfo.paymentMethodName,
        account: paymentInfo.paymentAddress,
        country: paymentInfo.country | "",
        currency: paymentInfo.currency,
        status: "Pending",
        reviewDate: new Date(),
        reviewer: ""
      })

      const saveResult = await newPaymentDetail.save()

      res.status(200).json({
        message: "payment detail saved!",
        detail: saveResult
      })

      console.log("new Payment detail registered for user:" + user._id)
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

var loadedUser;
exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });

    if (!user) {
      const error = new Error("user with this email not found!");
      error.statusCode = 401;
      throw error;
    }
    loadedUser = user;

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      const error = new Error("password is not match!");
      error.statusCode = 401;
      throw error;
    }
    else {
      const token = jwt.sign({ email: loadedUser.email }, "expressnuxtsecret", {
        expiresIn: "60m",
      });
      res.status(200).json({ token: token, emailStatus: loadedUser.emailStatus });
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const email = loadedUser.email
    const result = await userModel.findOne({ email: email }).updateMany({
      $set: {
        firstname: req.body.info.firstName,
        lastname: req.body.info.lastName,
        filledInfo: true,
        birth: req.body.info.birth,
        country: req.body.info.country
      }
    });
    
    res.status(200).json({
      message: "User info saved"
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getUser = (req, res, next) => {
  res.status(200).json({
    user: loadedUser,
  });
};
