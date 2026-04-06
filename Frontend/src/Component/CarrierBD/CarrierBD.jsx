import React from "react";
import "./CarrierBD.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const CarrierBD = () => {
  return (
    <section className="CarrierBD">
      <img src={bgLines} alt="" className="CarrierBD__bg-lines" />

      <div className="CarrierBD__inner">
        {/* LEFT CONTENT */}
        <div className="CarrierBD__content">
          <div className="CarrierBD__sparkles" aria-hidden="true">
            <svg
              className="CarrierBD__spark CarrierBD__spark--big"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className="CarrierBD__spark CarrierBD__spark--small"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          {/* TITLE */}
          <h1 className="CarrierBD__title">Recruitment</h1>

          {/* SUBTITLE */}
          <p className="CarrierBD__subtitle">
            Best online education platforms offer flexible learning, quality
            courses, and expert instructors.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="CarrierBD__visual">
          <div className="CarrierBD__shape"></div>

          <img
            src={studentsImg}
            alt="Students learning together"
            className="CarrierBD__image"
          />
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="CarrierBD__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="CarrierBD__curve-svg"
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

export default CarrierBD;
