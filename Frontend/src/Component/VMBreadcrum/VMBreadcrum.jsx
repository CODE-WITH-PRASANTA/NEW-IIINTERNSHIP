import React from "react";
import "./VMBreadcrum.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const VMBreadcrum = () => {
  return (
    <section className="VMBreadcrum">
      <img src={bgLines} alt="" className="VMBreadcrum__bg-lines" />

      <div className="VMBreadcrum__inner">
        {/* LEFT CONTENT */}
        <div className="VMBreadcrum__content">

          {/* TAG */}
          <div className="VMBreadcrum__tag">✨ Vision & Mission</div>

          {/* SPARKLES */}
          <div className="VMBreadcrum__sparkles" aria-hidden="true">
            <span className="spark"></span>
            <span className="spark small"></span>
          </div>

          <div className="VMBreadcrum__header">
            {/* ✅ Updated Heading */}
            <h2 className="VMBreadcrum__title">Vision & Mission</h2>

            {/* BREADCRUMB */}
            <div className="VMBreadcrum__breadcrumb">
              <span className="VMBreadcrum__home">🏠 Home</span>
              <span className="VMBreadcrum__divider">/</span>
              <span className="VMBreadcrum__current">Vision & Mission</span>
            </div>

            {/* ✅ SEO CONTENT (1 line) */}
            <p className="VMBreadcrum__subtitle">
              Explore the Vision & Mission of International Institute, focused on delivering quality education, innovation, and global learning excellence.
            </p>
          </div> {/* ✅ FIX ADDED HERE (CLOSING HEADER) */}

        </div>

        {/* RIGHT IMAGE */}
        <div className="VMBreadcrum__visual">
          <div className="VMBreadcrum__shape"></div>

          <img
            src={studentsImg}
            alt="International Institute students vision and mission learning"
            className="VMBreadcrum__image"
          />
        </div>
      </div>

      {/* CURVE */}
      <div className="VMBreadcrum__curve">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path
            d="M0,125 C260,145 520,78 790,92 C1020,104 1225,70 1440,62 L1440,180 L0,180 Z"
            fill="#f4efea"
          />
        </svg>
      </div>
    </section>
  );
};

export default VMBreadcrum;