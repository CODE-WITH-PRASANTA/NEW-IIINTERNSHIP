const express = require("express");
const router = express.Router();

const {
  createMentor,
  getMentors,
  updateMentor,
  deleteMentor,
} = require("../controllers/addmentor.controller");

const multer = require("multer");

// 📁 Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Routes
router.post("/", upload.single("image"), createMentor);
router.get("/", getMentors);
router.put("/:id", upload.single("image"), updateMentor);
router.delete("/:id", deleteMentor);

module.exports = router;