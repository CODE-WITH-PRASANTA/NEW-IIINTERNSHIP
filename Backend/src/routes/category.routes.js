// routes/category.routes.js
const express = require("express");
const router = express.Router();

const { upload, convertToWebp } = require("../middleware/upload");
const {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} = require("../controllers/category.controller");

// CREATE (MULTIPLE IMAGES)
router.post(
  "/categories",
  upload.fields([{ name: "images", maxCount: 10 }]),
  convertToWebp,
  createCategory
);

// GET
router.get("/categories", getCategories);

router.put(
  "/categories/:id",
  upload.fields([{ name: "images", maxCount: 10 }]),
  convertToWebp,
  updateCategory
);

// DELETE
router.delete("/categories/:id", deleteCategory);

module.exports = router;