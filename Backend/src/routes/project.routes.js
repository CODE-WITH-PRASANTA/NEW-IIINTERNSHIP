const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middleware/upload");
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  toggleVisibility,
} = require("../controllers/project.controllers");

// CREATE
router.post(
  "/",
  upload.single("image"),
  convertToWebp,
  createProject
);
// GET ALL
router.get("/", getProjects);

// UPDATE
router.put("/:id", upload.single("image"), updateProject);

// DELETE
router.delete("/:id", deleteProject);

// TOGGLE
router.patch("/:id/toggle", toggleVisibility);

module.exports = router;