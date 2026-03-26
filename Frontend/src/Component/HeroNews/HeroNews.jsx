import React from "react";
import "./HeroNews.css";
import { FiStar } from "react-icons/fi";

const HeroNews = () => {
  const HeroNewsItems = [
    "Online Certifications",
    "Top Instructors",
    "2500+ Online Courses",
    "56+ Wonderful Awards",
    "5000+ Members",
    "Expert Mentors",
  ];

  return (
    <section className="HeroNews">
      <div className="HeroNews__track">
        <div className="HeroNews__group">
          {HeroNewsItems.map((item, index) => (
            <div className="HeroNews__item" key={`first-${index}`}>
              <span className="HeroNews__iconWrap">
                <FiStar className="HeroNews__icon" />
              </span>
              <span className="HeroNews__text">{item}</span>
            </div>
          ))}
        </div>

        <div className="HeroNews__group" aria-hidden="true">
          {HeroNewsItems.map((item, index) => (
            <div className="HeroNews__item" key={`second-${index}`}>
              <span className="HeroNews__iconWrap">
                <FiStar className="HeroNews__icon" />
              </span>
              <span className="HeroNews__text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroNews;