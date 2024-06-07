const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");
const isAuth = require("../middleware/isAuth");

router.post("/getPlans", planController.getPlans);
router.post("/addPlan", planController.addPlan);
router.post("/updatePlan", planController.updatePlan);
router.post("/deletePlan", planController.deletePlan);

module.exports = router;
