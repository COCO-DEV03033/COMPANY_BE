const transactionModel = require("../models/transactionModel");
const userModel = require("../models/userModel");
const selfieModel = require("../models/selfieModel");
const referModel = require("../models/referModel");
const sgMail = require("@sendgrid/mail");

require("dotenv").config({ path: ".env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.getAllUser = async (req, res, next) => {
  const allUser = await userModel.find();
  res.status(200).json({
    allUser: allUser,
  });
};

exports.getAllSelfies = async (req, res, next) => {
  const allSelfie = await selfieModel.find();
  const allUser = await userModel.find();
  const newAllSelfie = allSelfie.map((indiSelfie) => {
    console.log("....................................:", indiSelfie.owner);
    const userId = indiSelfie.owner;
    const selfieUser = allUser.find((user) => userId === user.id);
    const userAvatar = selfieUser.avatar;
    // console.log("....................................:", selfieUser);
    return { ...indiSelfie.toObject(), userAvatar };
  });
  res.status(200).json({
    allSelfie: newAllSelfie,
  });
};

exports.getAllTrxs = async (req, res, next) => {
  const allTransactions = await transactionModel.find();
  res.status(200).json({
    allTransactions: allTransactions,
  });
};

exports.getPendingTrxs = async (req, res, next) => {
  const pendingTransactions = await transactionModel.find({
    paymentStatus: "Pending",
  });
  res.status(200).json({
    pendingTransactions: pendingTransactions,
  });
};

exports.getTrxs = async (req, res, next) => {
  const { userId } = req.body;
  const transactions = await transactionModel.find({ userId });
  console.log(transactions);
  res.status(200).json({
    transactions: transactions,
  });
};

exports.getUser = async (req, res, next) => {
  const { id } = req.body;
  const user = await userModel.findOne({ referNumber: id });
  res.status(200).json({
    user: user,
  });
};

exports.changeRole = async (req, res, next) => {
  try {
    const { email } = req.body;

    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      const error = new Error("Not Exist");
      res.status(409).json({
        error: "Not Exist",
      });
      error.statusCode = 409;
      throw error;
    } else {
      const changedRole = req.body.role;

      const update = await userModel.findOne({ email: email }).update({
        $set: {
          role: changedRole,
        },
      });

      res.status(200).json({
        message: "Changed Role Succssfully!",
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.changeStatus = async (req, res, next) => {
  try {
    const { email } = req.body;

    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      const error = new Error("Not Exist");
      res.status(409).json({
        error: "Not Exist",
      });
      error.statusCode = 409;
      throw error;
    } else {
      const changedStatus = req.body.accountStatus;

      const update = await userModel.findOne({ email: email }).update({
        $set: {
          accountStatus: changedStatus,
        },
      });

      res.status(200).json({
        message: "Changed Status Succssfully!",
        status: changedStatus,
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.changeInfoStatus = async (req, res, next) => {
  try {
    const {
      email,
      firstname,
      lastname,
      birthday,
      country,
      emailStatus,
      emailStatusComment,
    } = req.body;

    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      const error = new Error("user not exist");
      res.status(409).json({
        error: error,
      });
      error.statusCode = 409;
      throw error;
    } else {
      const update = await userModel.findOne({ email: email }).update({
        $set: {
          firstname: firstname,
          lastname: lastname,
          birthday: birthday,
          location: country,
          emailStatus: emailStatus,
          emailStatusComment: emailStatusComment,
        },
      });

      res.status(200).json({
        message: "Changed Personal Info Status Succssfully!",
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

exports.changePaymentStatus = async (req, res, next) => {
  try {
    const { email, paymentStatus, paymentStatusComment, paymentDetail } =
      req.body;

    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      const error = new Error("user not exist");
      res.status(409).json({
        error: error,
      });
      error.statusCode = 409;
      throw error;
    } else {
      const update = await userModel.findOne({ email: email }).update({
        $set: {
          paymentStatus: paymentStatus,
          paymentStatusComment: paymentStatusComment,
          paymentDetail: paymentDetail,
        },
      });

      res.status(200).json({
        message: "Changed Personal Info Status Succssfully!",
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

exports.changeIDStatus = async (req, res, next) => {
  try {
    const { email, IDStatus, IDStatusComment, IDCardUrl } = req.body;

    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      const error = new Error("user not exist");
      res.status(409).json({
        error: error,
      });
      error.statusCode = 409;
      throw error;
    } else {
      const update = await userModel.findOne({ email: email }).update({
        $set: {
          IDStatus: IDStatus,
          IDStatusComment: IDStatusComment,
          IDCardUrl: IDCardUrl,
        },
      });

      res.status(200).json({
        message: "Changed Personal Info Status Succssfully!",
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

exports.changeLegalDocStatus = async (req, res, next) => {
  try {
    const { email, legalDocStatus, legalDocStatusComment, legalDocUrl } =
      req.body;

    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      const error = new Error("user not exist");
      res.status(409).json({
        error: error,
      });
      error.statusCode = 409;
      throw error;
    } else {
      const update = await userModel.findOne({ email: email }).update({
        $set: {
          legalDocStatus: legalDocStatus,
          legalDocStatusComment: legalDocStatusComment,
          legalDocUrl: legalDocUrl,
        },
      });

      res.status(200).json({
        message: "Changed Personal Info Status Succssfully!",
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

exports.changeSelfieStatus = async (req, res, next) => {
  try {
    console.log("req.body:", req.body);
    const { owner, _id, status } = req.body;
    console.log("aaaaaaaaaaaaaaaaaaaaaaa", owner);

    const exist = await selfieModel.findOne({
      owner: owner,
    });

    if (!exist) {
      const error = new Error("Not Name Exist");
      res.status(409).json({
        error: "Not Exist",
      });
      error.statusCode = 409;
      throw error;
    } else {
      const changedSelfieStatus = status;
      console.log("changing status: ", changedSelfieStatus);

      const update = await selfieModel
        .findOne({
          _id: _id,
        })
        .update({
          $set: {
            status: changedSelfieStatus,
          },
        });

      res.status(200).json({
        message: "Changed Status Succssfully!",
        status: changedSelfieStatus,
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
