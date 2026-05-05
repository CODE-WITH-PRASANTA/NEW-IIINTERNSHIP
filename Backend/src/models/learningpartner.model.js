const mongoose = require("mongoose");

const learningPartnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String, // image path
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LearningPartner", learningPartnerSchema);