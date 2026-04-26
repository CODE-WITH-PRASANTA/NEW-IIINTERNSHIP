const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Career", // change to your job model name if different
      required: true,
    },

    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    whatsapp: {
      type: Boolean,
      default: false,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    qualification: {
      type: String,
    },

    location: {
      type: String,
    },

    message: {
      type: String,
    },

    resume: {
      type: String, // stores file path
    },

    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Rejected", "Selected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);