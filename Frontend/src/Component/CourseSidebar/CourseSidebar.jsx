import React from "react";
import "./CourseSidebar.css";
import { ImageUrl } from "../../api/axios";

const CourseSidebar = ({ course }) => {
  if (!course) return null;

  return (
    <div className="course-sidebar">

      {/* ===== VIDEO / BANNER ===== */}
      <div className="course-sidebar__video">
        <img
          src={
            course.banner
              ? ImageUrl(course.banner)
              : "/no-image.png"
          }
          alt="Demo Class"
        />
        <div className="course-sidebar__play">▶</div>
        <span className="course-sidebar__label">Demo Class</span>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="course-sidebar__content">
        <h3>Course Features</h3>

        <div className="course-sidebar__list">

          <div>
            <span>Lectures</span>
            <span>{course.lectures || 0}</span>
          </div>

          <div>
            <span>Quiz</span>
            <span>{course.quiz || 0}</span>
          </div>

          <div>
            <span>Duration</span>
            <span>{course.duration || "N/A"}</span>
          </div>

          <div>
            <span>Skill level</span>
            <span>{course.skillLevel || "Beginner"}</span>
          </div>

          <div>
            <span>Language</span>
            <span>{course.language || "English"}</span>
          </div>

          <div>
            <span>Students</span>
            <span>{course.students || 0}</span>
          </div>

          <div>
            <span>Assessments</span>
            <span>{course.assessments || "No"}</span>
          </div>

        </div>

        {/* ===== PRICE ===== */}
        <div className="course-sidebar__bottom">
          <div className="course-sidebar__price">

            <h2>
              {course.fee == 0 || !course.fee
                ? "Free"
                : `₹${course.fee}`}
            </h2>

            <span>30-Day Money-Back Guarantee</span>
            <span>Full Lifetime Access</span>
          </div>

          <button className="course-sidebar__btn">
            {course.fee == 0 ? "Enroll Now" : "Buy Now"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseSidebar;