import React from "react";
import {
  FaUniversity,
  FaLightbulb,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";
import "./PurposeSection.css";

const purposeData = [
  {
    id: 1,
    icon: <FaUniversity />,
    title: "Quality Internship Programs",
    description:
      "Provide quality, purposeful, and value-based internships and immersion programs.",
    colorClass: "i3Purpose-green",
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Leadership & Innovation",
    description:
      "Develop leadership, innovation, and social responsibility among youth.",
    colorClass: "i3Purpose-red",
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: "Education to Employment",
    description:
      "Bridge the gap between education and employment through structured experiential learning.",
    colorClass: "i3Purpose-blue",
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Hybrid & Global Collaboration",
    description:
      "Conduct internship programs at nominal fees on-campus and in hybrid online mode, collaborating nationally and internationally.",
    colorClass: "i3Purpose-purple",
  },
];

const PurposeSection = () => {
  return (
    <section className="i3Purpose-section">
      <div className="i3Purpose-container">

        {/* TOP HEADING AREA */}
        <div className="i3Purpose-header">

          <div className="i3Purpose-headingLeft">
            <h2 className="i3Purpose-title">
              Moving Forward With <span>Purpose</span>
            </h2>
            <div className="i3Purpose-underline"></div>
          </div>

          <div className="i3Purpose-headingRight">
            <p>
              Today, the International Institute of Internship continues to
              collaborate with educational institutions, universities, social
              organizations, and professional platforms nationally and
              internationally to create meaningful opportunities for youth.
            </p>
          </div>

        </div>

        {/* CARDS GRID */}
        <div className="i3Purpose-grid">
          {purposeData.map((item) => (
            <div key={item.id} className="i3Purpose-card">

              <div className={`i3Purpose-icon ${item.colorClass}`}>
                {item.icon}
              </div>

              <h3 className="i3Purpose-cardTitle">
                {item.title}
              </h3>

              <p className="i3Purpose-cardDesc">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>

      {/* Decorative Dots */}
      <div className="i3Purpose-dotsLeft"></div>
      <div className="i3Purpose-dotsRight"></div>

    </section>
  );
};

export default PurposeSection;
