import React from "react";
import "./HeroSection.css";
import { FiArrowRight } from "react-icons/fi";
import mainImage from "../../assets/Main-image.webp"; // change to your main image path

const HeroSection = () => {
  const HeroSectionInstructors = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
  ];

  return (
    <section className="HeroSection">
      <div className="HeroSection__bgLines"></div>

      <div className="HeroSection__container">
        <div className="HeroSection__content">
          <div className="HeroSection__sparkles">
            <span className="HeroSection__sparkle HeroSection__sparkle--dark">
              ✦
            </span>
            <span className="HeroSection__sparkle HeroSection__sparkle--light">
              ✦
            </span>
          </div>

          <h1 className="HeroSection__title">
            Get <span className="HeroSection__titleHighlight">2500+</span>
            <br />
            Best Online Courses
            <br />
            From II Internships
          </h1>

          <p className="HeroSection__description">
            Best online education platforms offer flexible learning,
            quality courses, and expert instructors.
          </p>

          <a href="/" className="HeroSection__button">
            <span className="HeroSection__buttonText">Find Courses</span>
            <span className="HeroSection__buttonIcon">
              <FiArrowRight />
            </span>
          </a>

          <div className="HeroSection__instructors">
            <p className="HeroSection__instructorsText">250+ Instructors</p>

            <div className="HeroSection__instructorsList">
              {HeroSectionInstructors.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Instructor ${index + 1}`}
                  className="HeroSection__instructorImage"
                />
              ))}

              <div className="HeroSection__instructorMore">+</div>
            </div>
          </div>
        </div>

        <div className="HeroSection__imageArea">
          <div className="HeroSection__shape"></div>

          <img
            src={mainImage}
            alt="Students"
            className="HeroSection__mainImage"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;