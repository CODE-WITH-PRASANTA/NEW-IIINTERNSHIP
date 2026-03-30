import React from "react";
import {
  FaBrain,
  FaPaintBrush,
  FaCode,
  FaHeartbeat,
  FaDatabase,
  FaBullhorn,
  FaHandshake,
  FaLaptopCode,
  FaCamera,
} from "react-icons/fa";
import "./IMMcatagory.css";

const categories = [
  {
    title: "Business Management",
    description: "Leadership, strategy & global management exposure.",
    icon: <FaBrain />,
    color: "#0ea5a4",
  },
  {
    title: "Arts & Design",
    description: "Creative innovation & visual storytelling skills.",
    icon: <FaPaintBrush />,
    color: "#e11d48",
  },
  {
    title: "Personal Development",
    description: "Build confidence, mindset & communication.",
    icon: <FaCode />,
    color: "#16a34a",
  },
  {
    title: "Health & Wellness",
    description: "Holistic health awareness & practical training.",
    icon: <FaHeartbeat />,
    color: "#f59e0b",
  },
  {
    title: "Data Science",
    description: "Analytics, AI & real-world data projects.",
    icon: <FaDatabase />,
    color: "#7c3aed",
  },
  {
    title: "Marketing",
    description: "Digital branding & modern growth strategies.",
    icon: <FaBullhorn />,
    color: "#ec4899",
  },
  {
    title: "Business & Finance",
    description: "Financial literacy & corporate exposure.",
    icon: <FaHandshake />,
    color: "#4f46e5",
  },
  {
    title: "Computer Science",
    description: "Coding, development & tech innovation.",
    icon: <FaLaptopCode />,
    color: "#f97316",
  },
  {
    title: "Video & Photography",
    description: "Media production & creative documentation.",
    icon: <FaCamera />,
    color: "#0ea5e9",
  },
];

const IMMcatagory = () => {
  return (
    <section className="i3-immersion-section">
      <div className="i3-immersion-container">
        <h2 className="i3-immersion-title">
          Top Immersion Categories
        </h2>

        <div className="i3-immersion-underline"></div>

        <p className="i3-immersion-subtitle">
          Explore industry-focused immersion programs at the 
          International Institute of i3 Internship designed to provide 
          hands-on learning, real-world exposure, leadership development 
          and career-ready skills for students and young professionals.
        </p>

        <div className="i3-immersion-grid">
          {categories.map((item, index) => (
            <div
              key={index}
              className="i3-immersion-card"
              style={{
                "--icon-color": item.color,
              }}
            >
              <div
                className="i3-immersion-icon"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="i3-immersion-card-title">
                  {item.title}
                </h4>
                <p className="i3-immersion-card-desc">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IMMcatagory;
