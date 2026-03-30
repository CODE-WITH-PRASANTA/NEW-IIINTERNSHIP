import React from "react";
import { FaUserTie, FaLightbulb, FaUniversity } from "react-icons/fa";
import "./FounderVission.css";

const founderData = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: "Founder & Leadership",
    description:
      "Dr. Avishek Kumar, a renowned literary figure, thinker, educator, researcher, and social activist, serves as the Founder & CMD of the institute.",
    colorClass: "founderCard-green",
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Educational Philosophy",
    description:
      "He believes that education becomes meaningful when it empowers individuals with self-reliance, sensitivity, and a strong sense of social service.",
    colorClass: "founderCard-pink",
  },
  {
    id: 3,
    icon: <FaUniversity />,
    title: "Institutional Vision",
    description:
      "Under his visionary leadership, the International Institute of Internship (i3) was developed as a platform connecting academic knowledge with real-world work experiences.",
    colorClass: "founderCard-blue",
  },
];

const FounderVission = () => {
  return (
    <section className="founderCard-section">
      <div className="founderCard-container">
        {/* Header */}
        <div className="founderCard-header">
          <p className="founderCard-subtitle">FOUNDER'S VISION</p>

          <h2 className="founderCard-title">
            Guiding Thought & <span>Leadership</span>
          </h2>

          <div className="founderCard-underline"></div>
        </div>

        {/* Cards */}
        <div className="founderCard-grid">
          {founderData.map((item) => (
            <div key={item.id} className="founderCard-card">
              <div className={`founderCard-icon ${item.colorClass}`}>
                {item.icon}
              </div>

              <h3 className="founderCard-cardTitle">{item.title}</h3>

              <p className="founderCard-cardDesc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderVission;
