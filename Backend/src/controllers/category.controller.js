// controllers/category.controller.js
const Category = require("../models/category.model");
const { deleteImageFile } = require("../middleware/upload");

// CREATE CATEGORY
exports.createCategory = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title required" });
    }

    const images = req.body.images || [];

    const newCategory = new Category({
      title,
      images,
    });

    await newCategory.save();

    res.status(201).json({
      success: true,
      message: "Category created",
      data: newCategory,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE CATEGORY
exports.updateCategory = async (req, res) => {
  try {
    const { title } = req.body;

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // ✅ update title
    if (title) {
      category.title = title;
    }

    // ===============================
    // ✅ HANDLE IMAGES (IMPORTANT)
    // ===============================

    let updatedImages = [];

    // 1️⃣ Existing images (from frontend)
    let existingImages = req.body.existingImages || [];

    if (typeof existingImages === "string") {
      existingImages = [existingImages];
    }

    // keep old images
    updatedImages = [...existingImages];

    // 2️⃣ New uploaded images
    if (req.body.images && req.body.images.length > 0) {
      updatedImages = [...updatedImages, ...req.body.images];
    }

    // 3️⃣ Delete removed images
    category.images.forEach((img) => {
      if (!updatedImages.includes(img)) {
        deleteImageFile(img);
      }
    });

    // 4️⃣ Save final images
    category.images = updatedImages;

    await category.save();

    res.json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
exports.getCategories = async (req, res) => {
  try {
    // console.log("🔥 GET /api/categories HIT");

    const data = await Category.find().sort({ createdAt: -1 });

    // console.log("DATA:", data);

    res.json({ success: true, data });
  } catch (err) {
    console.error("❌ GET ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

// DELETE
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Not found" });
    }

    // delete images
    category.images.forEach((img) => deleteImageFile(img));

    await Category.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
