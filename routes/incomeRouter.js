const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");
const isAuth = require("../middleware/isAuth");

router.post("/", incomeController.getAllEarning);
router.post("/update", incomeController.updateEarning);
// router.get("/users/:userID", incomeController.getUserByID);
// router.delete("/users/:userID", incomeController.removeUser);

router.post("/getYearMonths", incomeController.getAllYearMonth);
router.post("/addYearMonth", incomeController.addYearMonth);
router.post("/updateYearMonth", incomeController.updateYearMonth);
router.post("/deleteYearMonth", incomeController.deleteYearMonth);

module.exports = router;
