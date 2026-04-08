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
<<<<<<< HEAD
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
=======
          <div className="InternshipBD__sparkles" aria-hidden="true">
            <svg
              className="InternshipBD__spark InternshipBD__spark--big"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className="InternshipBD__spark InternshipBD__spark--small"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <div className="InternshipBD__header">
            {/* ✅ Updated Heading */}
            <h1 className="InternshipBD__title">What is Internship</h1>

            <div className="InternshipBD__breadcrumb">
              <span className="InternshipBD__home">🏠 Home</span>
              <span className="InternshipBD__divider">›</span>
              <span className="InternshipBD__current">What is Internship</span>
            </div>
          </div>

          {/* ✅ SEO CONTENT */}
          <p className="InternshipBD__subtitle">
            Understand what an internship is at International Institute, where students gain real-world experience, industry exposure, and practical skills for career success.
>>>>>>> 03fb6ca3ccca318bfb1532a3d8f03035f369ff3d
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
<<<<<<< HEAD
            alt="Internship learning"
=======
            alt="International Institute internship training and practical learning"
>>>>>>> 03fb6ca3ccca318bfb1532a3d8f03035f369ff3d
            className="InternshipBD__image"
          />
        </div>
      </div>

<<<<<<< HEAD
      {/* CURVE */}
      <div className="InternshipBD__curve">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
=======
      {/* BOTTOM CURVE */}
      <div className="InternshipBD__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="InternshipBD__curve-svg"
        >
>>>>>>> 03fb6ca3ccca318bfb1532a3d8f03035f369ff3d
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