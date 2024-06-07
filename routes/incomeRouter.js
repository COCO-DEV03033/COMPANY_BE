const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");
const isAuth = require("../middleware/isAuth");

router.post("/", incomeController.getIncomes);
router.post("/update", incomeController.updateIncome);
// router.get("/users/:userID", incomeController.getUserByID);
// router.delete("/users/:userID", incomeController.removeUser);

router.post("/getYearMonths", incomeController.getYearMonths);
router.post("/addYearMonth", incomeController.storeYearMonth);
router.post("/updateYearMonth", incomeController.updateYearMonth);
router.post("/deleteYearMonth", incomeController.deleteYearMonth);

module.exports = router;
