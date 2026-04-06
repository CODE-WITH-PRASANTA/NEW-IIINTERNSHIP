import React, { useState, useEffect } from "react";
import "./CourseLike.css";

import img1 from "../../assets/cl1.webp";
import img2 from "../../assets/cl2.webp";
import img3 from "../../assets/cl3.webp";
import img4 from "../../assets/cl4.webp";

const CourseLike = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const courses = [
    {
      title: "Mastering Graphic Design Fundamentals",
      img: img1,
      price: "$119",
      old: "$149",
      students: "89 Student",
      lessons: "85 Lessons",
      desc: "Learn design principles, color theory, typography, and tools to create stunning visual content.",
    },
    {
      title: "Business Analytics for Decision Making",
      img: img2,
      price: "Free",
      old: "$99",
      students: "56 Student",
      lessons: "20 Lessons",
      desc: "Analyze business data, build dashboards, and make data-driven decisions effectively.",
    },
    {
      title: "Cybersecurity Essentials Protecting Digital Systems",
      img: img3,
      price: "$59",
      old: "$79",
      students: "42 Student",
      lessons: "28 Lessons",
      desc: "Understand network security, ethical hacking, and protect systems from cyber threats.",
    },
    {
      title: "Creative Writing Crafting Compelling Stories",
      img: img4,
      price: "$07",
      old: "$19",
      students: "2.5k Student",
      lessons: "11 Lessons",
      desc: "Develop storytelling skills and craft engaging narratives.",
    },
    {
      title: "Mastering Graphic Design Fundamentals",
      img: img1,
      price: "$119",
      old: "$149",
      students: "89 Student",
      lessons: "85 Lessons",
      desc: "Learn design principles, color theory, typography.",
    },
    {
      title: "Creative Writing Crafting Compelling Stories",
      img: img4,
      price: "$07",
      old: "$19",
      students: "2.5k Student",
      lessons: "11 Lessons",
      desc: "Develop storytelling skills and craft engaging narratives.",
    },
  ];

  // RESPONSIVE ITEMS
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 991) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // TOTAL SLIDES
  const totalSlides = Math.ceil(courses.length / itemsPerPage);

  const startIndex = current * itemsPerPage;
  const visibleCourses = courses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="course-like">
      <div className="course-like__container">
        <h2 className="course-like__title">You May Like</h2>

        {/* SLIDER */}
        <div className="course-like__grid">
          {visibleCourses.map((course, i) => (
            <div className="course-like__card" key={i}>
              <div className="course-like__img-wrap">
                <img src={course.img} alt={course.title} />
              </div>

              <div className="course-like__content">
                <h4>{course.title}</h4>

                <div className="course-like__rating">
                  ⭐⭐⭐⭐⭐ <span>(4.8 / 2.6k Ratings)</span>
                </div>

                <div className="course-like__price">
                  <strong>{course.price}</strong>
                  <span>{course.old}</span>
                </div>

                <div className="course-like__meta">
                  <span>👤 {course.students}</span>
                  <span>📄 {course.lessons}</span>
                </div>
              </div>

              {/* HOVER */}
              <div className="course-like__hover">
                <h4>{course.title}</h4>

                <div className="course-like__rating">
                  ⭐⭐⭐⭐⭐ <span>(4.8 / 2.6k Ratings)</span>
                </div>

                <p>{course.desc}</p>

                <div className="course-like__price">
                  <strong>{course.price}</strong>
                  <span>{course.old}</span>
                </div>

                <button>View All</button>
              </div>
            </div>
          ))}
        </div>

        {/* DOT PAGINATION */}
        <div className="course-like__dots">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={current === i ? "active" : ""}
              onClick={() => setCurrent(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseLike;