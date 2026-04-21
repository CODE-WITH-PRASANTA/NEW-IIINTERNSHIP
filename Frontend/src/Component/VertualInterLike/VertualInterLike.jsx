import React, { useState, useEffect } from "react";
import "./VertualInterLike.css";
import { useNavigate } from "react-router-dom";
import API, { ImageUrl } from "../../api/axios";

const VertualInterLike = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();

  // 🔥 FETCH COURSES
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/api/virtual-internships");
        setCourses(res.data.data || []);

      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  const getYouTubeThumbnail = (url) => {
    if (!url) return "";

    let videoId = "";

    if (url.includes("watch?v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    }

    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
  };

  // ✅ RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) setItemsPerPage(2);
      else if (window.innerWidth <= 991) setItemsPerPage(3);
      else setItemsPerPage(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ PAGINATION FIX
  const totalSlides = Math.max(1, Math.ceil(courses.length / itemsPerPage));
  const startIndex = current * itemsPerPage;

  const visibleCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  // ✅ RESET PAGE FIX
  useEffect(() => {
    if (current >= totalSlides) {
      setCurrent(0);
    }
  }, [courses, itemsPerPage]);

  return (
    <section className="course-like">
      <div className="course-like__container">
        <h2 className="course-like__title">You May Like</h2>

        <div className="course-like__grid">
          {visibleCourses.map((course) => (
            <div
              className="course-like__card"
              key={course._id}
              onClick={() => navigate(`/virtual-internship/${course._id}`)}
            >
              <div className="course-like__img-wrap">
                <img
                  src={
                    course?.banner
                      ? ImageUrl(course.banner)
                      : course?.youtubeLinks?.[0]
                        ? getYouTubeThumbnail(course.youtubeLinks[0])
                        : "https://dummyimage.com/300x200/cccccc/000000&text=No+Image"
                  }
                  alt={course.title}
                  onError={(e) => {
                    e.target.src =
                      "https://dummyimage.com/300x200/cccccc/000000&text=No+Image";
                  }}
                />
              </div>

              <div className="course-like__content">
                <h4>{course.title}</h4>

                <div className="course-like__rating">
                  ⭐⭐⭐⭐⭐ <span>({course.students || 0} Students)</span>
                </div>

                <div className="course-like__price">
                  <strong>
                    {course.fee == 0 || !course.fee ? "Free" : `₹${course.fee}`}
                  </strong>
                </div>

                <div className="course-like__meta">
                  <span>👤 {course.students || 0}</span>
                  <span>📄 {course.lectures || 0}</span>
                </div>
              </div>

              <div className="course-like__hover">
                <h4>{course.title}</h4>

                <p>
                  {course.description?.slice(0, 80) ||
                    "No description available"}
                </p>

                <div className="course-like__price">
                  <strong>
                    {course.fee == 0 || !course.fee ? "Free" : `₹${course.fee}`}
                  </strong>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/virtual-internship/${course._id}`);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

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

export default VertualInterLike;
