import React from "react";
import "./NoticeDetails.css";

// import images
import notice1 from "../../assets/notice1.jpg";
import notice2 from "../../assets/notice2.jpg";
import notice3 from "../../assets/notice3.png";

const notices = [
  {
    id: 1,
    title:
      "REGARDING INFORMATION ATMA UTKARSH DHYAN-YOGA CAMP AND THE GUJARAT GAURAV SAMMAN-2026.",
    desc:
      "The list of registered participants, along with further details regarding the 'Atma Utkarsh Dhyan-Yoga Camp' and the Gujarat Gaurav Samman-2026 can be downloaded via the link below.",
    author: "URU Admin Team",
    date: "19 Mar 2026",
    img: notice1,
  },
  {
    id: 2,
    title:
      "INFORMATION REGARDING SATYASHODHAK JOURNALISM GAURAV SAMMAN.",
    desc:
      "On November 9, 2025, in the auditorium of the Thekma Development Block Office, journalists will be honored for their contributions to journalism.",
    author: "URU Admin Team",
    date: "25 Oct 2025",
    img: notice2,
  },
  {
    id: 3,
    title: "ABOUT REGISTERING A UNIQUE RECORD OR ACTIVITY.",
    desc:
      "You can easily register your unique records or activities on the web portal. Registration fee has been fixed at ₹3,693.",
    author: "URU Admin Team",
    date: "1 Sep 2025",
    img: notice3,
  },
];

const NoticeDetails = () => {
  return (
    <div className="nd-container">
      {notices.map((item, index) => (
        <div className="nd-card" key={item.id}>
          {/* LEFT IMAGE */}
          <div className="nd-imageWrapper">
            <img src={item.img} alt="notice" className="nd-image" />

            {/* DATE BADGE */}
            <div className="nd-dateBadge">
              {item.date.split(" ")[0]} <br />
              {item.date.split(" ")[1]} <br />
              {item.date.split(" ")[2]}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="nd-content">
            <div className="nd-topRow">
              <span className="nd-author">👤 By {item.author}</span>
              <span className="nd-serial">≡ Sl No. {index + 1}</span>
            </div>

            <h2 className="nd-title">{item.title}</h2>

            <p className="nd-desc">{item.desc}</p>

            <div className="nd-actions">
              <button className="nd-btn nd-linkBtn">🔗 Link</button>
              <button className="nd-btn nd-downloadBtn">
                ⬇ Download File
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeDetails;