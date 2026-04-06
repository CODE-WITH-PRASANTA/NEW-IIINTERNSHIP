import React from "react";
import "./CourseHero.css";

import bgLines from "../../assets/bg-lines.png";
import instructorImg from "../../assets/t2.png";

const CourseDetails = () => {
  return (
    <div className="course-details">

      {/* HERO */}
      <div
        className="course-hero"
        style={{ backgroundImage: `url(${bgLines})` }}
      >
        <div className="course-hero__container">

          <h1 className="course-hero__title">Courses Details</h1>

          {/* Instructor Badge */}
          <div className="course-hero__instructor">
            <img src={instructorImg} alt="Instructor" />

            <div className="course-hero__info">
              <h4>Alexander Johnson</h4>
              <p>Coding Instructor</p>
            </div>

            <div className="course-hero__stats">
              <div>
                ⭐ <h5>4.8</h5>
                <span>4427 ratings</span>
              </div>

              <div>
                👥 <h5>135,200</h5>
                <span>Learners</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CourseDetails;