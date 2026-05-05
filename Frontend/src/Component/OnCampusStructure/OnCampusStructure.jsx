import React, { useState } from "react";
import "./OnCampusStructure.css";

const OnCampusStructure = () => {
  const [language, setLanguage] = useState("Spanish");
  const [format, setFormat] = useState("Graphic Design");
  const price = ["Free" , "Subscription-based" , "Paid"];
  const languages = ["English", "Spanish", "French", "German"];
  const formats = [
    "Programming",
    "Graphic Design",
    "Data Science",
    "Marketing",
    "Management",
  ];
  

  return (
    <div className="oncampus-filter">

        {/* price */}
      <h3>Price</h3>
            <div className="oncampus-filter__group">
        {price.map((item) => (
          <label key={item} className="oncampus-filter__item">
            <input
              type="checkbox"
              checked={language === item}
              onChange={() => setLanguage(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>

      {/* Language */}
      <h3>Language</h3>
      <div className="oncampus-filter__group">
        {languages.map((item) => (
          <label key={item} className="oncampus-filter__item">
            <input
              type="checkbox"
              checked={language === item}
              onChange={() => setLanguage(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>

      {/* Course Format */}
      <h3>Course Format</h3>
      <div className="oncampus-filter__group">
        {formats.map((item) => (
          <label key={item} className="oncampus-filter__item">
            <input
              type="checkbox"
              checked={format === item}
              onChange={() => setFormat(item)}
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default OnCampusStructure;