import React from "react";
import "./CourseHero.css";
import { ImageUrl } from "../../api/axios";

import bgLines from "../../assets/bg-lines.png";

const CourseHero = ({ course }) => {
  if (!course) return null;

  return (
    <div className="course-hero" style={{ backgroundImage: `url(${bgLines})` }}>
      <div className="course-hero__container">
        {/* 🔥 Dynamic Title */}
        <h1 className="course-hero__title">
          {course.title || "Course Details"}
        </h1>

        {/* ===== INSTRUCTOR ===== */}
        <div className="course-hero__instructor">
          {/* 🔥 Dynamic Image */}
          <img
            src={course.profile ? ImageUrl(course.profile) : "/no-image.png"}
            alt="Instructor"
          />

          <div className="course-hero__info">
            <h4>{course.instructor || "Unknown Instructor"}</h4>
            <p>{course.designation || "Instructor"}</p>
          </div>

          {/* ===== STATS ===== */}
          <div className="course-hero__stats">
            <div>
              ⭐ <h5>{course.rating || "4.5"}</h5>
              <span>{course.reviews || "0"} ratings</span>
            </div>

            <div>
              👥 <h5>{course.students || 0}</h5>
              <span>Learners</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
