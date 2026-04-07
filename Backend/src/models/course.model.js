const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    adId: String,

    title: String,
    description: String,
    banner: String,

    department: String,
    modules: String,
    project: String,
    tools: String,

    internshipType: String,
    credits: String,
    location: String,
    duration: String,

    qualification: String,
    skills: String,

    paymentType: String,
    timePeriod: String,

    facilities: String,
    career: String,

    startDate: String,
    fee: String,
    lastDate: String,

    mentor: String,
    contact: String,
    organizer: String,

    rating: String,
    pricing: String,
    content: String,
    lectures: String,
    quiz: String,
    courseDuration: String,

    skillLevel: String,
    language: String,
    students: String,
    assessments: String,

    instructor: String,
    ownerName: String,
    designation: String,
    ownerLocation: String,

    profile: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);