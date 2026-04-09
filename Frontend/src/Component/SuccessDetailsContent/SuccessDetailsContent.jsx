import React from "react";
import "./SuccessDetailsContent.css";

import img1 from "../../assets/blog-large1.jpg";
import img2 from "../../assets/blog-large2.jpg";

const data = [
  {
    id: 1,
    img: img1,
    category: "English, Teachers, Shelly",
    date: "17/09/2020",
    author: "Admin",
    tag: "Teachers, School",
    title: "Standard Post Sticky",
    desc:
      "Nullam erat dolor, hendrerit id turpis laoreet, congue dapibus odio. Duis tempor eros tortor, a ornare arcu egestas quis. Donec vehicula eget quam maximus interdum.",
  },
  {
    id: 2,
    img: img2,
    category: "English, Teachers, Shelly",
    date: "17/09/2020",
    author: "Admin",
    tag: "Teachers, School",
    title: "Standard Post Format",
    desc:
      "Nullam erat dolor, hendrerit id turpis laoreet, congue dapibus odio. Duis tempor eros tortor, a ornare arcu egestas quis. Donec vehicula eget quam maximus interdum.",
  },
];

const SuccessDetailsContent = () => {
  return (
    <div className="ssdc-container">
      {data.map((item) => (
        <div key={item.id} className="ssdc-card">
          
          {/* IMAGE */}
          <div className="ssdc-imageWrap">
            <img src={item.img} alt="" className="ssdc-image" />

            <span className="ssdc-badge">{item.category}</span>
          </div>

          {/* META */}
          <div className="ssdc-meta">
            <span>{item.date}</span>
            <span className="ssdc-dot">•</span>
            <span>by {item.author}</span>
            <span className="ssdc-dot">•</span>
            <span className="ssdc-tag">{item.tag}</span>
          </div>

          {/* TITLE */}
          <h2 className="ssdc-title">
            <span className="ssdc-bullet"></span>
            {item.title}
          </h2>

          {/* DESC */}
          <p className="ssdc-desc">{item.desc}</p>

          {/* READ */}
          <a href="#" className="ssdc-read">
            Read →
          </a>
        </div>
      ))}
    </div>
  );
};

export default SuccessDetailsContent;