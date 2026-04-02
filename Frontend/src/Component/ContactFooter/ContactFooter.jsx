import React from 'react';
import './ContactFooter.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ContactBg from '../../assets/ContactFooter.webp';

const ContactFooter = () => {
  return (
    <div className="contact-footer" style={{ backgroundImage: `url(${ContactBg})` }}>
      <div className="contact-footer-overlay">
        <div className="contact-footer-container">
          <div className="contact-footer-heading">
            <h2>WE PROVIDE EFFECTIVE<br />LEGAL AID SERVICES.</h2>
          </div>

          <div className="contact-footer-info">
            <div className="contact-footer-column">
              <h4 className="contact-footer-title">ADDRESS</h4>
              <p>Odisha</p>
              <p>At- Nexus Esplanade , Bhubaneswar </p>
              <p>Unit No. 32, 721</p>

              <div className="contact-footer-socials">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>

            <div className="contact-footer-column">
              <h4 className="contact-footer-title">SAY HELLO</h4>
              <a href="mailto:info@email.com">prwebstock.com@gmail.com</a>
              <p>+91 63 72 54 52 44</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
