import React, { useEffect, useState } from "react";
import "./Login.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

const Login = () => {
  const base = "loginPage";

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
      quote:
        "This online course exceeded my expectations! The lessons were clear, engaging, and practical. The instructors provided great support, and the flexibility made learning easy. Highly recommend for anyone looking to upskill!",
      name: "Olivia Wilson",
      role: "Student",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      quote:
        "The platform is simple to use, the video quality is excellent, and every module helped me learn step by step. I felt more confident after completing the course.",
      name: "Daniel Carter",
      role: "Learner",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={base}>
      <div className={`${base}__wrapper`}>
        <div className={`${base}__left`}>
          <div
            className={`${base}__slider`}
            style={{
              backgroundImage: `url(${slides[activeSlide].image})`,
            }}
          >
            <div className={`${base}__overlay`} />

            <div className={`${base}__slideCount`}>
              {activeSlide + 1}/{slides.length}
            </div>

            <div className={`${base}__content`}>
              <p className={`${base}__quote`}>{slides[activeSlide].quote}</p>

              <div className={`${base}__author`}>
                <h4>{slides[activeSlide].name}</h4>
                <span>{slides[activeSlide].role}</span>
              </div>
            </div>

            <div className={`${base}__nav`}>
              <button
                type="button"
                className={`${base}__navBtn`}
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <FiArrowLeft />
              </button>
              <button
                type="button"
                className={`${base}__navBtn`}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className={`${base}__right`}>
          <div className={`${base}__formCard`}>
            <div className={`${base}__brand`}>
              <div className={`${base}__brandIcon`}>🧠</div>
              <div>
                <h3>EduThink</h3>
                <span>Online Courses</span>
              </div>
            </div>

            <h2 className={`${base}__title`}>Welcome to EduThink</h2>

            <form className={`${base}__form`}>
              <div className={`${base}__field`}>
                <label>Email Address</label>
                <input type="email" placeholder="info@example.com" />
              </div>

              <div className={`${base}__field`}>
                <label>Password</label>
                <input type="password" placeholder="*********" />
              </div>

              <div className={`${base}__forgotWrap`}>
                <a href="/">Forgot Password?</a>
              </div>

              <button type="submit" className={`${base}__loginBtn`}>
                Login
              </button>

              <div className={`${base}__divider`}>
                <span />
                <p>Or Continue With</p>
                <span />
              </div>

              <div className={`${base}__socials`}>
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

              <p className={`${base}__signupText`}>
                Don’t have an account? <a href="/">Sign Up here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;