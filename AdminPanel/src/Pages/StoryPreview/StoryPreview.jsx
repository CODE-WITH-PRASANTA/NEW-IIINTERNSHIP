import React, { useState, useEffect } from "react";
import "./StoryPreview.css";
import {
  FaEllipsisV,
  FaThLarge,
  FaList,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

const initialData = [
  {
    id: 1,
    title: "How to Choose the Right Online Course for Your Goals",
    desc: "Learn key factors to consider such as course content and instructor expertise.",
    date: "17 March 2025",
    author: "Roberts",
    status: "published",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    id: 2,
    title: "10 Essential Skills You Can Learn Online",
    desc: "Discover in-demand skills like coding, marketing and project management.",
    date: "20 April 2025",
    author: "Sophia Lane",
    status: "unpublished",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 3,
    title: "Future of Online Learning",
    desc: "Why digital education is growing rapidly worldwide.",
    date: "22 April 2025",
    author: "John Doe",
    status: "published",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    id: 4,
    title: "Boost Your Career with Online Courses",
    desc: "Improve your career with flexible online learning.",
    date: "25 April 2025",
    author: "Emma",
    status: "published",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
];

const StoryPreview = () => {
  const [view, setView] = useState("grid");
  const [activeMenu, setActiveMenu] = useState(null);
  const [data, setData] = useState(initialData);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const closeMenu = () => setActiveMenu(null);
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  // ✅ ACTIONS
  const handlePublish = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "published" } : item
      )
    );
    setActiveMenu(null);
  };

  const handleUnpublish = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "unpublished" } : item
      )
    );
    setActiveMenu(null);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    setActiveMenu(null);
  };

  const handleView = (item) => {
    alert(`Viewing: ${item.title}`);
    setActiveMenu(null);
  };

  return (
    <div className="storyPreview">
      {/* HEADER */}
      <div className="storyPreview__header">
        <h2>Stories</h2>

        <div className="storyPreview__toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            <FaThLarge />
          </button>
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className={`storyPreview__wrapper ${view}`}>
        {data.map((item) => (
          <div
            className="storyPreview__card"
            key={item.id}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="storyPreview__cardInner">
              <div className="storyPreview__img">
                <img src={item.image} alt="" />
              </div>

              <div className="storyPreview__body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="storyPreview__meta">
                  <span>
                    <FaCalendarAlt /> {item.date}
                  </span>
                  <span>
                    <FaUser /> {item.author}
                  </span>
                </div>
              </div>
            </div>

            {/* STATUS */}
            <div className={`status ${item.status}`}>
              {item.status}
            </div>

            {/* MENU */}
            <div className="storyPreview__menu">
              <div
                className="menuIcon"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenu(activeMenu === item.id ? null : item.id);
                }}
              >
                <FaEllipsisV />
              </div>

              {activeMenu === item.id && (
                <div className="storyPreview__dropdown">
                  <p onClick={() => handleView(item)}>View</p>
                  <p onClick={() => handlePublish(item.id)}>Publish</p>
                  <p onClick={() => handleUnpublish(item.id)}>Unpublish</p>
                  <p
                    className="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryPreview;