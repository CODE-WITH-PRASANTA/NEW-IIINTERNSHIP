const express = require("express");
const {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
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

/* ================= DELETE ================= */
router.delete("/:id", deleteCourse);

module.exports = router;