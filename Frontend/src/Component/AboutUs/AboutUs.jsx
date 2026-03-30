import React from "react";
import "./AboutUs.css";
import { FaGraduationCap, FaLightbulb } from "react-icons/fa";
import a1 from "../../assets/about1.webp";
import a2 from "../../assets/about2.webp";
import a3 from "../../assets/about3.webp";
import { motion } from "framer-motion";

const AboutUs = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="aboutus-section"
    >
      <div className="aboutus-container">
        {/* Left Content */}
        <motion.div
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="aboutus-content"
        >
          <motion.h5
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="aboutus-subtitle"
          >
            ABOUT US
          </motion.h5>

          <motion.h2
            variants={variants}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="aboutus-title"
          >
            International Institute of Internship <span>(i3)</span>
          </motion.h2>

          <motion.p
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="aboutus-description"
          >
            Established in 2025, the International Institute of Internship (i3) 
            is committed to empowering youth through experiential learning, 
            skill-based education, and structured internship opportunities. 
            As a flagship initiative of the Divya Prerak Kahaniyan Humanity 
            Research Centre Trust (DPKHRC Trust), i3 bridges the gap between 
            academic knowledge and real-world professional exposure.
          </motion.p>

          <motion.p
            variants={variants}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="aboutus-description"
          >
            Founded under the leadership of Dr. Avishek Kumar, the institute 
            aligns with the National Education Policy (NEP) 2020, promoting 
            multidisciplinary learning, practical training, and employment readiness.
          </motion.p>

          <div className="aboutus-cards">
            {/* Mission */}
            <motion.div
              variants={variants}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="aboutus-card"
            >
              <div className="aboutus-card-icon">
                <FaGraduationCap size={36} color="#8a6dfd" />
              </div>
              <h4 className="aboutus-card-title">Our Mission</h4>
              <p className="aboutus-card-text">
                To provide meaningful, value-based internships that develop 
                leadership, professional skills, and social responsibility 
                among students.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={variants}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="aboutus-card"
            >
              <div className="aboutus-card-icon">
                <FaLightbulb size={36} color="#42a5f5" />
              </div>
              <h4 className="aboutus-card-title">Our Vision</h4>
              <p className="aboutus-card-text">
                To become a trusted platform that connects education with 
                real-world experience, creating confident and future-ready professionals.
              </p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="aboutus-btn"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Images */}
        <motion.div
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="aboutus-images"
        >
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="aboutus-image-large"
          >
            <img src={a1} alt="Student Learning Experience" />
          </motion.div>

          <div className="aboutus-image-grid">
            <motion.img
              variants={variants}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={a2}
              alt="Internship Training"
            />
            <motion.img
              variants={variants}
              transition={{ duration: 0.5, delay: 0.6 }}
              src={a3}
              alt="Skill Development Session"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
