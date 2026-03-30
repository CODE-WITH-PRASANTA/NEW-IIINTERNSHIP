import React, { useState } from "react";
import {
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import "./IMMsection.css";

import mainImage from "../../assets/ht4.webp";
import childImage from "../../assets/help.webp";

const IMMsection = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabContent = {
    about: {
      title: "About the Immersion Program",
      text: `The International Institute of Internship (i3) offers students, 
      young professionals, and researchers from India and abroad the opportunity 
      to engage in meaningful immersion experiences across diverse fields.`,
      points: [
        "Gain real-world exposure in different social and professional environments.",
        "Develop practical insights through direct participation and observation.",
        "Enhance personal growth, perspective, and applied learning experience."
      ]
    },

    mission: {
      title: "Open & Flexible Participation",
      text: `The i3 Immersion Program is designed to be accessible and flexible 
      for learners at all stages.`,
      points: [
        "Anyone can register through the official i3 portal.",
        "Participation is open throughout the year.",
        "Programs are structured to suit diverse academic and professional backgrounds."
      ]
    },

    vision: {
      title: "Certification & Long-Term Benefits",
      text: `Upon successful completion of the immersion program, participants 
      receive an official certification from i3.`,
      points: [
        "Strengthens academic and professional profiles.",
        "Adds value to higher education and career opportunities.",
        "Supports personal and leadership development in various aspects of life."
      ]
    },
  };

  return (
    <section className="ab-edu-section">
      <div className="ab-edu-container">

        {/* LEFT IMAGE AREA */}
        <div className="ab-edu-left">

          <div className="ab-edu-main-img-wrapper">
            <img
              src={mainImage}
              alt="i3 Immersion Program"
              className="ab-edu-main-img"
            />
          </div>

          <div className="ab-edu-child-img-wrapper">
            <img
              src={childImage}
              alt="Immersion Experience"
              className="ab-edu-child-img"
            />
          </div>

          <div className="ab-edu-dots"></div>
          <div className="ab-edu-circle-decor"></div>

        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="ab-edu-right">

          <p className="ab-edu-subtitle">
            INTERNATIONAL INSTITUTE OF INTERNSHIP (i3)
          </p>

          <h2 className="ab-edu-title">
            Immersion Program at <span>i3</span>
          </h2>

          {/* TABS */}
          <div className="ab-edu-tabs">
            <button
              className={activeTab === "about" ? "ab-edu-tab active" : "ab-edu-tab"}
              onClick={() => setActiveTab("about")}
            >
              About Program
            </button>

            <button
              className={activeTab === "mission" ? "ab-edu-tab active" : "ab-edu-tab"}
              onClick={() => setActiveTab("mission")}
            >
              Registration
            </button>

            <button
              className={activeTab === "vision" ? "ab-edu-tab active" : "ab-edu-tab"}
              onClick={() => setActiveTab("vision")}
            >
              Certification
            </button>
          </div>

          {/* DYNAMIC CONTENT */}
          <h3 className="ab-edu-inner-title">
            {tabContent[activeTab].title}
          </h3>

          <p className="ab-edu-text">
            {tabContent[activeTab].text}
          </p>

          <div className="ab-edu-list">
            {tabContent[activeTab].points.map((point, index) => (
              <div key={index} className="ab-edu-list-item">
                <FaCheck className="ab-edu-check-icon" />
                {point}
              </div>
            ))}
          </div>

          <button className="ab-edu-btn">
            Register Now <FaArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
};

export default IMMsection;
