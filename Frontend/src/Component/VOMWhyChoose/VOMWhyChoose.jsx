import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineVpnKey } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

import img1 from "../../assets/oc2.webp";
import img2 from "../../assets/oc3.webp";
import img3 from "../../assets/oc1.webp";

import "./VOMWhyChoose.css";

const VOMWhyChoose = () => {
  return (
    <section className="wce-section" aria-labelledby="i3-promise-heading">
      <div className="wce-container">
        
        {/* Subtitle */}
        <p className="wce-subtitle">OUR PROMISE</p>

        {/* Title */}
        <h2 id="i3-promise-heading" className="wce-title">
          More Than an <span>Internship</span>
        </h2>

        {/* Underline */}
        <div className="wce-underline"></div>

        {/* Intro Description */}
        <div style={{ maxWidth: "800px", margin: "0 auto 50px", textAlign: "center" }}>
          <p>
            At the International Institute of Internship (i3), we believe an
            internship is not merely about earning a certificate — it is a
            transformative journey of experiential learning, professional
            growth, and personal development. Our programs are designed to
            nurture skills, shape attitudes, and inspire purpose-driven careers.
          </p>
        </div>

        {/* Promise Cards */}
        <div className="wce-card-grid">
          
          {/* Card 1 */}
          <div className="wce-card">
            <div className="wce-image-wrapper">
              <img
                src={img1}
                alt="Experiential internship learning at International Institute of Internship"
              />
            </div>

            <div className="wce-icon wce-icon-green">
              <FaGraduationCap />
            </div>

            <div className="wce-card-content">
              <h3>Internship as a Learning Journey</h3>
              <p>
                We view internships as structured learning experiences that
                go beyond academic theory, enabling students to gain practical
                exposure, industry insight, and real-world competence.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="wce-card">
            <div className="wce-image-wrapper">
              <img
                src={img2}
                alt="Skill development and professional training programs"
              />
            </div>

            <div className="wce-icon wce-icon-red">
              <MdOutlineVpnKey />
            </div>

            <div className="wce-card-content">
              <h3>Skill Development with Right Attitude</h3>
              <p>
                Training at i3 not only builds technical and professional
                skills but also shapes confidence, discipline, leadership,
                and a growth-oriented mindset essential for long-term success.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="wce-card">
            <div className="wce-image-wrapper">
              <img
                src={img3}
                alt="Purpose driven career and global opportunities"
              />
            </div>

            <div className="wce-icon wce-icon-blue">
              <HiOutlineUserGroup />
            </div>

            <div className="wce-card-content">
              <h3>Purpose-Driven & Future-Ready Careers</h3>
              <p>
                We empower young individuals to build careers that are not
                limited to employment but centered around meaningful purpose,
                social responsibility, and global impact.
              </p>
            </div>
          </div>

        </div>

        {/* Closing Statement */}
        <div style={{ maxWidth: "900px", margin: "60px auto 0", textAlign: "center" }}>
          <p>
            Through immersive internship programs, industry collaboration,
            and experiential learning models, the International Institute of
            Internship provides a platform where learning becomes experience,
            experience builds confidence, and confidence shapes the future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VOMWhyChoose;
