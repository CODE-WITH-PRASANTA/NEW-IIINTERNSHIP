const express = require("express");
const router = express.Router();

const {
  createNotice,
  getNotices,
  deleteNotice,
  updateNotice, // ✅ added
} = require("../controllers/notice.controller");

const { upload, convertToWebp } = require("../middleware/upload");

/* ================= CREATE ================= */
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "files", maxCount: 10 },
  ]),
  convertToWebp,
  createNotice
);

/* ================= GET ================= */
router.get("/", getNotices);

/* ================= UPDATE ================= */
router.put(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "files", maxCount: 10 },
  ]),
  convertToWebp,
  updateNotice
);

/* ================= DELETE ================= */
router.delete("/:id", deleteNotice);

module.exports = router;