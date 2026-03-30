import React from "react";
import "./SuccessStoryBD.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const SuccessStoryBD = () => {
  return (
    <section className="SuccessStoryBD">
      <img src={bgLines} alt="" className="SuccessStoryBD__bg-lines" />

      <div className="SuccessStoryBD__inner">
        {/* LEFT CONTENT */}
        <div className="SuccessStoryBD__content">
          <div className="SuccessStoryBD__sparkles" aria-hidden="true">
            <svg
              className="SuccessStoryBD__spark SuccessStoryBD__spark--big"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className="SuccessStoryBD__spark SuccessStoryBD__spark--small"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          {/* TITLE */}
          <h1 className="SuccessStoryBD__title">Success Story</h1>

          {/* SUBTITLE */}
          <p className="SuccessStoryBD__subtitle">
            Best online education platforms offer flexible learning, quality
            courses, and expert instructors.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="SuccessStoryBD__visual">
          <div className="SuccessStoryBD__shape"></div>

          <img
            src={studentsImg}
            alt="Students learning together"
            className="SuccessStoryBD__image"
          />
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="SuccessStoryBD__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="SuccessStoryBD__curve-svg"
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

export default SuccessStoryBD;
