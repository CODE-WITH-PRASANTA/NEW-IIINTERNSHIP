const Course = require("../models/course.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
const createCourse = async (req, res) => {
  try {
    const data = { ...req.body };

    // ✅ SAVE FILE PATH (CONSISTENT)
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

/* ================= UPDATE ================= */
const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    console.log("FILES:", req.files);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const updateData = { ...req.body };

    // ✅ UPDATE BANNER
    if (req.files?.banner) {
      // 🔥 delete old image
      if (course.banner) {
        deleteImageFile(course.banner);
      }

      // 🔥 save new path (same as create)
      updateData.banner = req.files.banner[0].path;
    }

    // ✅ UPDATE PROFILE
    if (req.files?.profile) {
      if (course.profile) {
        deleteImageFile(course.profile);
      }

      updateData.profile = req.files.profile[0].path;
    }

    const updated = await Course.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json({
      success: true,
      message: "Course updated successfully",
      data: updated,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
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
    if (course.banner) deleteImageFile(course.banner);
    if (course.profile) deleteImageFile(course.profile);

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
  updateCourse,
};
