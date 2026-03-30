import React from "react";
import "./Inspiration.css";
import imgMain from "../../assets/about-111.webp";   // Main big image
import imgSmall from "../../assets/about-112.webp";  // Small top image

const Inspiration = () => {
  return (
    <section className="inspSection-wrapper">
      <div className="inspSection-container">

        {/* LEFT CONTENT */}
        <div className="inspSection-content">
          <p className="inspSection-subtitle">
            INSPIRATION & GUIDING THOUGHT
          </p>

          <h2 className="inspSection-title">
            Vision That <span>Inspires Growth</span>
          </h2>

          <div className="inspSection-underline"></div>

          <p className="inspSection-text">
            Mr. Tapas Kumar (CEO, Learnify Consultancy, Lucknow) played an
            inspiring role in shaping the vision of the International Institute
            of Internship (i3). His ideas and encouragement paved the way for
            creating opportunities, developing skills, and fostering a global
            perspective for students.
          </p>

          <p className="inspSection-text">
            He always emphasized that internships should not be merely training,
            but a process of character and personality development, discipline,
            and professional understanding. His inspiration continues to shape
            the work culture of the International Institute of Internship.
          </p>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="inspSection-imageWrapper">

          {/* Decorative Shapes */}
          <div className="inspSection-dots"></div>
          <div className="inspSection-circle"></div>

          {/* Main Image */}
          <div className="inspSection-mainImage">
            <img src={imgMain} alt="Students Learning" />
          </div>

          {/* Small Overlapping Image */}
          <div className="inspSection-smallImage">
            <img src={imgSmall} alt="Inspiration" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Inspiration;
