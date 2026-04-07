import React, { useEffect, useState } from "react";
import API, { ImageUrl } from "../../api/axios";
import "./CoursePreview.css";

const CoursePreview = () => {
  const [courses, setCourses] = useState([]);
  const [view, setView] = useState("grid"); // grid | list

  // 🔥 FETCH COURSES
  const fetchCourses = async () => {
    try {
      const res = await API.get("/api/courses");
      setCourses(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="course-preview">
      
      {/* HEADER */}
      <div className="preview-header">
        <h2>All Courses</h2>

        <div className="view-toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            Grid
          </button>
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            List
          </button>
        </div>
      </div>

      {/* NO DATA */}
      {courses.length === 0 && (
        <p className="no-data">No courses found</p>
      )}

      {/* GRID VIEW */}
      {view === "grid" && (
        <div className="grid-view">
          {courses.map((item) => (
            <div className="card" key={item._id}>
              <img
                src={
                  item.banner
                    ? ImageUrl(item.banner)
                    : "/no-image.png"
                }
                alt="course"
              />

              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description?.slice(0, 80)}...</p>

                <div className="meta">
                  <span>{item.duration}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* LIST VIEW */}
      {view === "list" && (
        <div className="list-view">
          {courses.map((item) => (
            <div className="list-card" key={item._id}>
              <img
                src={
                  item.banner
                    ? ImageUrl(item.banner)
                    : "/no-image.png"
                }
                alt="course"
              />

              <div className="list-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="meta">
                  <span><b>Duration:</b> {item.duration}</span>
                  <span><b>Location:</b> {item.location}</span>
                  <span><b>Fee:</b> ₹{item.fee}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursePreview;