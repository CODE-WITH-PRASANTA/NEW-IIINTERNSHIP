import React, { useEffect } from "react";
import "./StepsTimeline.css";
import { FaUserGraduate, FaCalendarAlt, FaLaptopCode, FaAward } from "react-icons/fa";

const StepsTimeline = () => {
const steps = [
  {
    title: "Apply classroom knowledge in practice.",
    description:
      "Internships allow students to translate academic concepts into practical tasks, helping them understand how theories function in real professional environments and industry settings.",
    icon: <FaUserGraduate />,
    label: "STEP 1 — PRACTICAL APPLICATION",
    active: true,
  },
  {
    title: "Understand real-world work situations.",
    description:
      "Through structured exposure to workplace scenarios, team collaboration, and project execution, interns gain insight into real-world expectations and professional responsibilities.",
    icon: <FaCalendarAlt />,
    label: "STEP 2 — INDUSTRY EXPOSURE",
    active: false,
  },
  {
    title: "Learn professional discipline and work culture.",
    description:
      "Internship experience introduces students to deadlines, accountability, communication standards, and ethical work practices essential for long-term career growth.",
    icon: <FaLaptopCode />,
    label: "STEP 3 — PROFESSIONAL DEVELOPMENT",
    active: false,
  },
  {
    title: "Develop confidence and decision-making skills.",
    description:
      "By handling responsibilities, solving real problems, and contributing to meaningful projects, interns build confidence, leadership ability, and independent decision-making skills.",
    icon: <FaAward />,
    label: "STEP 4 — PERSONAL & CAREER GROWTH",
    active: false,
  },
];


  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Why Internship Matters
</h2>
      <p className="timeline-subtitle">
       In modern times, employers look not only at degrees but also at the ability to perform the job. <br />
Internships provide young people with the opportunity to—
      </p>

      <div className="timeline-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
              step.active ? "active" : ""
            }`}
          >
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <div className="timeline-icon">{step.icon}</div>
            <span className="timeline-label">{step.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsTimeline;
