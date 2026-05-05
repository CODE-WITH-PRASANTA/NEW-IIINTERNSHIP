const Testimonial = require("../models/testimonial.models");

// ✅ CREATE
exports.createTestimonial = async (req, res) => {
  try {
    const { name, designation, rating, feedback, location } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image required" });
    }

    const testimonial = new Testimonial({
      name,
      designation,
      rating,
      feedback,
      location,
      image: `/uploads/testimonials/${req.file.filename}`,
    });

    await testimonial.save();

    res.status(201).json({
      success: true,
      message: "Testimonial added",
      data: testimonial,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET ALL
exports.getTestimonials = async (req, res) => {
  try {
    const data = await Testimonial.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ UPDATE
exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, designation, rating, feedback, location } = req.body;

    let updateData = {
      name,
      designation,
      rating,
      feedback,
      location,
    };

    if (req.file) {
      updateData.image = `/uploads/testimonials/${req.file.filename}`;
    }

    const updated = await Testimonial.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      success: true,
      message: "Updated successfully",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ DELETE
exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Testimonial.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};