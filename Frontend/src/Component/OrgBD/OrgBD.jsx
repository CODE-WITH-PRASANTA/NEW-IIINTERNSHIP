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
          <div className="OrgBD__tag">✨ Our Story</div>

          <div className="OrgBD__sparkles" aria-hidden="true">
            <span className="spark"></span>
            <span className="spark small"></span>
          </div>

          <h1 className="OrgBD__title">
            Crafting Future <br />
            <span>Through Education</span>
          </h1>

          <div className="OrgBD__breadcrumb">
            <span className="OrgBD__home">🏠 Home</span>
            <span className="OrgBD__divider">/</span>
            <span className="OrgBD__current">About Us</span>
          </div>

          <p className="OrgBD__subtitle">
            We create a powerful learning ecosystem where innovation meets
            education. Our platform delivers premium courses, flexible learning,
            and expert mentorship to empower your journey.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="OrgBD__visual">
          <div className="OrgBD__shape"></div>

          <img
            src={studentsImg}
            alt="Students learning together"
            className="OrgBD__image"
          />
        </div>
      </div>

      <div className="OrgBD__curve">
        <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
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