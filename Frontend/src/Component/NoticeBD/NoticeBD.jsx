import React from "react";
import "./NoticeBD.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const NoticeBD = () => {
  return (
    <section className="NoticeBD">
      <img src={bgLines} alt="" className="NoticeBD__bg-lines" />

      <div className="NoticeBD__inner">
        {/* LEFT CONTENT */}
        <div className="NoticeBD__content">
          <div className="NoticeBD__sparkles" aria-hidden="true">
            <svg
              className="NoticeBD__spark NoticeBD__spark--big"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className="NoticeBD__spark NoticeBD__spark--small"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          {/* TITLE */}
          <h1 className="NoticeBD__title">Notices</h1>

          {/* SUBTITLE */}
          <p className="NoticeBD__subtitle">
            Stay informed with the latest II (Industrial Internship) notices, including important announcements, application schedules, eligibility details, and guidelines. Check regularly for updates on internship opportunities, submission deadlines, and official instructions to ensure a smooth application process.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="NoticeBD__visual">
          <div className="NoticeBD__shape"></div>

          <img
            src={studentsImg}
            alt="Students learning together"
            className="NoticeBD__image"
          />
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="NoticeBD__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="NoticeBD__curve-svg"
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

export default NoticeBD;
