const express = require("express");
const router = express.Router();

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  toggleVisibility,
} = require("../controllers/project.controllers");

const { upload } = require("../middleware/upload");

// ✅ SINGLE image upload (IMPORTANT)
router.post("/projects", upload.single("image"), createProject);
router.get("/projects", getProjects);
router.put("/projects/:id", upload.single("image"), updateProject);
router.delete("/projects/:id", deleteProject);
router.patch("/projects/:id/toggle", toggleVisibility);

module.exports = router;