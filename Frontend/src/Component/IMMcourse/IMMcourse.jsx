import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineVpnKey } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

import "./IMMcourse.css";

const IMMcourse = () => {
  return (
    <section className="imm-section" aria-labelledby="i3-immersion-heading">
      <div className="imm-container">
        
        {/* Top Heading Area */}
        <div className="imm-header">
          <div className="imm-header-left">
            <h2 id="i3-immersion-heading" className="imm-title">
              What is <br />
              <span>Immersion?</span>
            </h2>
          </div>

          <div className="imm-header-right">
            <p>
              Immersion is an educational, social, and experiential concept
              where an individual completely engages in a subject, environment,
              or activity. It is not merely observation, but active mental,
              emotional, and practical participation that leads to deep and
              meaningful learning.
            </p>
          </div>
        </div>

        <div className="imm-underline"></div>

        {/* Immersion Highlights */}
        <div className="imm-cards-wrapper">
          
          {/* Card 1 */}
          <div className="imm-card">
            <div className="imm-icon imm-icon-green">
              <FaGraduationCap />
            </div>
            <h3>Experiential Learning Approach</h3>
            <p>
              From an educational perspective, immersion means learning through
              real-life experience rather than limiting knowledge to textbooks.
              It connects learners directly to social environments, workplaces,
              and real-world situations — such as rural immersion programs that
              deepen social awareness and perspective.
            </p>
          </div>

          {/* Card 2 */}
          <div className="imm-card">
            <div className="imm-icon imm-icon-red">
              <MdOutlineVpnKey />
            </div>
            <h3>Personal Growth & Human Development</h3>
            <p>
              Immersion encourages natural and spontaneous learning without rigid
              evaluation systems. Individuals reflect, question, and develop
              understanding independently, fostering empathy, self-awareness,
              responsibility, and holistic human development.
            </p>
          </div>

          {/* Card 3 */}
          <div className="imm-card">
            <div className="imm-icon imm-icon-blue">
              <HiOutlineUserGroup />
            </div>
            <h3>Multidimensional Applications</h3>
            <p>
              Immersion is used across education, technology, culture, and
              spirituality. In technology, it includes virtual reality and
              simulations; in cultural contexts, it refers to complete
              submersion in symbolic practices. The core idea remains
              “complete engagement” in every field.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IMMcourse;
