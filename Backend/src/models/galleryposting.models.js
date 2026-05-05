const mongoose = require("mongoose");

const galleryPostingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["photo", "video"],
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    image: {
      type: String, // photo
    },

    videoUrl: {
      type: String, // video
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GalleryPosting", galleryPostingSchema);