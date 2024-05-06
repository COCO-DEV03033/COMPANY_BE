const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const mailController = require("../controllers/mailController");
const paymentController = require("../controllers/paymentController");
const referController = require("../controllers/referController");
const isAuth = require("../middleware/isAuth");

router.post("/signin", authController.postSignin);
router.post("/login", authController.postLogin);
router.get("/user", isAuth, authController.getUser);
router.get("/user", isAuth, authController.getUserInfo);
router.post("/personal", authController.update);
router.post("/resetPass", authController.resetPass);
router.post("/legalSign", authController.legalSign);
router.post("/avatar-upload", authController.avatarUpload);
router.post("/selfie-upload", authController.selfieUpload);
router.post("/getDataFromToken", authController.getDataFromToken);
router.post("/passwordreset", authController.passwordReset);
router.post("/getSelfies", authController.getSelfies);

router.post("/sendVerifyMail", mailController.sendVerifyMail);
router.post("/sendConfirmedMail", mailController.sendConfirmedMail);
router.post("/resetEmail", mailController.resetEmail);

router.post("/paymentinfo", paymentController.register);

router.post("/referrals", referController.getReferrals);

module.exports = router;
