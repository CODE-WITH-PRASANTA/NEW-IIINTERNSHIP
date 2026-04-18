import React, { useState } from "react";
import "./SuccessSidebar.css";
import { FiSearch, FiMessageCircle } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import post1 from "../../assets/post1.png";
import post2 from "../../assets/post2.png";
import post3 from "../../assets/post3.png";

const SuccessDetailsSidebar = () => {
  const [date, setDate] = useState(new Date());

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const firstDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const handlePrev = () =>
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));

  const handleNext = () =>
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));

  const monthYear = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="sds-container">

      {/* SEARCH */}
      <div className="sds-searchBox">
        <input placeholder="Search" />
        <FiSearch />
      </div>

      {/* CATEGORIES */}
      <div className="sds-section">
        <h3 className="sds-heading">Categories</h3>

        {[
          ["Teachers", 45],
          ["School News", 13],
          ["Lessons", 6],
          ["Shelly", 89],
        ].map((item, i) => (
          <div key={i} className="sds-row">
            <span>{item[0]}</span>
            <span>{item[1]}</span>
          </div>
        ))}
      </div>

      {/* LATEST POSTS */}
      <div className="sds-section">
        <h3 className="sds-heading">Latest Posts</h3>

        {[post1, post2, post3].map((img, i) => (
          <div key={i} className="sds-post">
            <img src={img} alt="" />
            <div>
              <p>Duis tempor eros tortor, a ornare</p>
              <span>17/09/2020</span>
            </div>
          </div>
        ))}
      </div>

      {/* COMMENTS */}
      <div className="sds-section">
        <h3 className="sds-heading">Recent Comments</h3>

        {[1, 2, 3].map((_, i) => (
          <div key={i} className="sds-comment">
            <FiMessageCircle />
            <p>
              <b>Admin</b> in tempor eros tortor, a ornare
            </p>
          </div>
        ))}
      </div>

      {/* ARCHIVES */}
      <div className="sds-section">
        <h3 className="sds-heading">Archives</h3>

        {["December", "January", "February", "March"].map((m, i) => (
          <div key={i} className="sds-archive">
            • {m}
          </div>
        ))}
      </div>

      {/* TAGS */}
      <div className="sds-section">
        <h3 className="sds-heading">Tags</h3>

        <div className="sds-tags">
          {["Teachers", "Lessons", "Shelly", "School", "Theme", "Class"].map(
            (t, i) => (
              <span key={i}>{t}</span>
            )
          )}
        </div>
      </div>

      {/* CALENDAR */}
      <div className="sds-section">
        <h3 className="sds-heading">Calendar</h3>

        <div className="sds-calendar">
          <div className="sds-calHeader">
            <FaChevronLeft onClick={handlePrev} />
            <span>{monthYear}</span>
            <FaChevronRight onClick={handleNext} />
          </div>

          <div className="sds-days">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="sds-dates">
            {[...Array(firstDay)].map((_, i) => (
              <span key={i}></span>
            ))}

            {[...Array(daysInMonth)].map((_, i) => {
              const today =
                i + 1 === new Date().getDate() &&
                date.getMonth() === new Date().getMonth();

              return (
                <span key={i} className={today ? "active" : ""}>
                  {i + 1}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessDetailsSidebar;