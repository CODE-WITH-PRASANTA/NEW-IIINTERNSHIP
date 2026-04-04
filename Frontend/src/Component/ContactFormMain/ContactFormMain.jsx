import React from "react";
import "./ContactFormMain.css";
import pattern from "../../assets/bg-lines.png"; // import image

import {
  FiPhoneCall,
  FiMessageSquare,
  FiMail,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const ContactFormMain = () => {
  return (
    <section className="contactFormMain">
      
      {/* TOP SECTION */}
      <div
        className="contactFormMain__breadcrumb"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <div className="contactFormMain__overlay"></div>

        <div className="contactFormMain__container">
          <div className="contactFormMain__topContent">

            <div className="contactFormMain__titleWrap">
              <div className="contactFormMain__sparkles">
                <span>✦</span>
                <span>✦</span>
              </div>

              <h2 className="contactFormMain__title">Contact Us</h2>

              <p className="contactFormMain__subtitle">
                Best online education platforms offer flexible learning,
                quality courses, and expert instructors.
              </p>
            </div>

          </div>
        </div>

        <div className="contactFormMain__curve"></div>
      </div>

      {/* BODY SAME AS BEFORE */}
      <div className="contactFormMain__body">
        <div className="contactFormMain__container">
          <div className="contactFormMain__content">

            {/* LEFT CARDS */}
            <div className="contactFormMain__infoSection">
              <div className="contactFormMain__infoGrid">

                <div className="contactFormMain__infoCard">
                  <h3>Call us</h3>
                  <p>Call our team Mon-Fri 9am to 7pm</p>
                  <div>
                    <FiPhoneCall /> +(985) 000-0000
                  </div>
                </div>

                <div className="contactFormMain__infoCard">
                  <h3>Chat Us</h3>
                  <p>Chat our team 24X7</p>
                  <div>
                    <FiMessageSquare /> +(985) 000-0000
                  </div>
                </div>

                <div className="contactFormMain__infoCard">
                  <h3>Supports</h3>
                  <p>We’re here to help</p>
                  <div>
                    <FiMail /> info@example.com
                  </div>
                </div>

                <div className="contactFormMain__infoCard">
                  <h3>Visit us</h3>
                  <p>Visit our office HQ.</p>
                  <div>
                    <FiMapPin /> 1234 Elm Street, ZZ 12345
                  </div>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="contactFormMain__formWrap">
              <div className="contactFormMain__formCard">

                <h3>Contact our Friendly Team</h3>
                <p>Let us know how can help.</p>

                <form>
                  <div className="contactFormMain__formRow">
                    <input placeholder="e.g. Michael" />
                    <input placeholder="e.g. Thompson" />
                  </div>

                  <div className="contactFormMain__formRow">
                    <input placeholder="info@example.com" />
                    <input placeholder="Topic" />
                  </div>

                  <textarea placeholder="Type Message"></textarea>

                  <button className="contactFormMain__submitBtn">
                    Submit Now <FiArrowRight />
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactFormMain;