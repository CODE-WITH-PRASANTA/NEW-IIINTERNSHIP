const express = require("express");
const router = express.Router();

const {
  addPhoto,
  addVideo,
  getGallery,
  deleteItem,
} = require("../controllers/galleryposting.controllers");

const { upload, convertToWebp } = require("../middleware/upload");

/* ================= PHOTO ================= */
router.post(
  "/photo",
  upload.single("image"),
  convertToWebp,
  addPhoto
);

/* ================= VIDEO ================= */
router.post("/video", addVideo);

/* ================= GET ================= */
router.get("/", getGallery);

/* ================= DELETE ================= */
router.delete("/:id", deleteItem);

module.exports = router;