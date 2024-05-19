const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const isAuth = require("../middleware/isAuth");

router.post("/register", authController.register);
router.post("/checkUserID", authController.checkUserID);
router.post("/login", authController.login);

router.get("/users", authController.getAllUser);
router.get("/users/:userID", authController.getUserByID);
router.delete("/users/:userID", authController.removeUser);
router.post("/updateUser", authController.updateUser);
router.put("/usersApprove/:userID", authController.approveUser);
router.put("/usersReject/:userID", authController.rejectUser);
router.update

module.exports = router;
