import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "./VOMFaq.css";

const faqData = [
  {
    question: "What is the International Institute of I3 Internship?",
    answer:
      "The International Institute of I3 Internship is a professional development platform committed to empowering students and young professionals through immersive internship experiences. We bridge the gap between academic learning and real-world industry exposure by offering structured programs focused on innovation, insight, and impact.",
  },
  {
    question: "What is the vision of I3 Internship?",
    answer:
      "Our vision is to create a global ecosystem where students gain meaningful industry exposure, develop leadership capabilities, and contribute positively to society. We aim to nurture responsible professionals who combine knowledge with innovation and social consciousness.",
  },
  {
    question: "What is the mission of I3 Internship?",
    answer:
      "Our mission is to provide accessible, quality-driven internship programs that promote experiential learning, critical thinking, and professional growth. Through partnerships with institutions and organizations worldwide, we strive to create opportunities that prepare youth for dynamic global careers.",
  },
  {
    question: "Who can apply for I3 Internship programs?",
    answer:
      "Students, recent graduates, and aspiring professionals from diverse academic backgrounds can apply. Our programs are designed to accommodate learners who are passionate about gaining practical exposure and enhancing their career readiness.",
  },
  {
    question: "How does I3 Internship ensure quality learning?",
    answer:
      "We collaborate with experienced mentors, industry professionals, and academic institutions to design structured modules. Each internship includes guided projects, performance feedback, and skill-based evaluations to ensure measurable learning outcomes.",
  },
  {
    question: "Does I3 Internship provide certification?",
    answer:
      "Yes. Upon successful completion of the internship program, participants receive an official certificate recognizing their contribution, skill development, and practical training experience.",
  },
];

const VOMFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="i3faq-section">
      <div className="i3faq-container">
        {/* SEO Friendly Heading */}
        <div className="i3faq-header">
          <p className="i3faq-subtitle">FAQ’S</p>
          <h2 className="i3faq-title">
            Frequently Asked <br /> Questions.
          </h2>
          <div className="i3faq-underline"></div>
        </div>

        <div className="i3faq-grid">
          {/* Left Column */}
          <div className="i3faq-column">
            {faqData.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className={`i3faq-item ${
                  activeIndex === index ? "i3faq-active" : ""
                }`}
              >
                <button
                  className="i3faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  {activeIndex === index ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>

                {activeIndex === index && (
                  <div className="i3faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="i3faq-column">
            {faqData.slice(3).map((item, index) => {
              const realIndex = index + 3;
              return (
                <div
                  key={realIndex}
                  className={`i3faq-item ${
                    activeIndex === realIndex ? "i3faq-active" : ""
                  }`}
                >
                  <button
                    className="i3faq-question"
                    onClick={() => toggleFAQ(realIndex)}
                  >
                    {item.question}
                    {activeIndex === realIndex ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>

                  {activeIndex === realIndex && (
                    <div className="i3faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VOMFaq;
