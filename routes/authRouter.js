const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAuth = require("../middleware/isAuth");

router.post("/register", authController.register);
router.post("/checkUserID", authController.checkUserID);
router.post("/login", authController.login);

router.get("/users", authController.getAllUser);

module.exports = router;
