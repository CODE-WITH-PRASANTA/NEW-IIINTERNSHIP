import React from "react";
import "./VertualIntrnHero.css";
import { ImageUrl } from "../../api/axios";

import bgLines from "../../assets/bg-lines.png";

const VertualIntrnHero = ({ course }) => {
  if (!course) return null;

  return (
    <div className="course-hero" style={{ backgroundImage: `url(${bgLines})` }}>
      <div className="course-hero__container">
        {/* 🔥 Dynamic Title */}
        <h1 className="course-hero__title">
          {course?.title || "Course Details"}
        </h1>

        {/* ===== INSTRUCTOR ===== */}
        <div className="course-hero__instructor">
          {/* 🔥 Dynamic Image */}
          <img
            src={
              course?.profile
                ? ImageUrl(course.profile)
                : course?.banner
                  ? ImageUrl(course.banner)
                  : "https://ui-avatars.com/api/?name=" +
                    (course?.title || "Course")
            }
            alt="Instructor"
          />

          <div className="course-hero__info">
            <h4>{course?.instructor || "Admin"}</h4>
            <p>{course?.designation || "Instructor"}</p>
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

export default VertualIntrnHero;
