import React, { useState, useEffect } from "react";
import "./AboutTestimonials.css";
import { FaStar, FaPlay } from "react-icons/fa";
import v3 from "../../assets/video-03.webp"
import t1 from "../../assets/t1.png"
import t2 from "../../assets/t2.png"
import t3 from "../../assets/t3.png"


const testimonials = [
  {
    id: 1,
    text: "“Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    name: "Haley Bennet",
    role: "Designer",
    img: t1,
  },
  {
    id: 2,
    text: "“Education is not the filling of a pail, but the lighting of a fire. This place changed my career and life.”",
    name: "James Smith",
    role: "Developer",
    img: t2,
  },
  {
    id: 3,
    text: "“Great mentors, amazing peers, and fantastic curriculum. Highly recommend for students aiming for success.”",
    name: "Sophia Turner",
    role: "Marketer",
    img: t3,
  },
];

const AboutTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="abouttestmonials">
      <div className="abouttestmonials-container">
        {/* Left Side - Testimonial Slider */}
        <div className="abouttestmonials-left">
          <p className="section-subtitle">TESTIMONIALS</p>
          <h2 className="section-title">What Our Students Have To Say</h2>
          <span className="underline"></span>

          {/* Rating */}
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star" />
            ))}
          </div>

          {/* Testimonial Slider */}
          <div className="testimonial-slider">
            <div
              className="testimonial-track"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div className="testimonial-slide" key={item.id}>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="profile">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="profile-img"
                    />
                    <div>
                      <h4 className="profile-name">{item.name}</h4>
                      <p className="profile-role">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="abouttestmonials-right">
          <div className="video-card">
            <img
              src={v3}
              alt="Video Thumbnail"
              className="video-img"
            />
            <div className="play-btn">
              <FaPlay />
            </div>
          </div>
          <p className="video-caption">
            Take a Video Tour to Learn Intro of Campus
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
