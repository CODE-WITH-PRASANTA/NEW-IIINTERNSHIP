const Carreier = require("../models/carreier.model");

/* CREATE */
exports.createCarreier = async (req, res) => {
  try {
    const data = req.body;

    const job = new Carreier({
      ...data,
      skills: Array.isArray(data.skills)
        ? data.skills // already array
        : data.skills
        ? data.skills.split(",").map((s) => s.trim())
        : [],
    });

    await job.save();
    res.json(job);
  } catch (err) {
    console.log("CREATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
};

/* GET ALL */
exports.getAllCarreiers = async (req, res) => {
  try {
    const data = await Carreier.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* GET SINGLE */
exports.getCarreierById = async (req, res) => {
  try {
    const data = await Carreier.findById(req.params.id);

    if (!data) return res.status(404).json({ message: "Not found" });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* UPDATE */
exports.updateCarreier = async (req, res) => {
  try {
    const data = req.body;

    if (data.skills) {
      data.skills = data.skills.split(",");
    }

    const updated = await Carreier.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Updated", updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* DELETE */
exports.deleteCarreier = async (req, res) => {
  try {
    const deleted = await Carreier.findByIdAndDelete(req.params.id);

    if (!deleted) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* TOGGLE STATUS */
exports.toggleStatus = async (req, res) => {
  try {
    const job = await Carreier.findById(req.params.id);

    if (!job) return res.status(404).json({ message: "Not found" });

    job.status = job.status === "Active" ? "Inactive" : "Active";

    await job.save();

    res.json({ message: "Status updated", job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};