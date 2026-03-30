import React, { useEffect, useState } from "react";
import "./Register.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

const Register = () => {
  const base = "registerPage";

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
      quote:
        "This online course exceeded my expectations! The lessons were clear, engaging, and practical. The instructors provided great support, and the flexibility made learning easy. Highly recommend for anyone looking to upskill!",
      name: "Olivia Wilson",
      role: "Student",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80",
      quote:
        "The learning experience was smooth and motivating. Every chapter was easy to understand, and the course structure helped me improve my skills with confidence.",
      name: "Emma Grace",
      role: "Learner",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(1);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={base}>
      <div className={`${base}__wrapper`}>
        <div className={`${base}__left`}>
          <div
            className={`${base}__slider`}
            style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
          >
            <div className={`${base}__overlay`} />

            <div className={`${base}__count`}>
              {activeSlide + 1}/{slides.length}
            </div>

            <div className={`${base}__content`}>
              <h3 className={`${base}__quote`}>{slides[activeSlide].quote}</h3>

              <div className={`${base}__author`}>
                <h4>{slides[activeSlide].name}</h4>
                <span>{slides[activeSlide].role}</span>
              </div>
            </div>

            <div className={`${base}__arrows`}>
              <button
                type="button"
                className={`${base}__arrowBtn`}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <FiArrowLeft />
              </button>
              <button
                type="button"
                className={`${base}__arrowBtn`}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className={`${base}__right`}>
          <div className={`${base}__formBox`}>
            <div className={`${base}__logo`}>
              <div className={`${base}__logoIcon`}>🧠</div>
              <div className={`${base}__logoText`}>
                <h2>EduThink</h2>
                <p>Online Courses</p>
              </div>
            </div>

            <h1 className={`${base}__title`}>Welcome to EduThink</h1>

            <form className={`${base}__form`}>
              <div className={`${base}__field`}>
                <label>Name</label>
                <input type="text" placeholder="Full Name" />
              </div>

              <div className={`${base}__field`}>
                <label>Email Address</label>
                <input type="email" placeholder="info@example.com" />
              </div>

              <div className={`${base}__field`}>
                <label>Password</label>
                <input type="password" placeholder="********" />
              </div>

              <div className={`${base}__forgotWrap`}>
                <a href="/">Forgot Password?</a>
              </div>

              <button type="submit" className={`${base}__submitBtn`}>
                Submit
              </button>

              <div className={`${base}__divider`}>
                <span></span>
                <p>Or Continue With</p>
                <span></span>
              </div>

              <div className={`${base}__socialRow`}>
                <button type="button" className={`${base}__socialBtn`}>
                  <FcGoogle />
                </button>

                <button type="button" className={`${base}__socialBtn`}>
                  <FaFacebookF />
                </button>

                <button type="button" className={`${base}__socialBtn`}>
                  <FaApple />
                </button>
              </div>

              <p className={`${base}__bottomText`}>
                Have any account? <a href="/">Sign In here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;