import React, { useEffect, useState } from "react";
import API, { ImageUrl } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import "./CourseManage.css";

const CourseManage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // 🔥 GET ALL COURSES
  const fetchCourses = async () => {
    try {
      const res = await API.get("/api/courses");
      setCourses(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // ❌ DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this course?")) return;

    try {
      await API.delete(`/api/courses/${id}`);
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  // ✏️ EDIT
  const handleEdit = (id) => {
    navigate(`/course/post/${id}`);
  };
return (
  <div className="course-manage">
    <div className="top-bar">
      <h2>📚 Course Management</h2>
      <button
        className="add-btn"
        onClick={() => navigate("/course/post")}
      >
        ➕ Add Course
      </button>
    </div>

    <div className="course-grid">
      {courses.length === 0 ? (
        <p className="no-data">No Courses Found</p>
      ) : (
        courses.map((c) => (
          <div className="course-card" key={c._id}>
            <img
              src={ImageUrl(c.banner)}
              alt="course"
              className="course-img"
            />

            <div className="course-content">
              <h3>{c.title}</h3>
              <p>{c.department}</p>

              <div className="actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(c._id)}
                >
                  ✏️ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(c._id)}
                >
                  ❌ Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);
};

export default CourseManage;
