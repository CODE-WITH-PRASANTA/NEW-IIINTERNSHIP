const Mentor = require("../models/addmentor.models");

// ✅ Create Mentor
exports.createMentor = async (req, res) => {
  try {
    const { name, designation } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const mentor = new Mentor({
      name,
      designation,
      image: `/uploads/${req.file.filename}`,
    });

    await mentor.save();

    res.status(201).json({
      success: true,
      message: "Mentor added successfully",
      data: mentor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Mentors
exports.getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: mentors,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Mentor
exports.updateMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, designation } = req.body;

    let updateData = { name, designation };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const mentor = await Mentor.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.status(200).json({
      success: true,
      message: "Mentor updated successfully",
      data: mentor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Mentor
exports.deleteMentor = async (req, res) => {
  try {
    const { id } = req.params;

    const mentor = await Mentor.findByIdAndDelete(id);

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.status(200).json({
      success: true,
      message: "Mentor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};