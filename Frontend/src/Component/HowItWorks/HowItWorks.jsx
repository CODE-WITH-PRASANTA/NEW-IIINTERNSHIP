import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    title: "Real-World Work Experience",
    text: "Gain practical industry exposure beyond academic learning and discover if your chosen field is the right career path.",
  },
  {
    id: 2,
    title: "Skill & Confidence Development",
    text: "Build professional skills, self-confidence, and a strong workplace mindset through structured learning.",
  },
  {
    id: 3,
    title: "Networking & Career Opportunities",
    text: "Connect with professionals, mentors, and organizations to expand your career possibilities.",
  },
  {
    id: 4,
    title: "Certification & Resume Strengthening",
    text: "Enhance your resume with meaningful internship experience and an official certificate.",
  },
];

export default function HowItWorks() {
  return (
    <section className="hoeitworks" aria-labelledby="internship-benefits">
      <div className="hoeitworks-left">
        <p className="hoeitworks-subtitle">— BENEFITS OF INTERNSHIPS</p>

        <h2 className="hoeitworks-title" id="internship-benefits">
          Internship at International Institute of Internship (i3)
        </h2>

        <p className="hoeitworks-desc">
          More Than Just Training — A Structured Learning Experience.
        </p>

        <p className="hoeitworks-text">
          Internships at the International Institute of Internship (i3) are not
          just formal training programs. They are structured learning processes
          that include mentorship, guidance, evaluation, and real-world
          exposure. Our internships positively impact both your career growth
          and society.
        </p>

        <div className="hoeitworks-readybox">
          <h3>Why Choose i3 Internship?</h3>
          <p>
            An internship is not just preparation for the future — it is the
            first step toward building your future with purpose.
          </p>

          <button className="hoeitworks-button">APPLY NOW</button>

          <p className="hoeitworks-query">
            Learning by Doing. Growing with Purpose. Building Careers.
          </p>
        </div>
      </div>

      <div className="hoeitworks-right">
        <div className="hoeitworks-line"></div>

        {steps.map((step) => (
          <div className="hoeitworks-step" key={step.id}>
            <div className="hoeitworks-circle">{step.id}</div>
            <div className={`hoeitworks-card ${step.id <= 2 ? "active" : ""}`}>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SEO Hidden Content */}
      
    </section>
  );
}
