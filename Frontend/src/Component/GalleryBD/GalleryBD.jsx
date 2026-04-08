import React from "react";
import "./GalleryBD.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const GalleryBD = () => {
  return (
    <section className="GalleryBD">
      <img src={bgLines} alt="" className="GalleryBD__bg-lines" />

      <div className="GalleryBD__inner">
        {/* LEFT CONTENT */}
        <div className="GalleryBD__content">
          <div className="GalleryBD__sparkles" aria-hidden="true">
            <svg
              className="GalleryBD__spark GalleryBD__spark--big"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className="GalleryBD__spark GalleryBD__spark--small"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          {/* TITLE */}
          <h1 className="GalleryBD__title">Gallery</h1>

          {/* ✅ SEO Breadcrumb Line */}
          <div className="GalleryBD__breadcrumb">
            <span className="GalleryBD__home">🏠 Home</span>
            <span className="GalleryBD__divider">›</span>
            <span className="GalleryBD__current">
              Gallery
            </span>
          </div>

          {/* SUBTITLE */}
          <p className="GalleryBD__subtitle">
            Explore real moments from International Institute of Internship showcasing hands-on training, student activities, and practical learning experiences.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="GalleryBD__visual">
          <div className="GalleryBD__shape"></div>

          <img
            src={studentsImg}
            alt="International Institute internship students learning and training gallery"
            className="GalleryBD__image"
          />
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="GalleryBD__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="GalleryBD__curve-svg"
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

export default GalleryBD;