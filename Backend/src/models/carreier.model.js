const mongoose = require("mongoose");

const carreierSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    experience: String,
    type: String,
    vacancy: Number,

    salaryMin: Number,
    salaryMax: Number,
    salaryType: {
      type: String,
      enum: ["Monthly", "Yearly"],
      default: "Monthly",
    },

    location: String,
    skills: [String],
    description: String,

    whatsapp: { type: Boolean, default: true },
    apply: { type: Boolean, default: true },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Carreier", carreierSchema);