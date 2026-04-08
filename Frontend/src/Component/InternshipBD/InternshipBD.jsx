import React from "react";
import "./InternshipBD.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const InternshipBD = () => {
  return (
    <section className="InternshipBD">
      <img src={bgLines} alt="" className="InternshipBD__bg-lines" />

      <div className="InternshipBD__inner">
        {/* LEFT CONTENT */}
        <div className="InternshipBD__content">
          <div className="InternshipBD__sparkles"></div>

          <div className="InternshipBD__header">
            <h1 className="InternshipBD__title">
              Internship <span>Experience</span>
            </h1>

            <div className="InternshipBD__breadcrumb">
              <span>🏠 Home</span>
              <span>›</span>
              <span>Internship</span>
            </div>
          </div>

          <p className="InternshipBD__subtitle">
            Unlock real-world exposure with our premium internship programs.
            Learn from industry experts, build practical skills, and gain the
            confidence to step into your future career.
          </p>

          <button className="InternshipBD__btn">
            Start Your Journey →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="InternshipBD__visual">
          <div className="InternshipBD__shape"></div>

          <img
            src={studentsImg}
            alt="Internship learning"
            className="InternshipBD__image"
          />
        </div>
      </div>

      {/* CURVE */}
      <div className="InternshipBD__curve">
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

export default InternshipBD;