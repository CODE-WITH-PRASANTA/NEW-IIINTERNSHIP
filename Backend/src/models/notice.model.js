const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
  {
    image: String,
    date: String,
    title: String,
    description: String,
    author: String,
    designation: String,
    links: [String],
    files: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", noticeSchema);