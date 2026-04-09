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
            <span className="ImmersionBD__spark ImmersionBD__spark--big"></span>
            <span className="ImmersionBD__spark ImmersionBD__spark--small"></span>
          </div>

          <div className="ImmersionBD__header">
            {/* ✅ Updated Heading */}
            <h2 className="ImmersionBD__title">What is Immersion</h2>

            <div className="ImmersionBD__breadcrumb">
              <span className="ImmersionBD__home">🏠 Home</span>
              <span className="ImmersionBD__divider">›</span>
              <span className="ImmersionBD__current">Immersion</span>
            </div>
          </div>

          {/* ✅ SEO CONTENT */}
          <p className="ImmersionBD__subtitle">
            Learn what immersion means at International Institute, where practical learning, real-world exposure, and hands-on experience empower students for future success.
          </p>

          <button className="ImmersionBD__btn">
            Explore More →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ImmersionBD__visual">
          <div className="ImmersionBD__shape"></div>

          <img
            src={studentsImg}
            alt="International Institute immersive learning experience"
            className="ImmersionBD__image"
          />
        </div>
      </div>

      {/* CURVE */}
      <div className="ImmersionBD__curve">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path
            d="M0,125 C260,145 520,78 790,92 C1020,104 1225,70 1440,62 L1440,180 L0,180 Z"
            fill="#f8f5f0"
          />
        </svg>
      </div>
    </section>
  );
};

export default ImmersionBD;