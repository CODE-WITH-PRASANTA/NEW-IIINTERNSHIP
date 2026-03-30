import React, { useEffect, useRef, useState } from "react";
import "./VOMEnroll.css";

const statsData = [
  { value: 19300, label: "STUDENT ENROLLED", suffix: "K", display: "19.3K" },
  { value: 12400, label: "CLASS COMPLETED", suffix: "K", display: "12.4K" },
  { value: 100, label: "SATISFACTION RATE", suffix: "%", display: "100%" },
  { value: 300, label: "TOP INSTRUCTORS", suffix: "+", display: "300+" },
];

const VOMEnroll = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animateCount = () => {
      const duration = 2000;
      const frameRate = 16;
      const totalFrames = duration / frameRate;

      statsData.forEach((stat, index) => {
        let frame = 0;
        const increment = stat.value / totalFrames;

        const counter = setInterval(() => {
          frame++;
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.min(
              Math.floor(increment * frame),
              stat.value
            );
            return updated;
          });

          if (frame >= totalFrames) clearInterval(counter);
        }, frameRate);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          animateCount();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num, index) => {
    const stat = statsData[index];

    if (stat.suffix === "K") {
      return (num / 1000).toFixed(1) + "K";
    }

    if (stat.suffix === "%") {
      return num + "%";
    }

    if (stat.suffix === "+") {
      return num + "+";
    }

    return num;
  };

  return (
    <section className="esc-section" ref={sectionRef}>
      <div className="esc-container">
        {statsData.map((stat, index) => (
          <div key={index} className="esc-item">
            <h2 className="esc-number">
              {formatNumber(counts[index], index)}
            </h2>
            <p className="esc-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VOMEnroll;
