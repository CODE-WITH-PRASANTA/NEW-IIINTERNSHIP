import React, { useState, useEffect } from "react";
import "./VirtualManage.css";
import API, { ImageUrl } from "../../api/axios";
import { useNavigate } from "react-router-dom";

const ManageVirtual = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [videoModal, setVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    const closeMenu = () => setActiveMenu(null);

    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await API.get("/api/virtual-internships");
      setCourses(res.data.data || []);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this course?");
    if (!ok) return;

    try {
      await API.delete(`/api/virtual-internships/${id}`);
      fetchCourses();
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  const getEmbedUrl = (url) => {
    if (!url) return "";

    if (url.includes("youtu.be/")) {
      return `https://www.youtube.com/embed/${url.split("youtu.be/")[1].split("?")[0]}`;
    }

    if (url.includes("watch?v=")) {
      return `https://www.youtube.com/embed/${url.split("watch?v=")[1].split("&")[0]}`;
    }

    return url;
  };

  const openVideo = (video) => {
    if (!video) return;
    setCurrentVideo(video);
    setVideoModal(true);
  };

  const closeVideo = () => {
    setVideoModal(false);
    setCurrentVideo("");
  };

  // ✅ FIX: loading condition outside JSX
  if (loading) {
    return (
      <div className="mv">
        <h2 className="mv__title">Manage Virtual Internship</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="mv">
      <h2 className="mv__title">Manage Virtual Internship</h2>
      {courses.length === 0 && (
        <p style={{ textAlign: "center" }}>No courses found</p>
      )}
      <div className="mv__grid">
        {courses.map((course) => (
          <div key={course._id} className="mv__card">
            {/* VIDEO THUMBNAIL */}
            <div
              className="mv__imgWrap"
              onClick={() => {
                const video = getEmbedUrl(course.youtubeLinks?.[0]);
                if (video) openVideo(video);
              }}
            >
              <img
                src={
                  course.thumbnail
                    ? ImageUrl(course.thumbnail)
                    : "https://via.placeholder.com/300x200"
                }
                alt={course.title}
              />

              {/* PLAY BUTTON */}
              <div className="mv__play">▶</div>

              {/* 3 DOT MENU */}
              <div
                className="mv__menuWrap"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="mv__menuBtn"
                  onClick={() =>
                    setActiveMenu(activeMenu === course._id ? null : course._id)
                  }
                >
                  ⋮
                </button>

                {activeMenu === course._id && (
                  <div className="mv__dropdown">
                    <div
                      onClick={() => {
                        setActiveMenu(null); // ✅ close dropdown
                        navigate(`/course/virtual/${course._id}`, {
                          state: course,
                        });
                      }}
                    >
                      Edit
                    </div>
                    <div
                      onClick={() => {
                        setActiveMenu(null);
                        handleDelete(course._id);
                      }}
                    >
                      Delete
                    </div>
                    <div>View Details</div>
                  </div>
                )}
              </div>
            </div>

            {/* CONTENT */}
            <div className="mv__content">
              <h3>{course.title}</h3>
              <div className="mv__rating">
                ⭐⭐⭐⭐⭐ ({course.rating || 0})
              </div>

              <div className="mv__price">
                <span className="mv__new">{course.price}</span>
                <span className="mv__old">{course.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {videoModal && (
        <div className="mv__modal" onClick={closeVideo}>
          <div
            className="mv__modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mv__close" onClick={closeVideo}>
              ×
            </span>

            <iframe
              src={currentVideo}
              title="video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageVirtual;
