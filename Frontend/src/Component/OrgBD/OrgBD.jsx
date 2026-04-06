import React from "react";
import "./OrgBD.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const OrgBD = () => {
  return (
    <section className="OrgBD">
      <img src={bgLines} alt="" className="OrgBD__bg-lines" />

      <div className="OrgBD__inner">
        {/* LEFT CONTENT */}
        <div className="OrgBD__content">
          <div className="OrgBD__sparkles" aria-hidden="true">
            <svg
              className="OrgBD__spark OrgBD__spark--big"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className="OrgBD__spark OrgBD__spark--small"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <div className="OrgBD__header">
            {/* ✅ Updated Heading */}
            <h1 className="OrgBD__title">Organization History</h1>

            <div className="OrgBD__breadcrumb">
              <span className="OrgBD__home">🏠 Home</span>
              <span className="OrgBD__divider">›</span>
              <span className="OrgBD__current">Organization History</span>
            </div>
          </div>

          {/* ✅ SEO CONTENT */}
        

          <p className="OrgBD__subtitle">
            The International Institute has built a strong reputation through
            its commitment to excellence, advanced training programs, and
            student-focused growth over the years.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="OrgBD__visual">
          <div className="OrgBD__shape"></div>

          <img
            src={studentsImg}
            alt="International Institute students learning and growing together"
            className="OrgBD__image"
          />
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="OrgBD__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="OrgBD__curve-svg"
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

export default OrgBD;