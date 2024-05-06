const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
const referModel = require("../models/referModel");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const sgMail = require("@sendgrid/mail");
const { jwtDecode } = require("jwt-decode");
// require("core-js/stable/atob");

const selfieModel = require("../models/selfieModel");
const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const SITE_URL = "http://localhost:5000/";

exports.postSignin = async (req, res, next) => {
  const { email, password, referUser } = req.body;

  try {
    const exsitUser = await userModel.findOne({ email: email });
    if (exsitUser) {
      const error = new Error(
        "Eamil already exist, please pick another email!"
      );
      res.status(409).json({
        error: "Eamil already exist, please pick another email! ",
      });
      error.statusCode = 409;
      throw error;
    }
    if (referUser != "")
      var exitUser = await userModel.findOne({ _id: referUser });

    const hashedPassword = await bcrypt.hash(password, 12);
    const id = Date.now();

    const user = new userModel({
      id: id,
      email: email,
      password: hashedPassword,
      emailStatus: false,
      filledInfo: false,
      role: 0,
      paymentStatus: "Empty",
      IDStatus: "Empty",
      referUser: referUser,
    });

    await user.save(async (err, result) => {
      console.log("result", result, err);
      if (result) {
        if (exitUser) {
          const refer = new referModel({
            user: exitUser._id,
            email: email,
            status: "Pending",
            to: result._id,
            completedDate: "",
          });

          await refer.save();

          await userModel.findOne({ _id: referUser }).update({
            $set: { referNumber: exitUser.referNumber + 1 },
          });
        }
        // const msg = {
        //   to: email, // Change to your recipient
        //   from: 'noreply@selfie.cash', // Change to your verified sender
        //   subject: 'Verify your email address',
        //   templateId: "d-61cd3f415350474c828863e08185ce63",
        //   dynamic_template_data: {
        //     button_url: "http://localhost:3010"
        //   }
        // }
        // sgMail
        //   .send(msg)
        //   .then(() => {
        //     console.log('Email sent')
        //   })
        //   .catch((error) => {
        //     console.error(error)
        //   })

        res.status(200).json({
          message: "User created",
          user: { id: result._id, email: result.email },
        });
      }
    });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

var loadedUser;
exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("email: ", email);
  console.log("password: ", password);

  try {
    const user = await userModel.findOne({ email: email });
    console.log("user done; ", user);

    if (!user) {
      const error = new Error("user with this email not found!");
      error.statusCode = 401;
      throw error;
    }
    loadedUser = user;

    const comparePassword = await bcrypt.compare(password, user.password);
    // const comparePassword = password === user.password;

    if (!comparePassword) {
      const error = new Error("password is not match!");
      error.statusCode = 401;
      throw error;
    } else {
      const token = jwt.sign({ email: loadedUser.email }, "expressnuxtsecret", {
        expiresIn: "60m",
      });

      const referrals = await referModel.find({ user: user._id }).lean();

      res.status(200).json({
        token: token,
        emailStatus: loadedUser.emailStatus,
        referrals: referrals,
      });
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
    const email = loadedUser.email;
    const result = await userModel.findOne({ email: email }).updateMany({
      $set: {
        firstname: req.body.info.firstName,
        lastname: req.body.info.lastName,
        filledInfo: true,
        birthday: req.body.info.birth,
        country: req.body.info.country,
      },
    });

    res.status(200).json({
      message: "User info saved",
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.resetPass = async (req, res, next) => {
  try {
    const userInfo = req.body.info;

    if (userInfo.email != userInfo.oldEmail) {
      const existUser = await userModel.findOne({ email: userInfo.email });

      if (existUser) {
        const error = new Error(
          "Eamil already exist, please pick another email!"
        );
        res.status(409).json({
          error: "Eamil already exist, please pick another email! ",
        });
        error.statusCode = 409;
        throw error;
      }
    } else {
      const comparePassword = await bcrypt.compare(
        userInfo.password,
        loadedUser.password
      );

      if (!comparePassword) {
        const error = new Error("password is not match!");
        error.statusCode = 401;
        throw error;
      } else {
        const hashedPassword = await bcrypt.hash(userInfo.newPassword, 12);

        const result = await userModel
          .findOne({ email: userInfo.oldEmail })
          .updateMany({
            $set: {
              email: userInfo.email,
              password: hashedPassword,
            },
          });

        if (result.ok) {
          loadedUser.email = userInfo.email;
          loadedUser.password = hashedPassword;
        }

        const token = jwt.sign({ email: userInfo.email }, "expressnuxtsecret", {
          expiresIn: "60m",
        });

        res.status(200).json({
          token: token,
          email: userInfo.email,
          password: hashedPassword,
        });
      }
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.avatarUpload = async (req, res, next) => {
  const userId = req.body.user;

  try {
    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" });
    }
    // accessing the file
    const myFile = req.files.file;
    console.log(
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      myFile
    );

    //  mv() method places the file inside public directory
    myFile.mv(
      `${__dirname}/../public/avatar/${myFile.name}`,
      async function (err) {
        let avatarURL = "";
        console.log("the error is: ", err);
        if (err) {
          return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name

        await userModel.findOne({ _id: userId }).update({
          $set: {
            avatar: SITE_URL + "avatar/" + myFile.name,
          },
        });

        await userModel.findOne({ _id: userId }).then((res) => {
          console.log("bbbbbbbbbbbbb", res.avatar);
          avatarURL = res.avatar;
          loadedUser.avatar = avatarURL;
          // res.send({ name: myFile.name, path: avatarURL });
        });

        return res.status(200).send({ name: myFile.name, path: avatarURL });
      }
    );
  } catch (error) {}
};

exports.selfieUpload = async (req, res, next) => {
  console.log("ddddddddddddddddddd", req.body);
  let selfie;
  let selfieCount;
  let selfieItems;

  const { userId, price, description, type, title, index } = req.body;
  const myFile = req.files.file;

  try {
    const user = await userModel.findOne({ _id: userId });
    const selfiesCount = await selfieModel.countDocuments({ owner: user.id });
    console.log("selfiesCount:", selfiesCount);
    console.log("index", index);
    console.log("type of index:", typeof index);
    console.log("ture or false", selfiesCount < index + 1);
    if (selfiesCount < Number(index) + 1) {
      console.log("creating");
      const newSelfie = new selfieModel({
        owner: user.id,
        price: price,
        type: type,
        description: description,
        title: title,
        url: SITE_URL + "selfie/" + myFile.name,
      });
      await newSelfie.save();
      selfie = newSelfie;
    } else {
      console.log("updating");
      const selfies = await selfieModel.find({ owner: user.id });
      console.log("selfies:", selfies);
      const selfieToUpdate = selfies[index];
      console.log("selfieToUpdate:", selfieToUpdate);
      selfieToUpdate.price = price;
      selfieToUpdate.type = type;
      selfieToUpdate.description = description;
      selfieToUpdate.title = title;
      selfieToUpdate.url = SITE_URL + "selfie/" + myFile.name;
      console.log("sselfieToUpdate.price:", selfieToUpdate);
      await selfieToUpdate.save();
    }
    myFile.mv(
      `${__dirname}/../public/selfie/${myFile.name}`,
      async function (err) {
        console.log("the error is: ", err);
        if (err) {
          return res.status(500).send({ msg: "Error occured" });
        }
        return res.status(200).send({ selfie: selfie });
      }
    );

    //  mv() method places the file inside public directory
  } catch (error) {}
};

exports.getSelfies = async (req, res, next) => {
  const userId = req.body.userId;
  let allSelfies = [];
  console.log("eeeeeeeeeeeeeeeeeee", userId);
  try {
    let selfieId = "";
    await userModel.findOne({ _id: userId }).then((res) => {
      selfieId = res.id;
    });
    await selfieModel.find({ owner: selfieId }).then((res) => {
      allSelfies = [...res];
    });
    return res.status(200).send({ allSelfies: allSelfies });
  } catch (error) {}
};

exports.legalSign = async (req, res, next) => {
  try {
    const legalInfo = req.body.info;
    var legalState = true;

    if (!legalState) {
      const error = new Error("Name is not mached!");
      error.statusCode = 401;
      throw error;
    }
    const result = await userModel
      .findOne({ email: legalInfo.email })
      .updateMany({
        $set: {
          legalSigned: true,
          signName: legalInfo.name,
          legalDate: legalInfo.date,
        },
      });

    res.status(200).json({ message: "Legal Signed successfully!" });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getDataFromToken = async (req, res, next) => {
  try {
    const token = req.body.token;

    let decode = jwtDecode(token);

    const updateUserStatus = await userModel
      .findOne({ email: decode.email })
      .update({
        $set: {
          emailStatus: true,
        },
      });

    const user = await userModel.findOne({ email: decode.email });

    res.status(200).json({ user: user });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getUser = (req, res, next) => {
  res.status(200).json({
    user: loadedUser,
  });
};

exports.passwordReset = async (req, res, next) => {
  try {
    const { email } = req.body;

    const exist = await userModel.findOne({ email: email });

    if (!exist) {
      const error = new Error(
        "Email dones't registered, please use registered email!"
      );
      res.status(409).json({
        error: "Email dones't registered, please use registered email!",
      });
      error.statusCode = 409;
      throw error;
    } else {
      var randomstring = Math.random().toString(36).slice(-12);

      const hashedPassword = await bcrypt.hash(randomstring, 12);

      const update = await userModel.findOne({ email: email }).update({
        $set: {
          password: hashedPassword,
        },
      });

      res.status(200).json({
        message: "Password reseted successfully, Please check your inbox",
        password: randomstring,
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.getUserInfo = (req, res, next) => {};

exports.getAllUser = async (req, res, next) => {
  const allUser = await userModel.find();
  res.status(200).json({
    allUser: allUser,
  });
};
