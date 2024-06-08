const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/getProjects", projectController.getProjects);
router.post("/addProject", projectController.addProject);
router.get("/getproject/:ID", projectController.getProjectByID);
router.post("/updateProject", projectController.updateProject);
router.post("/deleteProject", projectController.deleteProject);

module.exports = router;
