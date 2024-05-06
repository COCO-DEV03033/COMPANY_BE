const express = require("express");
const router = express.Router();
const managementController = require("../controllers/managementController");
const referController = require("../controllers/referController");

router.get("/allUsers", managementController.getAllUser);
router.get("/allSelfies", managementController.getAllSelfies);
router.get("/allTrxs", managementController.getAllTrxs);

router.get("/pendingTrxs", managementController.getPendingTrxs);

router.post("/getUser", managementController.getUser);
router.post("/getTrxs", managementController.getTrxs);

router.post("/changeRole", managementController.changeRole);
router.post("/changeStatus", managementController.changeStatus);
router.post("/changeInfoStatus", managementController.changeInfoStatus);
router.post("/changePaymentStatus", managementController.changePaymentStatus);
router.post("/changeIDStatus", managementController.changeIDStatus);
router.post("/changeLegalDocStatus", managementController.changeLegalDocStatus);
router.post("/changeSelfieStatus", managementController.changeSelfieStatus);

router.get("/allRefers", referController.getAllRefers);
router.post("/changeReferStatus", referController.changeReferStatus);

module.exports = router;
