const Notice = require("../models/notice.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
exports.createNotice = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.files?.image) {
      data.image = req.files.image[0].path;
    }

    if (req.files?.files) {
      data.files = req.files.files.map((f) => f.path);
    }

    if (typeof data.links === "string") {
      data.links = JSON.parse(data.links);
    }

    const notice = new Notice(data);
    const saved = await notice.save();

    res.status(201).json({
      success: true,
      data: saved,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= GET ================= */
exports.getNotices = async (req, res) => {
  try {
    const data = await Notice.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= UPDATE ================= */
exports.updateNotice = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await Notice.findById(id);
    if (!existing) {
      return res.status(404).json({ message: "Not found" });
    }

    const updatedData = { ...req.body };

    // ✅ parse links
    if (typeof updatedData.links === "string") {
      updatedData.links = JSON.parse(updatedData.links);
    }

    // ✅ IMAGE UPDATE (delete old + add new)
    if (req.files?.image) {
      if (existing.image) {
        deleteImageFile(existing.image); // remove old
      }
      updatedData.image = req.files.image[0].path;
    }

    // ✅ FILES UPDATE (append OR replace)
    if (req.files?.files) {
      // delete old files
      if (existing.files?.length) {
        existing.files.forEach((f) => deleteImageFile(f));
      }

      updatedData.files = req.files.files.map((f) => f.path);
    }

    const updated = await Notice.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.json({
      success: true,
      data: updated,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed" });
  }
};

/* ================= DELETE ================= */
exports.deleteNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    if (!notice) {
      return res.status(404).json({ message: "Not found" });
    }

    if (notice.image) deleteImageFile(notice.image);

    if (notice.files?.length) {
      notice.files.forEach((f) => deleteImageFile(f));
    }

    await notice.deleteOne();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};