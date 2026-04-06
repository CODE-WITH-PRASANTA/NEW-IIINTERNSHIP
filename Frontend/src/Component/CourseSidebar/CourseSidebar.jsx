import React from "react";
import "./CourseSidebar.css";

import demoImg from "../../assets/pic1.webp";

const CourseSidebar = () => {
  return (
    <div className="course-sidebar">

      {/* VIDEO */}
      <div className="course-sidebar__video">
        <img src={demoImg} alt="Demo Class" />
        <div className="course-sidebar__play">▶</div>
        <span className="course-sidebar__label">Demo Class</span>
      </div>

      {/* CONTENT */}
      <div className="course-sidebar__content">
        <h3>Course Features</h3>

        <div className="course-sidebar__list">
          <div><span>Lectures</span><span>235</span></div>
          <div><span>Quiz</span><span>43</span></div>
          <div><span>Duration</span><span>6 Months</span></div>
          <div><span>Skill level</span><span>All levels</span></div>
          <div><span>Language</span><span>English, Spanish</span></div>
          <div><span>Students</span><span>774</span></div>
          <div><span>Assessments</span><span>Yes</span></div>
        </div>

        <div className="course-sidebar__bottom">
          <div className="course-sidebar__price">
            <h2>$5,722</h2>
            <span>30-Day Money-Back Guarantee</span>
            <span>Full Lifetime Access</span>
          </div>

          <button className="course-sidebar__btn">Buy Now</button>
        </div>
      </div>

    </div>
  );
};

export default CourseSidebar;