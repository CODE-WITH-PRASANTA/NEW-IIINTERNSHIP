const Project = require("../models/project.model");

/* ================= CREATE ================= */
const createProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ correct path from sharp middleware
    const imagePath = req.file ? req.file.path : "";

    const project = new Project({
      title,
      description,
      image: imagePath,
      visible: true,
    });

    await project.save();

    res.status(201).json(project);
  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET ALL ================= */
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error("GET ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

/* ================= UPDATE ================= */
const updateProject = async (req, res) => {
  try {
    const { title, description } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // update fields
    project.title = title || project.title;
    project.description = description || project.description;

    // ✅ update image only if new uploaded
    if (req.file) {
      project.image = req.file.path;
    }

    await project.save();

    res.json(project);
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

/* ================= DELETE ================= */
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await project.deleteOne();

    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

/* ================= TOGGLE ================= */
const toggleVisibility = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.visible = !project.visible;

    await project.save();

    res.json(project);
  } catch (err) {
    console.error("TOGGLE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  toggleVisibility,
};