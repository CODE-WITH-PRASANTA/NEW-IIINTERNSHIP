import React, { useState } from "react";
import "./FloatingForm.css";
import { FaTimes, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <div className="floatingForm">
      <div className="floatingForm__overlay">
        <div className="floatingForm__card">
          <button
            className="floatingForm__close"
            onClick={handleClose}
            aria-label="Close form"
          >
            <FaTimes />
          </button>

          <h2 className="floatingForm__title">IIT Internship</h2>
          <p className="floatingForm__subtitle">Admission & Enquiry Form</p>
          <p className="floatingForm__description">
            Fill in the form below and our team will reach out shortly.
          </p>

          <form className="floatingForm__form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="floatingForm__input"
              placeholder="Parent / Student Name"
            />

            <input
              type="text"
              className="floatingForm__input"
              placeholder="Address / City"
            />

            <input
              type="tel"
              className="floatingForm__input"
              placeholder="Phone Number"
            />

            <textarea
              className="floatingForm__textarea"
              placeholder="Message"
              rows="4"
            ></textarea>

            <button type="submit" className="floatingForm__submit">
              Submit Enquiry
            </button>
          </form>

          <div className="floatingForm__divider">
            <span className="floatingForm__dividerText">OR</span>
          </div>

          <div className="floatingForm__actions">
            <a href="tel:+917014627894" className="floatingForm__callBtn">
              <FaPhoneAlt />
              <span>Call Us</span>
            </a>

            <a
              href="https://wa.me/917014627894"
              target="_blank"
              rel="noopener noreferrer"
              className="floatingForm__whatsappBtn"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingForm;