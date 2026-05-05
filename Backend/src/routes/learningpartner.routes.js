const express = require("express");
const router = express.Router();

const {
  createPartner,
  getPartners,
  updatePartner,
  deletePartner,
} = require("../controllers/learningpartner.controllers");

const multer = require("multer");
const fs = require("fs");

// 📁 Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folder = "uploads/learningpartners";

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }

    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Routes
router.post("/", upload.single("logo"), createPartner);
router.get("/", getPartners);
router.put("/:id", upload.single("logo"), updatePartner);
router.delete("/:id", deletePartner);

module.exports = router;