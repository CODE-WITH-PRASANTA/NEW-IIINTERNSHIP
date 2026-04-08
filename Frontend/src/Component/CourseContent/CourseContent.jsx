import React from "react";
import "./CourseContent.css";
import { ImageUrl } from "../../api/axios";

const CourseContent = ({ course }) => {
  if (!course) return null;

  return (
    <div className="course-content">
      {/* ===== ABOUT COURSE ===== */}
      <div className="course-box">
        <h2>About Course</h2>

        {/* 🔥 Dynamic Description */}
        <p className="course-desc">
          {course.description || "No description available"}
        </p>

        {/* ===== FEATURES / MODULES ===== */}
        {course.modules && (
          <div className="course-features">
            {course.modules.split("\n").map((item, index) => (
              <ul key={index}>
                <li>✔ {item}</li>
              </ul>
            ))}
          </div>
        )}

        {/* ===== WHAT YOU WILL LEARN ===== */}
        {course.modules && (
          <>
            <h4 className="course-subtitle">What You Will Learn</h4>
            <p className="course-desc">{course.modules}</p>
          </>
        )}
      </div>

      {/* ===== INSTRUCTOR ===== */}
      <div className="course-box">
        <h2>Instructor</h2>

        <div className="instructor-grid">
          {/* 🔥 Dynamic Instructor */}
          <div className="instructor-card">
            <img
              src={
                course.profile
                  ? ImageUrl(course.profile)
                  : course.banner
                    ? ImageUrl(course.banner)
                    : "https://ui-avatars.com/api/?name=" + course.instructor
              }
              alt="Instructor"
            />

            <div className="instructor-overlay">
              <h3>{course.instructor || "Unknown Instructor"}</h3>
              <p>{course.designation || "Mentor"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
