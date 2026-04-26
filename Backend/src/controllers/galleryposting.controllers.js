const GalleryPosting = require("../models/galleryposting.models");
const { deleteImageFile } = require("../middleware/upload");

/* ================= ADD PHOTO ================= */
exports.addPhoto = async (req, res) => {
  try {
    const { title } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const photo = await GalleryPosting.create({
      type: "photo",
      title,
      image: req.file.path,
    });

    res.status(201).json({
      success: true,
      data: photo,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= ADD VIDEO ================= */
exports.addVideo = async (req, res) => {
  try {
    const { title, videoUrl } = req.body;

    const video = await GalleryPosting.create({
      type: "video",
      title,
      videoUrl,
    });

    res.status(201).json({
      success: true,
      data: video,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET ALL ================= */
exports.getGallery = async (req, res) => {
  try {
    const data = await GalleryPosting.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= DELETE ================= */
exports.deleteItem = async (req, res) => {
  try {
    const item = await GalleryPosting.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Not found" });
    }

    // delete image file if photo
    if (item.type === "photo") {
      deleteImageFile(item.image);
    }

    await item.deleteOne();

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};