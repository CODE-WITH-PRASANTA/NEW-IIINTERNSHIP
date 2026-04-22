const express = require("express");
const router = express.Router();

const {
  upload,
  convertToWebp,
} = require('../middleware/upload')

const {
  createInternship,
  getInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
} = require("../controllers/virtualInternship.controller");

const uploadFields = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "documents", maxCount: 5 },
]);

router.post("/", uploadFields, convertToWebp, createInternship);
router.get("/", getInternships);
router.get("/:id", getInternshipById);
router.put("/:id", uploadFields, convertToWebp, updateInternship);
router.delete("/:id", deleteInternship);

module.exports = router;