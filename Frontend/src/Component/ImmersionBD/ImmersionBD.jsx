import React from "react";
import "./ImmersionBD.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const ImmersionBD = () => {
  return (
    <section className="ImmersionBD">
      <img src={bgLines} alt="" className="ImmersionBD__bg-lines" />

      <div className="ImmersionBD__inner">
        {/* LEFT CONTENT */}
        <div className="ImmersionBD__content">
          <div className="ImmersionBD__sparkles" aria-hidden="true">
            <svg
              className="ImmersionBD__spark ImmersionBD__spark--big"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className="ImmersionBD__spark ImmersionBD__spark--small"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <div className="ImmersionBD__header">
            <h1 className="ImmersionBD__title">About Us</h1>

            <div className="ImmersionBD__breadcrumb">
              <span className="ImmersionBD__home">🏠 Home</span>
              <span className="ImmersionBD__divider">›</span>
              <span className="ImmersionBD__current">What is Immersion</span>
            </div>
          </div>
          <p className="ImmersionBD__subtitle">
            Best online education platforms offer flexible learning, quality
            courses, and expert instructors.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ImmersionBD__visual">
          <div className="ImmersionBD__shape"></div>

          <img
            src={studentsImg}
            alt="Students learning together"
            className="ImmersionBD__image"
          />
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="ImmersionBD__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="ImmersionBD__curve-svg"
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

export default ImmersionBD;
