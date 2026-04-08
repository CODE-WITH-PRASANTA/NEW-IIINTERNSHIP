const express = require("express");
const {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse, // ✅ added
} = require("../controllers/course.controllers");

const { upload, convertToWebp } = require("../middleware/upload");

const router = express.Router();

/* ================= CREATE COURSE ================= */
router.post(
  "/",
  upload.fields([
    { name: "banner", maxCount: 1 },
    { name: "profile", maxCount: 1 },
  ]),
  convertToWebp,
  createCourse
);

/* ================= GET ================= */
router.get("/", getCourses);
router.get("/:id", getCourse);

/* ================= UPDATE ================= */
router.put(
  "/:id",
  upload.fields([
    { name: "banner", maxCount: 1 },
    { name: "profile", maxCount: 1 },
  ]),
  convertToWebp,
  updateCourse
);

/* ================= DELETE ================= */
router.delete("/:id", deleteCourse);

module.exports = router;