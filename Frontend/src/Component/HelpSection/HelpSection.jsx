import React from "react";
import "./HelpSection.css";
import help from "../../assets/help.webp";
import { motion } from "framer-motion";

const HelpSection = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <section
      className="help-section"
      aria-labelledby="internship-objectives"
    >
      {/* SEO Optimized Heading */}
      <motion.h2
        id="internship-objectives"
        className="help-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Key Objectives of Internship Programs
      </motion.h2>

      {/* SEO Friendly Short Description */}
      <motion.p
        className="help-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our internships focus on practical exposure, skill development,
        leadership growth, career clarity,<br /> and strong connections with
        industry and research sectors.
      </motion.p>

      <div className="help-grid-container">
        {/* Left Side Boxes */}
        {[
          {
            icon: "📘",
            title: "Practical Exposure",
            desc: "Connecting theoretical knowledge with real-world experience.",
          },
          {
            icon: "🎯",
            title: "Skill & Employability",
            desc: "Enhancing professional skills and career readiness.",
          },
        ].map((box, i) => (
          <motion.div
            key={i}
            className={`help-box ${
              i === 0 ? "help-box-top-left" : "help-box-bottom-left"
            }`}
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <span className="icon">{box.icon}</span>
            <h3>{box.title}</h3>
            <p>{box.desc}</p>
          </motion.div>
        ))}

        {/* Center Image */}
        <motion.div
          className="help-center-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={help}
            alt="Internship program focused on skill development and practical learning"
            loading="lazy"
          />
        </motion.div>

        {/* Right Side Boxes */}
        {[
          {
            icon: "🧭",
            title: "Career Clarity",
            desc: "Developing a clear understanding of career options.",
          },
          {
            icon: "🤝",
            title: "Leadership & Teamwork",
            desc: "Improving leadership, collaboration, and problem-solving.",
          },
        ].map((box, i) => (
          <motion.div
            key={i}
            className={`help-box ${
              i === 0 ? "help-box-top-right" : "help-box-bottom-right"
            }`}
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <span className="icon">{box.icon}</span>
            <h3>{box.title}</h3>
            <p>{box.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* SEO Hidden Structured Content */}
     
    </section>
  );
};

export default HelpSection;
