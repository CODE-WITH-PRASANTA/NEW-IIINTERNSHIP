import React, { useEffect, useState } from "react";
import "./HeroTestimonial.css";

// import your arrow image here
// import arrowImg from "../../assets/arrow-testimonial.webp";

const testimonialData = [
  {
    id: 1,
    name: "Michael Thompson",
    role: "Graphic Design",
    stars: 5,
    text: "The interactive sessions, peer discussions, and timely mentor feedback created a collaborative learning environment that enhanced my understanding.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Sophia Lee",
    role: "Web Development",
    stars: 5,
    text: "The hands-on learning experience and collaborative environment gave me the confidence to work on real client projects successfully.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "David Martinez",
    role: "Marketing Strategy",
    stars: 5,
    text: "Every lesson felt practical and well-structured. The mentors made complex ideas easy to understand and always supported our growth.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Graphic Design",
    stars: 5,
    text: "The mentor feedback was clear, detailed, and motivating. I improved both creatively and professionally throughout the course.",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "Alexander Johnson",
    role: "Coding Student",
    stars: 5,
    text: "This course gave me structure, confidence, and practical skills. The sessions were engaging and the guidance felt truly personal.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    name: "Olivia Brown",
    role: "UI/UX Design",
    stars: 5,
    text: "From the first week, I felt supported by both mentors and peers. The complete experience was smooth, inspiring, and highly valuable.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
  },
];

const floatingFaces = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80",
    className: "HeroTestimonial__floating HeroTestimonial__floating--one",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80",
    className: "HeroTestimonial__floating HeroTestimonial__floating--two",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=120&q=80",
    className: "HeroTestimonial__floating HeroTestimonial__floating--three",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    className: "HeroTestimonial__floating HeroTestimonial__floating--four",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=100&q=80",
    className: "HeroTestimonial__floating HeroTestimonial__floating--five",
  },
];

const AUTO_SLIDE_DELAY = 4000;

const HeroTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonialData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="HeroTestimonial">
      <div className="HeroTestimonial__container">
        <div className="HeroTestimonial__left">
          {floatingFaces.map((item) => (
            <div className={item.className} key={item.id}>
              <img
                src={item.image}
                alt="student"
                className="HeroTestimonial__floatingImg"
              />
            </div>
          ))}

          <h2 className="HeroTestimonial__title">
            <span className="HeroTestimonial__titleLine">What Our </span>
            <span className="HeroTestimonial__titleLine HeroTestimonial__titleLine--accent">
              Students
            </span>
            <span className="HeroTestimonial__titleLine">Have to Say</span>
          </h2>

          <p className="HeroTestimonial__description">
            Our students consistently praise the transformative learning
            experience we provide. Here’s what they say about our courses
          </p>

          {/* <img
            src={arrowImg}
            alt="arrow"
            className="HeroTestimonial__arrowImage"
          /> */}
        </div>

        <div className="HeroTestimonial__right">
          <div className="HeroTestimonial__stack HeroTestimonial__stack--back"></div>
          <div className="HeroTestimonial__stack HeroTestimonial__stack--middle"></div>

          <div className="HeroTestimonial__card">
            <div className="HeroTestimonial__sliderWindow">
              <div
                className="HeroTestimonial__sliderTrack"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonialData.map((item) => (
                  <div className="HeroTestimonial__slide" key={item.id}>
                    <div className="HeroTestimonial__topRow">
                      <div className="HeroTestimonial__stars">
                        {[...Array(item.stars)].map((_, index) => (
                          <span key={index} className="HeroTestimonial__star">
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="HeroTestimonial__mentorText">
                        Highly Experienced Mentors
                      </span>
                    </div>

                    <p className="HeroTestimonial__review">{item.text}</p>

                    <div className="HeroTestimonial__bottomRow">
                      <div className="HeroTestimonial__profile">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="HeroTestimonial__profileImg"
                        />
                        <div className="HeroTestimonial__profileContent">
                          <h3 className="HeroTestimonial__name">{item.name}</h3>
                          <p className="HeroTestimonial__role">{item.role}</p>
                        </div>
                      </div>

                      <div className="HeroTestimonial__quote">””</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="HeroTestimonial__controls">
            <button
              className="HeroTestimonial__navBtn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="HeroTestimonial__paginationArea">
              <div className="HeroTestimonial__counter">
                {currentIndex + 1} / {totalSlides}
              </div>

              <div className="HeroTestimonial__progress">
                <div
                  className="HeroTestimonial__progressFill"
                  style={{
                    width: `${((currentIndex + 1) / totalSlides) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <button
              className="HeroTestimonial__navBtn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTestimonial;