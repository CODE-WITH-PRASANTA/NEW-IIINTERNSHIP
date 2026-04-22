const mongoose = require("mongoose");

const virtualInternshipSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    rating: String,

    youtubeLinks: [String],
    instructors: [String],

    ownerName: String,
    designation: String,
    learners: Number,

    duration: String,
    department: String,
    modules: String,
    projects: String,
    tools: String,

    lectures: Number,
    quiz: Number,
    skillLevel: String,
    language: String,
    students: Number,
    assessment: String,

    // ✅ FIXED CATEGORY
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    courseDescription: String,
    thumbnail: String,
    documents: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "VirtualInternship",
  virtualInternshipSchema
);