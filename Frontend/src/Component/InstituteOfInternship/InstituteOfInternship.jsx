import React, { useEffect, useState } from "react";
import "./InstituteOfInternship.css";

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};

const InstituteOfInternship = () => {
  const students = useCounter(45.2);
  const completed = useCounter(32.4);
  const instructors = useCounter(354);
  const satisfaction = useCounter(99.9);

  return (
    <section className="i3Stats-section">
      <div className="i3Stats-container">

        {/* LEFT CONTENT */}
        <div className="i3Stats-left">
          <p className="i3Stats-subtitle"></p>

          <h2 className="i3Stats-title">
           The International  <span>Institute</span>of Internship (i3) 
          </h2>

          <div className="i3Stats-underline"></div>

          <p className="i3Stats-text">
            The International Institute of Internship (i3) model has been
            developed in line with the core concepts of NEP 2020. i3 provides
            students with academic knowledge along with internships, practical
            skills, research insights, professional exposure, and employment
            opportunities, enabling them to meet future challenges confidently.
          </p>
        </div>

        {/* RIGHT STATS CARD */}
        <div className="i3Stats-cardWrapper">

          <div className="i3Stats-card">

            <div className="i3Stats-box">
              <h3 className="i3Stats-green">
                {students.toFixed(1)}K
              </h3>
              <p>STUDENT ENROLLED</p>
            </div>

            <div className="i3Stats-box">
              <h3 className="i3Stats-red">
                {completed.toFixed(1)}K
              </h3>
              <p>CLASS COMPLETED</p>
            </div>

            <div className="i3Stats-box">
              <h3 className="i3Stats-orange">
                {Math.floor(instructors)}+
              </h3>
              <p>TOP INSTRUCTORS</p>
            </div>

            <div className="i3Stats-box">
              <h3 className="i3Stats-purple">
                {satisfaction.toFixed(1)}%
              </h3>
              <p>SATISFACTION RATE</p>
            </div>

          </div>
        </div>

      </div>

      {/* Decorative Shapes */}
      <div className="i3Stats-dots"></div>
      <div className="i3Stats-circle"></div>
      <div className="i3Stats-blob"></div>

    </section>
  );
};

export default InstituteOfInternship;
