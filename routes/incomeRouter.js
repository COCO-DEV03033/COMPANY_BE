const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/incomeController");
const isAuth = require("../middleware/isAuth");

router.get("/", incomeController.getIncomes);
router.post("/update", incomeController.updateIncome);
// router.get("/users/:userID", incomeController.getUserByID);
// router.delete("/users/:userID", incomeController.removeUser);

router.get("/yearMonths", incomeController.getYearMonths);
router.post("/addYearMonth", incomeController.storeYearMonth);
router.post("/updateYearMonth", incomeController.updateYearMonth);
router.post("/deleteYearMonth", incomeController.deleteYearMonth);


router.post("/overView", incomeController.getOverViews);
router.get("/totalSums", incomeController.getTotalSums);

module.exports = router;
