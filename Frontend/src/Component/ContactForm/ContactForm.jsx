import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Append Web3Forms API access key
    formData.append("access_key", "7ea3f90e-a50c-40f3-9078-ba132a07a037");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await res.json();

      if (data.success) {
        setStatus('Success! Your message has been sent.');
      } else {
        setStatus('Error! Please try again.');
      }
    } catch (error) {
      setStatus('Error! Something went wrong.');
    }
  };

  return (
    <div>
      <div className="Contact-Form-wrapper">
        <div className="Contact-Form-container">
          {/* Contact Form Section */}
          <div className="Contact-Form-box">
            <h2 className="Contact-Form-heading">Stay Connected with Us</h2>
            <form className="Contact-Form-element" onSubmit={onSubmit}>
              <div className="Contact-Form-row">
                <input type="text" name="name" placeholder="Name *" required />
                <input type="email" name="email" placeholder="Email *" required />
              </div>
              <div className="Contact-Form-row">
                <input type="tel" name="phone" placeholder="Phone *" required />
                <input type="text" name="website" placeholder="Website *" required />
              </div>
              <div className="Contact-Form-row">
                <input type="text" name="country" placeholder="Country *" required />
                <select name="request_type" required>
                  <option value="">--Select Request Type--</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              <textarea name="message" placeholder="How can we help you?" required></textarea>
              <button type="submit">Send Message</button>
            </form>
            {/* Status message */}
            {status && <div className="Contact-Form-status">{status}</div>}
          </div>

          {/* Google Map Section */}
          <div className="Contact-Form-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.530859818957!2d85.82856411533105!3d20.297783986399222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909099114ab05%3A0x2e6657e6600b4d8b!2sAIONINNO%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1638182431311!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
