import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./IMMcreative.css";

const IMMcreative = () => {
  return (
    <section className="imm-simple-section">
      <div className="imm-simple-container">

        <h2 className="imm-simple-title">
          Internship vs Immersion <br /> – Key Differences
        </h2>

        <div className="imm-simple-underline"></div>

        <div className="imm-simple-grid">

          {/* LEFT SIDE - INTERNSHIP */}
          <div className="imm-simple-column">
            <h3 className="imm-simple-heading internship">
              Internship
            </h3>

            <ul className="imm-simple-list">
              <li><strong>Concept:</strong> Professional training through real project work.</li>
              <li><strong>Objective:</strong> Build practical skills and career readiness.</li>
              <li><strong>Learning Method:</strong> Learning through structured work.</li>
              <li><strong>Responsibilities:</strong> Clear tasks and defined goals.</li>
              <li><strong>Duration:</strong> Fixed period (1–6 months).</li>
              <li><strong>Evaluation:</strong> Performance-based assessment and certificate.</li>
              <li><strong>Employment:</strong> Directly linked to career growth.</li>
              <li><strong>Examples:</strong> IT, media, NGO internships.</li>
            </ul>
          </div>

          {/* RIGHT SIDE - IMMERSION */}
          <div className="imm-simple-column">
            <h3 className="imm-simple-heading immersion">
              Immersion
            </h3>

            <ul className="imm-simple-list">
              <li><strong>Concept:</strong> Deep learning through experience and reflection.</li>
              <li><strong>Objective:</strong> Develop perspective and social sensitivity.</li>
              <li><strong>Learning Method:</strong> Learning through lived exposure.</li>
              <li><strong>Responsibilities:</strong> Limited or observational role.</li>
              <li><strong>Duration:</strong> Short-term or objective-based.</li>
              <li><strong>Evaluation:</strong> Formal assessment not always required.</li>
              <li><strong>Employment:</strong> Not directly job-oriented.</li>
              <li><strong>Examples:</strong> Rural, community, teacher immersion.</li>
            </ul>
          </div>

        </div>

        <button className="imm-simple-btn">
          Learn More <FaArrowRight />
        </button>

      </div>
    </section>
  );
};

export default IMMcreative;
