const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");
const isAuth = require("../middleware/isAuth");

router.get("/getPlans", planController.getPlans);
// router.post("/addPlan", planController.addPlan);
router.post("/savePlans", planController.savePlans);
router.post("/deletePlan", planController.deletePlan);
router.post('/getCompanyPlans', planController.getCompanyPlans)

module.exports = router;
