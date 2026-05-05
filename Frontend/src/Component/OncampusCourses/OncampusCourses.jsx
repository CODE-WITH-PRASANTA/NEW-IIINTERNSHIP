import React, { useState } from "react";
import "./OncampusCourses.css";
import { FaThLarge, FaList, FaStar } from "react-icons/fa";
import { FiUsers, FiFileText } from "react-icons/fi";

const coursesData = [
  {
    id: 1,
    title: "Introduction to Data Science and Analytics",
    price: "$24",
    oldPrice: "$30",
    students: "270",
    lessons: "40",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 2,
    title: "Digital Marketing Strategies and Tools",
    price: "$49",
    oldPrice: "$59",
    students: "270",
    lessons: "40",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 3,
    title: "Cybersecurity Essentials Protecting Digital Systems",
    price: "$59",
    oldPrice: "$79",
    students: "42",
    lessons: "28",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 4,
    title: "Creative Writing Crafting Compelling Stories",
    price: "$07",
    oldPrice: "$19",
    students: "2.5k",
    lessons: "11",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  },
  {
    id: 5,
    title: "Digital Marketing Strategies and Tools",
    price: "$720",
    oldPrice: "$999",
    students: "82",
    lessons: "24",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  },
];

const ITEMS_PER_PAGE = 3;

const OncampusCourses = () => {
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(coursesData.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentCourses = coursesData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="occ">
      {/* HEADER */}
      <div className="occ__header">
        <p>
          Showing {startIndex + 1}–
          {Math.min(startIndex + ITEMS_PER_PAGE, coursesData.length)} of{" "}
          {coursesData.length} results
        </p>

        <div className="occ__controls">
          <div className="occ__view">
            <FaThLarge
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
            />
            <FaList
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
            />
          </div>

          <span>
            Sort By: <b>Default</b>
          </span>
        </div>
      </div>

      {/* COURSES */}
      <div className={`occ__courses occ__courses--${view}`}>
        {currentCourses.map((course) => (
          <div key={course.id} className="occ__card">
            {/* IMAGE */}
            <div className="occ__img">
              <img src={course.img} alt="" />

              {/* HOVER OVERLAY (GRID ONLY) */}
              {view === "grid" && (
                <div className="occ__overlay">
                  <h3>{course.title}</h3>
                  <div className="occ__rating">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    <span>(4.8 / 2.6k Ratings)</span>
                  </div>
                  <p>
                    Improve storytelling skills and learn how to craft engaging
                    narratives.
                  </p>
                  <div className="occ__price">
                    <span className="new">{course.price}</span>
                    <span className="old">{course.oldPrice}</span>
                  </div>
                  <button>View All</button>
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="occ__content">
              <h3>{course.title}</h3>

              <div className="occ__rating">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <span>(4.8 / 2.6k Ratings)</span>
              </div>

              {view === "list" && (
                <p className="occ__desc">
                  Learn key concepts, tools, and techniques to make data-driven
                  decisions.
                </p>
              )}

              <div className="occ__price">
                <span className="new">{course.price}</span>
                <span className="old">{course.oldPrice}</span>
              </div>

              <div className="occ__meta">
                <span>
                  <FiUsers /> {course.students} Students
                </span>
                <span>
                  <FiFileText /> {course.lessons} Lessons
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="occ__pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          ←
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default OncampusCourses;