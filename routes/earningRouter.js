const express = require("express");
const router = express.Router();
const earningController = require("../controllers/earningController");
const isAuth = require("../middleware/isAuth");

router.post("/", earningController.getAllEarning);
router.post("/update", earningController.updateEarning);
// router.get("/users/:userID", earningController.getUserByID);
// router.delete("/users/:userID", earningController.removeUser);

router.post("/getYearMonths", earningController.getAllYearMonth);
router.post("/addYearMonth", earningController.addYearMonth);
router.post("/updateYearMonth", earningController.updateYearMonth);
router.post("/deleteYearMonth", earningController.deleteYearMonth);

module.exports = router;
