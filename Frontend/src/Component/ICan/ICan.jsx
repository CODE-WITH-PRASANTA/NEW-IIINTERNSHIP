import React, { useState } from "react";
import y1 from "../../assets/you1.webp"; // Left icon
import y2 from "../../assets/you2.webp"; // Right icon
import y3 from "../../assets/you3.webp"; // Bottom center icon
import "./ICan.css";

const faqItems = [
  {
    title: "What is the International Institute of I3 Internship?",
    content:
      "The International Institute of I3 Internship is a structured internship program designed to provide real-world industry experience, technical training, mentorship, and career development support for students and fresh graduates.",
  },
  {
    title: "What technical skills are covered in the I3 Internship program?",
    content:
      "Our internship programs offer hands-on training in modern technologies such as React.js, Node.js, and MongoDB. Students work on live industry projects to gain practical experience and become job-ready.",
  },
 
  {
    title: "Is project-based learning included in the I3 Internship?",
    content:
      "Yes, students work on real-world, project-based assignments that simulate industry scenarios. This helps improve problem-solving abilities, teamwork, leadership, and project management skills.",
  },
  {
    title: "Does the I3 Internship offer placement assistance?",
    content:
      "We collaborate with reputed companies and industry partners to provide placement assistance. Students receive mock interviews, professional guidance, and support to kickstart their careers successfully.",
  },
  {
    title: "Will I receive a certificate after completing the internship?",
    content:
      "Yes, upon successful completion of the internship at the International Institute of I3 Internship, students receive an official certificate that strengthens their resume and professional profile.",
  },
];


const ICan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Main Section */}
    <section className="ican-section" aria-labelledby="nep-internship">
  <h2 className="ican-title" id="nep-internship">
    Internship as per National Education Policy (NEP) 2020
  </h2>

  <p className="ican-subtitle">
    Experiential learning and skill-based education for career readiness
  </p>

  <div className="ican-grid-container">
    
    {/* Left box with image */}
    <div className="ican-box ican-box-left">
      <img
        src={y1}
        alt="Experiential learning internship program"
        className="ican-image"
      />
    </div>

    {/* Center top text box */}
    <div className="ican-box ican-box-center-top">
      <h3>Learning by Doing</h3>
      <p>
        Aligned with NEP 2020, our internships focus on real projects,
        field exposure, and practical skill development.
      </p>
      <button className="ican-read-more">READ MORE</button>
    </div>

    {/* Right box with image */}
    <div className="ican-box ican-box-right">
      <img
        src={y2}
        alt="Structured internship mentorship"
        className="ican-image"
      />
    </div>

    {/* Bottom left text box */}
    <div className="ican-box ican-box-bottom-left">
      <h3>Structured Internships at i3</h3>
      <p>
        The International Institute of Internship (i3) provides
        mentorship-driven programs designed to build industry-ready skills.
      </p>
      <button className="ican-read-more">READ MORE</button>
    </div>

    {/* Bottom center with image */}
    <div className="ican-box ican-box-bottom-center">
      <img
        src={y3}
        alt="Types of internships at i3"
        className="ican-image"
      />
    </div>

    {/* Bottom right text box */}
    <div className="ican-box ican-box-bottom-right">
      <h3>Types & Flexible Modes</h3>
      <p>
        Academic, Skill, Research, Digital, and Management internships
        available in online, offline, on-campus, and hybrid formats.
      </p>
      <button className="ican-read-more">READ MORE</button>
    </div>

  </div>
</section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Everything you need to know about our internships and training programs
        </p>

        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-question-${index}`}
              >
                <strong>{item.title}</strong>
                <span className="arrow">
                  {openIndex === index ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`faq-answer-wrapper ${
                  openIndex === index ? "open" : ""
                }`}
                id={`faq-content-${index}`}
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="faq-answer">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Help Section */}
     <section
  className="clean-help-section"
  aria-labelledby="internship-education-system"
>
  <h2 className="clean-help-title" id="internship-education-system">
    Understanding Internship in Today’s Education System
  </h2>

  <p className="clean-help-subtitle">
    Practical, experience-based learning aligned with NEP 2020
  </p>

  <div className="clean-help-grid">
    {/* Card 1 */}
    <div className="clean-help-box">
      <h3>Structured Practical Learning</h3>
      <p>
        Internships provide real-world experience by connecting classroom
        knowledge with live projects and industry exposure.
      </p>
      <button className="clean-read-more">READ MORE</button>
    </div>

    {/* Card 2 */}
    <div className="clean-help-box">
      <h3>Skill & Professional Growth</h3>
      <p>
        Students develop technical skills, communication, confidence, and
        industry-ready professional understanding.
      </p>
      <button className="clean-read-more">READ MORE</button>
    </div>

    {/* Card 3 */}
    <div className="clean-help-box">
      <h3>Career Development under NEP 2020</h3>
      <p>
        As emphasized in NEP 2020, internships play a vital role in preparing
        students for employment, entrepreneurship, and research careers.
      </p>
      <button className="clean-read-more">READ MORE</button>
    </div>
  </div>
</section>


    </>
  );
};

export default ICan;
