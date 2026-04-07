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
          <div className="VMBreadcrum__sparkles" aria-hidden="true">
            <svg
              className="VMBreadcrum__spark VMBreadcrum__spark--big"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className="VMBreadcrum__spark VMBreadcrum__spark--small"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <div className="VMBreadcrum__header">
            {/* ✅ Updated Heading */}
            <h2 className="VMBreadcrum__title">Vision & Mission</h2>

            <div className="VMBreadcrum__breadcrumb">
              <span className="VMBreadcrum__home">🏠 Home</span>
              <span className="VMBreadcrum__divider">›</span>
              <span className="VMBreadcrum__current">Vision & Mission</span>
            </div>
          </div>

          {/* ✅ SEO CONTENT (1 line) */}
          <p className="VMBreadcrum__subtitle">
            Explore the Vision & Mission of International Institute, focused on delivering quality education, innovation, and global learning excellence.
          </p>
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

      {/* BOTTOM CURVE */}
      <div className="VMBreadcrum__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="VMBreadcrum__curve-svg"
        >
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