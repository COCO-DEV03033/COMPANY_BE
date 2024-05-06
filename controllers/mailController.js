const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

require("dotenv").config({ path: ".env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendVerifyMail = async (req, res, next) => {
  const { email, token, password } = req.body;

  try {
    const msg = {
      to: email, // Change to your recipient
      from: "noreply@selfie.cash", // Change to your verified sender
      subject: "Verify your email address",
      templateId: "d-61cd3f415350474c828863e08185ce63",
      dynamic_template_data: {
        button_url:
          "http://localhost:3010/mail-confirmed?info=" +
          token +
          "&password=" +
          password,
      },
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");

        res.status(200).json({
          message: "Email sent",
        });
      })
      .catch((error) => {
        console.error(error);
        next(error);
      });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.sendConfirmedMail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const msg = {
      to: email, // Change to your recipient
      from: "noreply@selfie.cash", // Change to your verified sender
      subject: "Your email Verified",
      templateId: "d-569661bc7b7c49a394526335bf0d0005",
      dynamic_template_data: {
        button_url: "http://localhost:3010/",
      },
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");

        res.status(200).json({
          message: "Email sent",
        });
      })
      .catch((error) => {
        console.error(error);
        next(error);
      });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.resetEmail = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const msg = {
      to: email, // Change to your recipient
      from: "noreply@selfie.cash", // Change to your verified sender
      subject: "Password had been reset!",
      templateId: "d-a2a9f57ad7fb47c7b7158b5ea3519701",
      dynamic_template_data: {
        button_url: "http://localhost:3010/login-page",
        new_password: password,
      },
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Reset Password Email sent");

        res.status(200).json({
          message: "Email sent",
        });
      })
      .catch((error) => {
        console.error(error);
        next(error);
      });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
