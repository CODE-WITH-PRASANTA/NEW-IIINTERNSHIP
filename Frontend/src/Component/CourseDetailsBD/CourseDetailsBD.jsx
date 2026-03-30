import React from "react";
import "./CourseDetailsBD.css";
import bgLines from "../../assets/bg-lines.png";
import instructorImg from "../../assets/t3.png"; // add any avatar image

const CourseDetailsBD = () => {
  return (
    <section className="CourseDetailsBD">
      <img src={bgLines} alt="" className="CourseDetailsBD__bg-lines" />

      <div className="CourseDetailsBD__inner">

        {/* LEFT CONTENT */}
        <div className="CourseDetailsBD__content">
          <div className="CourseDetailsBD__sparkles">
            <span className="CourseDetailsBD__spark-big">✦</span>
            <span className="CourseDetailsBD__spark-small">✦</span>
          </div>

          <h1 className="CourseDetailsBD__title">Courses Details</h1>
        </div>

        {/* COURSE INFO CARD */}
        <div className="CourseDetailsBD__card">

          {/* Instructor */}
          <div className="CourseDetailsBD__instructor">
            <img src={instructorImg} alt="" />
            <div>
              <h4>Alexander Johnson</h4>
              <p>Coding Instructor</p>
            </div>
          </div>

          {/* Rating */}
          <div className="CourseDetailsBD__meta">
            <div className="CourseDetailsBD__rating">
              ⭐ <strong>4.8</strong>
              <span>4427 ratings</span>
            </div>

            <div className="CourseDetailsBD__learners">
              👥 <strong>135,200</strong>
              <span>Learners</span>
            </div>
          </div>

        </div>
      </div>

      {/* CURVE */}
      <div className="CourseDetailsBD__curve">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path
            d="M0,125 C260,145 520,78 790,92 C1020,104 1225,70 1440,62 L1440,180 L0,180 Z"
            fill="#f4efea"
          />
        </svg>
      </div>
    </section>
  );
};

export default CourseDetailsBD;