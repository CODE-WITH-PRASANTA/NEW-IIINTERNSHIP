const Course = require("../models/course.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
const createCourse = async (req, res) => {
  try {
    const data = { ...req.body };

    // ✅ FILE PATHS FROM MULTER
    if (req.files?.banner) {
      data.banner = req.files.banner[0].path;
    }

    if (req.files?.profile) {
      data.profile = req.files.profile[0].path;
    }

    const course = new Course(data);
    const saved = await course.save();

    res.status(201).json({
      success: true,
      data: saved,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ALL ================= */
const getCourses = async (req, res) => {
  try {
    const data = await Course.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET SINGLE ================= */
const getCourse = async (req, res) => {
  try {
    const data = await Course.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(404).json({ message: "Invalid ID" });
  }
};

/* ================= DELETE ================= */
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Not found" });
    }

    // ✅ DELETE FILES
    deleteImageFile(course.banner);
    deleteImageFile(course.profile);

    await course.deleteOne();

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
};