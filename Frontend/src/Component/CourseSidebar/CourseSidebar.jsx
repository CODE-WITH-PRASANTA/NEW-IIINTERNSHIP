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

      {/* FEATURES CARD */}
      <div className="course-sidebar__card">

        <h3 className="course-sidebar__title">Course Features</h3>

        <div className="course-sidebar__list">
          <div><span>Lectures</span><strong>235</strong></div>
          <div><span>Quiz</span><strong>43</strong></div>
          <div><span>Duration</span><strong>6 Months</strong></div>
          <div><span>Skill level</span><strong>All levels</strong></div>
          <div><span>Language</span><strong>English, Spanish</strong></div>
          <div><span>Students</span><strong>774</strong></div>
          <div><span>Assessments</span><strong>Yes</strong></div>
        </div>

        {/* PRICE */}
        <div className="course-sidebar__price">
          <h2>$5,722</h2>
          <span className="course-sidebar__share">↗ Share</span>
        </div>

        {/* EXTRA INFO */}
        <div className="course-sidebar__extra">
          <p>30-Day Money-Back Guarantee</p>
          <p>Full Lifetime Access</p>
        </div>

        {/* BUTTON */}
        <button className="course-sidebar__btn">Buy Now</button>

      </div>

    </div>
  );
};

export default CourseSidebar;