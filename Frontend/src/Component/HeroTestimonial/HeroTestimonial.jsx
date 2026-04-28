import React, { useEffect, useState } from "react";
import "./HeroTestimonial.css";
import API, { ImageUrl } from "../../api/axios";

// KEEP your floatingFaces SAME
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
  const [testimonialData, setTestimonialData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ FETCH FROM BACKEND
  const fetchTestimonials = async () => {
    try {
      const res = await API.get("/testimonials");

      // map backend → UI format (IMPORTANT)
      const formatted = res.data.data.map((item) => ({
        id: item._id,
        name: item.name,
        role: item.designation,
        stars: item.rating,
        text: item.feedback,
        image: ImageUrl(item.image),
      }));

      setTestimonialData(formatted);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const totalSlides = testimonialData.length;

  // ✅ AUTO SLIDER (NO CHANGE)
  useEffect(() => {
    if (totalSlides === 0) return;

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

        {/* LEFT SIDE (UNCHANGED) */}
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
        </div>

        {/* RIGHT SIDE (ONLY DATA CHANGED) */}
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

          {/* CONTROLS (UNCHANGED) */}
          <div className="HeroTestimonial__controls">
            <button
              className="HeroTestimonial__navBtn"
              onClick={handlePrev}
            >
              ←
            </button>

            <div className="HeroTestimonial__paginationArea">
              <div className="HeroTestimonial__counter">
                {totalSlides === 0 ? "0 / 0" : `${currentIndex + 1} / ${totalSlides}`}
              </div>

              <div className="HeroTestimonial__progress">
                <div
                  className="HeroTestimonial__progressFill"
                  style={{
                    width:
                      totalSlides === 0
                        ? "0%"
                        : `${((currentIndex + 1) / totalSlides) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <button
              className="HeroTestimonial__navBtn"
              onClick={handleNext}
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