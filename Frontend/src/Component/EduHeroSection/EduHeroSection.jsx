import React from "react";
import "./EduHeroSection.css";
import mainImage from "../../assets/grid7.webp";

const EduHeroSection = () => {
  return (
    <section className="eduhero-section" aria-labelledby="immersion-experience-heading">
      <div className="eduhero-container">
        
        {/* LEFT CONTENT */}
        <div className="eduhero-left">
          <span className="eduhero-welcome">
            INTERNATIONAL INSTITUTE OF INTERNSHIP (i3)
          </span>

          <h1
            className="eduhero-heading"
            id="immersion-experience-heading"
          >
            Experience Learning
            <br />
            Through Real-World
            <br />
            Immersion Programs
          </h1>
        </div>

        {/* RIGHT CONTENT */}
        <div className="eduhero-right">
          <h2 className="eduhero-subheading">
            Where academic understanding meets practical exposure and meaningful engagement.
          </h2>

          <p className="eduhero-description">
            At the International Institute of Internship (i3), immersion
            programs are designed to bridge the gap between classroom theory
            and professional practice. Students engage directly with real
            environments, institutions, and communities to gain authentic
            learning experiences.
          </p>

          

          <ul className="eduhero-list">
            <li>✔ Hands-On Professional Exposure</li>
            <li>✔ Mentorship & Guided Field Experience</li>
            <li>✔ Career Readiness & Skill Enhancement</li>
          </ul>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="eduhero-image-wrapper">
        <img
          src={mainImage}
          alt="Students gaining practical exposure through immersion programs at International Institute of Internship i3"
          className="eduhero-main-image"
        />
      </div>
    </section>
  );
};

export default EduHeroSection;
