const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.get("/", projectController.getProjects);
router.post("/", projectController.addProject);
router.get("/:id", projectController.getProjectByID);
router.post("/:id", projectController.updateProject);
router.delete("/", projectController.deleteProject);


module.exports = router;
