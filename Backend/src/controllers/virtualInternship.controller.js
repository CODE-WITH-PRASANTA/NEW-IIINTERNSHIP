const VirtualInternship = require("../models/virtualInternship.model");
const { deleteImageFile } = require("../middleware/upload");

/* ================= CREATE ================= */
exports.createInternship = async (req, res) => {
  try {
    const body = req.body;

    // ✅ HANDLE FILES PROPERLY
    let thumbnail = "";
    let documents = [];

    if (req.files?.thumbnail) {
      thumbnail = req.files.thumbnail[0].path; // string ✅
    }

    if (req.files?.documents) {
      documents = req.files.documents.map((f) => f.path); // array ✅
    }

    const data = {
      ...body,

      youtubeLinks: body.youtubeLinks ? JSON.parse(body.youtubeLinks) : [],

      instructors: body.instructors ? JSON.parse(body.instructors) : [],

      category: body.category || null,

      thumbnail,
      documents,
    };

    const internship = await VirtualInternship.create(data);

    res.json({
      success: true,
      message: "Internship created",
      data: internship,
    });
  } catch (err) {
    console.error("CREATE ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= GET ALL ================= */
exports.getInternships = async (req, res) => {
  try {
    const data = await VirtualInternship.find()
      .populate("category") // 🔥 IMPORTANT
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= GET ONE ================= */
exports.getInternshipById = async (req, res) => {
  try {
    const data = await VirtualInternship.findById(req.params.id).populate(
      "category",
    );

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= UPDATE ================= */
exports.updateInternship = async (req, res) => {
  try {
    const existing = await VirtualInternship.findById(req.params.id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Internship not found",
      });
    }

    let thumbnail = existing.thumbnail;

    // ✅ new thumbnail uploaded
    if (req.files?.thumbnail) {
      if (existing.thumbnail) {
        deleteImageFile(existing.thumbnail);
      }
      thumbnail = req.files.thumbnail[0].path;
    }

    let documents = existing.documents;

    if (req.files?.documents) {
      documents = req.files.documents.map((f) => f.path);
    }

    const updated = await VirtualInternship.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,

        youtubeLinks: req.body.youtubeLinks
          ? JSON.parse(req.body.youtubeLinks)
          : existing.youtubeLinks,

        instructors: req.body.instructors
          ? JSON.parse(req.body.instructors)
          : existing.instructors,

        category: req.body.category || existing.category,

        thumbnail,
        documents,
      },
      { new: true },
    );

    res.json({
      success: true,
      message: "Updated successfully",
      data: updated,
    });
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ================= DELETE ================= */
exports.deleteInternship = async (req, res) => {
  try {
    const existing = await VirtualInternship.findById(req.params.id);

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    if (existing.thumbnail) {
      deleteImageFile(existing.thumbnail);
    }

    if (existing.documents?.length) {
      existing.documents.forEach((doc) => deleteImageFile(doc));
    }

    await VirtualInternship.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
