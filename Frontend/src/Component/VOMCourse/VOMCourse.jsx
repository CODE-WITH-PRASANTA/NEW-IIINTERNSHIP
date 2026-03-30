import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineVpnKey } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

import "./VOMCourse.css";

const VOMCourse = () => {
  return (
    <section className="oqc-section" aria-labelledby="i3-vision-heading">
      <div className="oqc-container">
        
        {/* Top Heading Area */}
        <div className="oqc-header">
          <div className="oqc-header-left">
            <h2 id="i3-vision-heading" className="oqc-title">
              Vision of the <br />
              <span>International Institute of Internship (i3)</span>
            </h2>
          </div>

          <div className="oqc-header-right">
            <p>
              The International Institute of Internship (i3) envisions a future
              where education extends beyond traditional classrooms and connects
              directly with real-world industry experience. We believe learning
              should transform knowledge into practical exposure, empowering
              students to develop innovation, leadership, and professional
              confidence in a globally competitive environment.
            </p>
          </div>
        </div>

        <div className="oqc-underline"></div>

        {/* Vision Highlights */}
        <div className="oqc-cards-wrapper">
          
          {/* Card 1 */}
          <div className="oqc-card">
            <div className="oqc-icon oqc-icon-green">
              <FaGraduationCap />
            </div>
            <h3>Experiential & Industry-Linked Learning</h3>
            <p>
              We promote structured internship programs that bridge academic
              knowledge with real-world industry practices. Our approach ensures
              students gain hands-on experience, practical skills, and career
              readiness aligned with national and international standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="oqc-card">
            <div className="oqc-icon oqc-icon-red">
              <MdOutlineVpnKey />
            </div>
            <h3>Innovation, Leadership & Self-Reliance</h3>
            <p>
              At i3 Internship, knowledge evolves into experience, and experience
              drives innovation. We nurture self-reliant, confident individuals
              equipped with leadership qualities, critical thinking abilities,
              and a solution-oriented mindset.
            </p>
          </div>

          {/* Card 3 */}
          <div className="oqc-card">
            <div className="oqc-icon oqc-icon-blue">
              <HiOutlineUserGroup />
            </div>
            <h3>Global Perspective with Ethical Values</h3>
            <p>
              The International Institute of Internship develops young
              professionals from India and across the world into competitive
              individuals prepared for global platforms, while upholding strong
              ethical principles, social responsibility, and community awareness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VOMCourse;
