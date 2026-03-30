// StatsSection.jsx
import React, { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaThumbsUp,
  FaUserTie,
} from "react-icons/fa";
import "./StatsSection.css";

const stats = [
  {
    id: 1,
    icon: <FaUserGraduate />,
    value: 2930,
    label: "Students Enrolled",
    colorClass: "teal",
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher />,
    value: 3240,
    label: "Classes Completed",
    colorClass: "coral",
  },
  {
    id: 3,
    icon: <FaThumbsUp />,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    colorClass: "lime",
  },
  {
    id: 4,
    icon: <FaUserTie />,
    value: 354,
    label: "Expert Instructors",
    colorClass: "amber",
  },
];

const useCounter = (target, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 20);
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start > target) start = target;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

const Particles = () => {
  const dots = Array.from({ length: 40 }, (_, i) => i);
  return (
    <div className="statssection-particles-container">
      {dots.map((dot) => (
        <div
          key={dot}
          className="statssection-particle"
          style={{
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`,
            animationDuration: `${50 + Math.random() * 20}s`, // slowed motion
          }}
        />
      ))}
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="statssection">
      <Particles />
      <div className="statssection-grid">
        {stats.map((item, index) => {
          const count = useCounter(item.value, 3000);
          return (
            <div
              key={item.id}
              className={`statssection-card ${item.colorClass}`}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <div className="statssection-bg-glow"></div>
              <div className="statssection-icon">{item.icon}</div>
              <h3 className="statssection-number">
                {count.toLocaleString()}
                {item.suffix || ""}
                {(item.id === 1 || item.id === 2) && "K"}
              </h3>
              <p className="statssection-label">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
