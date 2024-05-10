const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAuth = require("../middleware/isAuth");

router.post("/signup", authController.postSignup);
router.post("/login", authController.postLogin);
router.post("/personal", authController.update);
router.post("/resetPass", authController.resetPass);
router.post("/passwordreset", authController.passwordReset);

router.post("/register", authController.register);

module.exports = router;
