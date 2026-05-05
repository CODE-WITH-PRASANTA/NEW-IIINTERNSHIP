const express = require("express");
const router = express.Router();

// ✅ FIX: Proper destructuring
const { upload, convertToWebp } = require("../middleware/upload");

const {
  createApplication,
  getAllApplications,
  getApplicationsByJob,
} = require("../controllers/application.controller");

/* ================= ROUTES ================= */

// ✅ CREATE (with file upload + processing)
router.post(
  "/",
  upload.single("file"),
  convertToWebp,
  createApplication
);

// GET ALL
router.get("/", getAllApplications);

// GET BY JOB
router.get("/job/:jobId", getApplicationsByJob);

module.exports = router;