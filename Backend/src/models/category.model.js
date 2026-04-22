const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: String,
    images: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);