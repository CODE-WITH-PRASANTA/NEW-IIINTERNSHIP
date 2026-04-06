import React from "react";
import "./CourseContent.css";

import ins1 from "../../assets/c1.webp";
import ins2 from "../../assets/c2.webp";
import ins3 from "../../assets/c3.webp";

const CourseContent = () => {
  return (
    <div className="course-content">

      {/* ABOUT COURSE */}
      <div className="course-box">
        <h2>About Course</h2>


        <div className="course-features">
          <ul>
            <li>✔ Fundamentals of Data Science</li>
            <li>✔ Data Analytics Techniques</li>
            <li>✔ Programming for Data Science</li>
            <li>✔ Data Visualization</li>
          </ul>

          <ul>
            <li>✔ Machine Learning Basics</li>
            <li>✔ Big Data and Cloud Computing</li>
            <li>✔ Real-world Applications</li>
            <li>✔ Capstone Project</li>
          </ul>
        </div>

                {/* NEW HEADING (as you asked) */}
        <h4 className="course-subtitle">
          What You Will Learn
        </h4>

        <p className="course-desc">
          This course provides a comprehensive introduction to data science and analytics,
          covering key concepts, techniques, and tools used in the industry. It is designed
          for beginners and professionals looking to enhance their data-driven decision-making skills.
        </p>
      </div>

      {/* INSTRUCTORS */}
      <div className="course-box">
        <h2>Instructor</h2>

        <div className="instructor-grid">

          <div className="instructor-card">
            <img src={ins1} alt="" />
            <div className="instructor-overlay">
              <h3>David Martinez</h3>
              <p>Marketing Mentor</p>
            </div>
          </div>

          <div className="instructor-card">
            <img src={ins2} alt="" />
            <div className="instructor-overlay">
              <h3>Michael Thompson</h3>
              <p>Data Scientist Mentor</p>
            </div>
          </div>

          <div className="instructor-card">
            <img src={ins3} alt="" />
            <div className="instructor-overlay">
              <h3>Alexander Johnson</h3>
              <p>Coding Instructor</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CourseContent;