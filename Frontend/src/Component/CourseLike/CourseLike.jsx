import React, { useState, useEffect } from "react";
import "./CourseLike.css";
import { useNavigate } from "react-router-dom";
import API, { ImageUrl } from "../../api/axios";

const CourseLike = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  // 🔥 FETCH COURSES FROM BACKEND
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/api/courses");
        setCourses(res.data.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  // ✅ RESPONSIVE
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

  // ✅ PAGINATION
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

        {/* GRID */}
        <div className="course-like__grid">
          {visibleCourses.map((course) => (
            <div
              className="course-like__card"
              key={course._id}
              onClick={() =>
                navigate(`/running-internship/${course._id}`)
              }
            >
              <div className="course-like__img-wrap">
                <img
                  src={
                    course.banner
                      ? ImageUrl(course.banner)
                      : "/no-image.png"
                  }
                  alt={course.title}
                />
              </div>

              <div className="course-like__content">
                <h4>{course.title}</h4>

                <div className="course-like__rating">
                  ⭐⭐⭐⭐⭐ <span>({course.students || 0} Students)</span>
                </div>

                <div className="course-like__price">
                  <strong>
                    {course.fee == 0 || !course.fee
                      ? "Free"
                      : `₹${course.fee}`}
                  </strong>
                </div>

                <div className="course-like__meta">
                  <span>👤 {course.students || 0}</span>
                  <span>📄 {course.lectures || 0}</span>
                </div>
              </div>

              {/* HOVER */}
              <div className="course-like__hover">
                <h4>{course.title}</h4>

                <p>
                  {course.description?.slice(0, 80) ||
                    "No description available"}
                </p>

                <div className="course-like__price">
                  <strong>
                    {course.fee == 0 || !course.fee
                      ? "Free"
                      : `₹${course.fee}`}
                  </strong>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/running-internship/${course._id}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
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