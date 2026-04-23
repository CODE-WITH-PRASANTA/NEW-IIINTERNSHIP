import React, { useState, useEffect, useRef } from "react";
import "./NoticeManage.css";
import { FaEllipsisV } from "react-icons/fa";
import API from "../../api/axios";

const NoticeManage = () => {
  const [notices, setNotices] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef();

  // ================= FETCH =================
  const loadNotices = async () => {
    try {
      const res = await API.get("/api/notices");
      setNotices(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadNotices();
  }, []);

  // ================= OUTSIDE CLICK =================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ================= DELETE =================
  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/notices/${id}`);
      loadNotices();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= TOGGLE STATUS =================
  const toggleStatus = async (item) => {
    try {
      const newStatus =
        item.status === "published" ? "unpublished" : "published";

      const formData = new FormData();
      formData.append("status", newStatus);

      await API.put(`/api/notices/${item._id}`, formData);

      loadNotices();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="nm-container">
      <h2 className="nm-title">Manage Notices</h2>

      {notices.map((item, index) => (
        <div className="nm-card" key={item._id}>
          {/* IMAGE */}
          <div className="nm-imgWrap">
            <img
              src={
                item.image
                  ? `http://localhost:5000${item.image}`
                  : "https://via.placeholder.com/400x300"
              }
              alt=""
              className="nm-img"
            />

            {/* DATE */}
            {item.date && (
              <div className="nm-dateBadge">
                {item.date.split("-")[2]} <br />
                {item.date.split("-")[1]} <br />
                {item.date.split("-")[0]}
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="nm-content">
            <div className="nm-topRow">
              <span>👤 By {item.author || "Admin"}</span>
              <span>≡ Sl No. {index + 1}</span>
            </div>

            <h3 className="nm-heading">{item.title}</h3>
            <p
              className="nm-desc"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />

            <span
              className={`nm-status ${
                item.status === "published"
                  ? "nm-published"
                  : "nm-unpublished"
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* MENU */}
          <div className="nm-menuBox" ref={menuRef}>
            <FaEllipsisV
              className="nm-menuIcon"
              onClick={() =>
                setActiveMenu(activeMenu === item._id ? null : item._id)
              }
            />

            {activeMenu === item._id && (
              <div className="nm-dropdown">
                <div
                  className="nm-dropdownItem"
                  onClick={() => toggleStatus(item)}
                >
                  {/* {item.status === "published"
                    ? "Unpublish"
                    : "Publish"} */}
                </div>

                <div
                  className="nm-dropdownItem nm-delete"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeManage;