import React, { useState, useEffect, useRef } from "react";
import "./NoticeManage.css";
import { FaEllipsisV } from "react-icons/fa";


const initialData = [
  {
    id: 1,
    title:
      "INFORMATION REGARDING SATYASHODHAK JOURNALISM GAURAV SAMMAN.",
    desc:
      "On November 9, 2025, in the auditorium of the Thekma Development Block Office in Azamgarh district, journalists will be honored.",
    author: "URU Admin Team",
    date: "25 Oct 2025",
    img: "https://picsum.photos/400/300?1",
    status: "published",
  },
  {
    id: 2,
    title: "ABOUT REGISTERING A UNIQUE RECORD OR ACTIVITY.",
    desc:
      "You can easily register your unique records or activities on the web portal of Unique Records of Universe.",
    author: "URU Admin Team",
    date: "1 Sep 2025",
    img: "https://picsum.photos/400/300?1",
    status: "unpublished",
  },
  {
    id: 3,
    title:
      "REGARDING INFORMATION ATMA UTKARSH DHYAN-YOGA CAMP AND THE GUJARAT GAURAV SAMMAN-2026.",
    desc:
      "The list of registered participants and further details regarding the camp can be downloaded.",
    author: "URU Admin Team",
    date: "19 Mar 2026",
    img: "https://picsum.photos/400/300?1",
    status: "published",
  },
];

const NoticeManage = () => {
  const [notices, setNotices] = useState(initialData);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef();

  // OUTSIDE CLICK CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ACTIONS
  const handleDelete = (id) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  const toggleStatus = (id) => {
    setNotices(
      notices.map((n) =>
        n.id === id
          ? {
              ...n,
              status: n.status === "published" ? "unpublished" : "published",
            }
          : n
      )
    );
  };

  return (
    <div className="nm-container">
      <h2 className="nm-title">Manage Notices</h2>

      {notices.map((item, index) => (
        <div className="nm-card" key={item.id}>
          {/* IMAGE */}
          <div className="nm-imgWrap">
            <img src={item.img} alt="" className="nm-img" />

            <div className="nm-dateBadge">
              {item.date.split(" ")[0]} <br />
              {item.date.split(" ")[1]} <br />
              {item.date.split(" ")[2]}
            </div>
          </div>

          {/* CONTENT */}
          <div className="nm-content">
            <div className="nm-topRow">
              <span>👤 By {item.author}</span>
              <span>≡ Sl No. {index + 1}</span>
            </div>

            <h3 className="nm-heading">{item.title}</h3>
            <p className="nm-desc">{item.desc}</p>

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

          {/* 3 DOT MENU */}
          <div className="nm-menuBox" ref={menuRef}>
            <FaEllipsisV
              className="nm-menuIcon"
              onClick={() =>
                setActiveMenu(activeMenu === item.id ? null : item.id)
              }
            />

            {activeMenu === item.id && (
              <div className="nm-dropdown">
                <div
                  className="nm-dropdownItem"
                  onClick={() => toggleStatus(item.id)}
                >
                  {item.status === "published"
                    ? "Unpublish"
                    : "Publish"}
                </div>

                <div
                  className="nm-dropdownItem nm-delete"
                  onClick={() => handleDelete(item.id)}
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