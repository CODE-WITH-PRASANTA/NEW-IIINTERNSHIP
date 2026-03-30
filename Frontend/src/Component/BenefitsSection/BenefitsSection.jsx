import React from "react";
import { FaGraduationCap, FaKey, FaChalkboardTeacher } from "react-icons/fa";
import "./BenefitsSection.css";

const benefits = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "NEP 2020 Aligned Internships",
    description:
      "In alignment with the National Education Policy (NEP) 2020, IIInternship provides 80–120 hours of structured internship programs to ensure practical and experiential learning for undergraduate students.",
    colorClass: "BenefitSec-green",
  },
  {
    id: 2,
    icon: <FaKey />,
    title: "Multidisciplinary & Skill-Based Learning",
    description:
      "We promote multidisciplinary education with skill-oriented training, connecting students to real-world work experience, fieldwork, research exposure, and professional internships.",
    colorClass: "BenefitSec-pink",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    title: "Learn by Doing – Earn While Learning",
    description:
      "Our programs emphasize 'Earn While Learning' and hands-on training, encouraging students to develop practical knowledge, discipline, and career readiness through experiential learning.",
    colorClass: "BenefitSec-blue",
  },
];

const BenefitsSection = () => {
  return (
    <section className="BenefitSec-container">
      <div className="BenefitSec-header">
        <p className="BenefitSec-subtitle">ALIGNMENT WITH NEP 2020</p>
        <h2 className="BenefitSec-title">
          Education Designed for <span>Experiential Learning</span>
        </h2>
        <div className="BenefitSec-underline"></div>
      </div>

      <div className="BenefitSec-grid">
        {benefits.map((item, index) => (
          <div
            key={item.id}
            className={`BenefitSec-card ${item.colorClass}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className={`BenefitSec-icon ${item.colorClass}`}>
              {item.icon}
            </div>
            <h3 className="BenefitSec-cardTitle">{item.title}</h3>
            <p className="BenefitSec-cardDesc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
