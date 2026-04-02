import React from "react";
import "./CourseContent.css";

import img1 from "../../assets/c1.webp";
import img2 from "../../assets/c2.webp";
import img3 from "../../assets/c3.webp";

const CourseContent = () => {
  const leftList = [
    "Fundamentals of Data Science",
    "Data Analytics Techniques",
    "Programming for Data Science",
    "Data Visualization",
  ];

  const rightList = [
    "Machine Learning Basics",
    "Big Data and Cloud Computing",
    "Real-world Applications",
    "Capstone Project",
  ];

  const instructors = [
    {
      name: "David Martinez",
      role: "Marketing Mentor",
      img: img1,
    },
    {
      name: "Michael Thompson",
      role: "Data Scientist Mentor",
      img: img2,
    },
    {
      name: "Alexander Johnson",
      role: "Coding Instructor",
      img: img3,
    },
  ];

  return (
    <div className="course-content">

      {/* ABOUT COURSE */}
      <div className="course-content__card">
        <h2 className="course-content__title">About Course</h2>

        <div className="course-content__grid">
          <ul>
            {leftList.map((item, i) => (
              <li key={i}><span>✔</span> {item}</li>
            ))}
          </ul>

          <ul>
            {rightList.map((item, i) => (
              <li key={i}><span>✔</span> {item}</li>
            ))}
          </ul>
        </div>

        <p className="course-content__desc">
          This course provides a comprehensive introduction to data science and
          analytics, covering key concepts, techniques, and tools used in the
          industry. It is designed for beginners and professionals looking to
          enhance their data-driven decision-making skills.
        </p>
      </div>

      {/* INSTRUCTOR */}
      <div className="course-content__card">
        <h2 className="course-content__title">Instructor</h2>

        <div className="course-content__instructors">
          {instructors.map((item, i) => (
            <div className="course-content__instructor-card" key={i}>

              {/* BG PAINT */}
              <div className="course-content__bg"></div>

              {/* IMAGE */}
              <img src={item.img} alt={item.name} />

              {/* OVERLAY */}
              <div className="course-content__overlay">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CourseContent;