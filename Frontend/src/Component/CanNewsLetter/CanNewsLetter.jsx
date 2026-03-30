import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import newsletterImage from "../../assets/newsletter.webp";
import "./CanNewsLetter.css";

export default function CanNewsLetter() {
  // Motion variants for staggered entrance
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="cannewsletter-section">
      <div className="cannewsletter-container">
        {/* Left Content */}
        <motion.div
          className="cannewsletter-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="cannewsletter-heading" variants={itemVariants}>
            Join Our Newsletter
          </motion.h2>
          <motion.p className="cannewsletter-text" variants={itemVariants}>
            Stay updated with the latest tips, articles, and insights delivered straight to your inbox every Monday morning. No spam, just valuable content.
          </motion.p>

          <motion.form
            className="cannewsletter-form"
            onSubmit={(e) => e.preventDefault()}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="email"
              className="cannewsletter-input"
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
            <motion.button
              type="submit"
              className="cannewsletter-submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.form>

          <motion.div
            className="cannewsletter-socials"
            variants={itemVariants}
          >
            <motion.a
              href="#"
              aria-label="Facebook"
              className="social-icon facebook"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Twitter"
              className="social-icon twitter"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Instagram"
              className="social-icon instagram"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="#"
              aria-label="LinkedIn"
              className="social-icon linkedin"
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <FaLinkedinIn />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="cannewsletter-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={newsletterImage}
            alt="Newsletter Illustration"
            className="cannewsletter-image"
            draggable={false}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
