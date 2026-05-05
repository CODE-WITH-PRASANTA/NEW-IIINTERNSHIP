import React, { useState, useRef, useEffect } from "react";
import "./ConditionTerm.css";

const sections = [
  "Introduction",
  "Eligibility",
  "Responsibilities",
  "Confidentiality",
  "Privacy Policy",
  "Code of Conduct",
  "Termination",
];

const ConditionTerm = () => {
  const [accepted, setAccepted] = useState(false);
  const [active, setActive] = useState("Introduction");
  const [progress, setProgress] = useState(0);

  const sectionRefs = useRef({});

  const handleScrollTo = (section) => {
    sectionRefs.current[section]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActive(section);
  };

  // Scroll Spy + Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progressPercent = (scrollTop / docHeight) * 100;
      setProgress(progressPercent);

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const el = sectionRefs.current[section];
        if (el) {
          const offsetTop = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="conditionTerm">

      {/* PROGRESS BAR */}
      <div
        className="conditionTerm__progress"
        style={{ width: `${progress}%` }}
      ></div>

      <div className="conditionTerm__wrapper">

        {/* SIDEBAR */}
        <div className="conditionTerm__sidebar">
          <h2>Internship Policy</h2>

          <ul>
            {sections.map((item, i) => (
              <li
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => handleScrollTo(item)}
              >
                <span>{i + 1}</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTENT */}
        <div className="conditionTerm__content">
          <h1>Internship Terms & Conditions</h1>

          {sections.map((title, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[title] = el)}
              className="conditionTerm__card"
            >
              <div className="conditionTerm__icon">
                <span>{index + 1}</span>
              </div>

              <div>
                <h3>{title}</h3>
                <p>
                  This section explains the {title.toLowerCase()} guidelines.
                  Interns must comply with company standards, maintain
                  professionalism, and respect all internal policies during the
                  internship duration.
                </p>
              </div>
            </div>
          ))}

          {/* FOOTER */}
          <div className="conditionTerm__footer">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={accepted}
                onChange={() => setAccepted(!accepted)}
              />
              <span></span>
              I agree to all Terms & Privacy Policy
            </label>

            <button disabled={!accepted}>
              Accept & Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionTerm;