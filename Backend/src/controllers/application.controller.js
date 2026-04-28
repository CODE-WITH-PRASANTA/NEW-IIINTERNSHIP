const Application = require("../models/application.model");

/* ================= CREATE ================= */
const createApplication = async (req, res) => {
  try {
    const {
      jobId,
      firstName,
      lastName,
      whatsapp,
      phone,
      email,
      qualification,
      location,
      message,
    } = req.body;

    if (!jobId) {
      return res.status(400).json({ message: "Job ID required" });
    }

    const resumePath = req.file
      ? "/uploads/resumes/" + req.file.filename
      : "";

    const newApp = new Application({
      jobId,
      firstName,
      lastName,
      whatsapp,
      phone,
      email,
      qualification,
      location,
      message,
      resume: resumePath,
    });

    await newApp.save();

    return res.status(201).json({
      message: "Application submitted successfully",
      data: newApp,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err.message || "Server error",
    });
  }
};

/* ================= GET ALL ================= */
const getAllApplications = async (req, res) => {
  try {
    const data = await Application.find().populate("jobId");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

/* ================= GET BY JOB ================= */
const getApplicationsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const data = await Application.find({ jobId });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching job applications" });
  }
};

/* ================= UPDATE ================= */
const updateApplication = async (req, res) => {
  try {
    const updated = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

/* ================= DELETE ================= */
const deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);

    res.json({ message: "Application deleted successfully" });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationsByJob,
  updateApplication,    
  deleteApplication,     
};