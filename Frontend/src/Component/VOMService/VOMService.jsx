import React from "react";
import {
  FaBrain,
  FaLaptopCode,
  FaUsers,
  FaBullhorn,
  FaHeadset,
  FaHandshake,
} from "react-icons/fa";

import "./VOMService.css";

const VOMService = () => {
  return (
    <section className="cbc-section" aria-labelledby="i3-mission-heading">
      <div className="cbc-container">
        
        {/* Small Label */}
        <div className="cbc-subtitle">OUR MISSION</div>

        {/* Main Heading */}
        <h2 id="i3-mission-heading" className="cbc-title">
          Bridging Education, Skills <br />
          & <span>Real-World Impact</span>
        </h2>

        {/* Green underline */}
        <div className="cbc-underline"></div>

        {/* Mission Description */}
        <p className="cbc-description">
          The International Institute of Internship (i3) is committed to bridging
          the gap between academic education and the real world of work through
          purposeful, skill-based, and value-centered internship programs.
          Our mission is to empower students, researchers, and young
          professionals with practical exposure, industry relevance, and
          socially responsible leadership.
        </p>

        {/* Mission Commitments */}
        <div className="cbc-grid">
          
          {/* Card 1 */}
          <div className="cbc-card">
            <div className="cbc-icon cbc-icon-green">
              <FaBrain />
            </div>
            <div>
              <h3>Experiential & Skill-Based Learning</h3>
              <p>
                To mainstream experiential learning, structured internships,
                and skill-based education in alignment with the spirit of the
                New National Education Policy (NEP) 2020.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cbc-card">
            <div className="cbc-icon cbc-icon-red">
              <FaLaptopCode />
            </div>
            <div>
              <h3>Career-Ready & Future-Focused Youth</h3>
              <p>
                To prepare students and researchers for dynamic careers through
                live projects, field exposure, research opportunities, and
                industry-relevant internship programs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cbc-card">
            <div className="cbc-icon cbc-icon-purple">
              <FaUsers />
            </div>
            <div>
              <h3>Collaborative Ecosystem Development</h3>
              <p>
                To build meaningful collaborations between educational
                institutions, industry partners, social organizations,
                and research bodies at national and international levels.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="cbc-card">
            <div className="cbc-icon cbc-icon-yellow">
              <FaBullhorn />
            </div>
            <div>
              <h3>Leadership & Ethical Development</h3>
              <p>
                To cultivate leadership qualities, innovative thinking,
                professional discipline, and strong ethical values
                among young individuals.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="cbc-card">
            <div className="cbc-icon cbc-icon-blue">
              <FaHeadset />
            </div>
            <div>
              <h3>Social Impact & Community Engagement</h3>
              <p>
                To promote responsible citizenship through projects connected
                to real societal needs, community engagement initiatives,
                and socially impactful internship programs.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="cbc-card">
            <div className="cbc-icon cbc-icon-pink">
              <FaHandshake />
            </div>
            <div>
              <h3>Immersion & Personal Empowerment</h3>
              <p>
                To empower individuals through structured immersion programs
                that enhance confidence, competence, and contribution to
                both personal growth and societal development.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="cbc-btn-wrapper">
          <button className="cbc-btn">
            Explore Our Internship Programs <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VOMService;
