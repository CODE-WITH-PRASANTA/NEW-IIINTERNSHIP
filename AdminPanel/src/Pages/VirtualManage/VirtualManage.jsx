import React, { useState } from "react";
import "./VirtualManage.css";

const coursesData = [
  {
    id: 1,
    title: "Introduction to Data Science",
    price: "₹1999",
    oldPrice: "₹2499",
    rating: "4.8",
    thumbnail: "https://img.youtube.com/vi/ua-CiDNNj30/hqdefault.jpg",
    video: "https://www.youtube.com/embed/ua-CiDNNj30"
  },
  {
    id: 2,
    title: "Digital Marketing",
    price: "₹1499",
    oldPrice: "₹1999",
    rating: "4.7",
    thumbnail: "https://img.youtube.com/vi/bixR-KIJKYM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/bixR-KIJKYM"
  },
  {
    id: 3,
    title: "React JS Course",
    price: "₹1799",
    oldPrice: "₹2299",
    rating: "4.8",
    thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/bMknfKXIFA8"
  },
  {
    id: 3,
    title: "React JS Course",
    price: "₹1799",
    oldPrice: "₹2299",
    rating: "4.8",
    thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/bMknfKXIFA8"
  },
  {
    id: 4,
    title: "React JS Course",
    price: "₹1799",
    oldPrice: "₹2299",
    rating: "4.8",
    thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/bMknfKXIFA8"
  },
  {
    id: 5,
    title: "React JS Course",
    price: "₹1799",
    oldPrice: "₹2299",
    rating: "4.8",
    thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg",
    video: "https://www.youtube.com/embed/bMknfKXIFA8"
  }
];

const ManageVirtual = () => {
  const [courses] = useState(coursesData);
  const [activeMenu, setActiveMenu] = useState(null);

  const [videoModal, setVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openVideo = (video) => {
    setCurrentVideo(video);
    setVideoModal(true);
  };

  const closeVideo = () => {
    setVideoModal(false);
    setCurrentVideo("");
  };

  return (
    <div className="mv">

      <h2 className="mv__title">Manage Virtual Internship</h2>

      <div className="mv__grid">
        {courses.map((course) => (
          <div key={course.id} className="mv__card">

            {/* VIDEO THUMBNAIL */}
            <div className="mv__imgWrap" onClick={() => openVideo(course.video)}>
              <img src={course.thumbnail} alt="" />

              {/* PLAY BUTTON */}
              <div className="mv__play">▶</div>

              {/* 3 DOT MENU */}
              <div className="mv__menuWrap" onClick={(e) => e.stopPropagation()}>
                <button
                  className="mv__menuBtn"
                  onClick={() =>
                    setActiveMenu(activeMenu === course.id ? null : course.id)
                  }
                >
                  ⋮
                </button>

                {activeMenu === course.id && (
                  <div className="mv__dropdown">
                    <div>Edit</div>
                    <div>Delete</div>
                    <div>View Details</div>
                  </div>
                )}
              </div>
            </div>

            {/* CONTENT */}
            <div className="mv__content">
              <h3>{course.title}</h3>
              <div className="mv__rating">⭐⭐⭐⭐⭐ ({course.rating})</div>

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
          <div className="mv__modalContent" onClick={(e) => e.stopPropagation()}>

            <span className="mv__close" onClick={closeVideo}>×</span>

            <iframe
              src={currentVideo}
              title="video"
              allowFullScreen
            ></iframe>

          </div>
        </div>
      )}

    </div>
  );
};

export default ManageVirtual;