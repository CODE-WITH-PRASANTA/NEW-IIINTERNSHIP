import React from "react";
import "./NoticeDetails.css";
import API from "../../api/axios";
import { useState } from "react";
import { useEffect } from "react";

const NoticeDetails = () => {
  const [notices, setNotices] = useState([]);

  const loadNotices = async () => {
    try {
      const res = await API.get("/api/notices");

      console.log(res.data.data);

      // only show published notices
      // const filtered = res.data.data.filter((n) => n.status === "published");

      setNotices(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadNotices();
  }, []);

  return (
    <div className="nd-container">
      {notices.map((item, index) => (
        <div className="nd-card" key={item._id}>
          {/* LEFT IMAGE */}
          <div className="nd-imageWrapper">
            <img
              src={
                item.image
                  ? `http://localhost:5000${item.image}`
                  : "/no-image.png"
              }
              alt="notice"
              className="nd-image"
            />

            {/* DATE BADGE */}
            {item.date && (
              <div className="nd-dateBadge">
                {item.date.split("-")[2]} <br />
                {item.date.split("-")[1]} <br />
                {item.date.split("-")[0]}
              </div>
            )}
          </div>

          {/* RIGHT CONTENT */}
          <div className="nd-content">
            <div className="nd-topRow">
              <span className="nd-author">👤 By {item.author}</span>
              <span className="nd-serial">≡ Sl No. {index + 1}</span>
            </div>

            <h2 className="nd-title">{item.title}</h2>

            <p
              className="nd-desc"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />

            <div className="nd-actions">
              {item.links?.length > 0 && (
                <a
                  href={item.links[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="nd-btn nd-linkBtn"
                >
                  🔗 Link
                </a>
              )}

              {item.files?.length > 0 && (
                <a
                  href={`http://localhost:5000${item.files[0]}`}
                  target="_blank"
                  rel="noreferrer"
                  className="nd-btn nd-downloadBtn"
                >
                  ⬇ Download File
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeDetails;
