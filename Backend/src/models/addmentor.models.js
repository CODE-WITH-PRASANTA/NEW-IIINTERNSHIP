const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // image path
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mentor", mentorSchema);