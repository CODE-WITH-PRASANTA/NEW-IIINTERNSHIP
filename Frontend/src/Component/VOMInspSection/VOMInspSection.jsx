import React from "react";
import "./VOMInspSection.css";
import imgMain from "../../assets/about-111.webp";
import imgSmall from "../../assets/project-1.webp";

const VOMInspSection = () => {
  return (
    <section className="vominspSection-wrapper">
      <div className="vominspSection-container">

        {/* LEFT CONTENT */}
        <div className="vominspSection-content">
          <p className="vominspSection-subtitle">
            INSPIRATION & GUIDING THOUGHT
          </p>

          <h2 className="vominspSection-title">
            Vision That <span>Inspires Growth</span>
          </h2>

          <div className="vominspSection-underline"></div>

          {/* Short & Refined Vision Content */}
          <p className="vominspSection-text">
            <strong>Shaping Futures Through Experience & Purpose.</strong>
            <br /><br />
            The International Institute of Internship (i3) is dedicated to
            providing meaningful, experience-driven learning opportunities that
            prepare students for real-world challenges. We focus on developing
            professional skills, ethical values, leadership qualities, and global
            perspectives through structured internships and guided mentorship.
            Our vision is to bridge the gap between education and industry while
            nurturing confident, responsible, and future-ready professionals.
          </p>

        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="vominspSection-imageWrapper">

          {/* Decorative Elements */}
          <div className="vominspSection-dots"></div>
          <div className="vominspSection-circle"></div>

          {/* Main Image */}
          <div className="vominspSection-mainImage">
            <img
              src={imgMain}
              alt="International Institute of I3 Internship experiential learning program"
            />
          </div>

          {/* Small Overlapping Image */}
          <div className="vominspSection-smallImage">
            <img
              src={imgSmall}
              alt="Vision and mission inspiration for student internship development"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default VOMInspSection;
