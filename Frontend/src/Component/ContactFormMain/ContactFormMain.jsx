import React from "react";
import "./ContactFormMain.css";
import pattern from "../../assets/bg-lines.png";

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

      {/* TOP */}
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

              <h2 className="contactFormMain__title">
                Connect With <span>IIInternship</span>
              </h2>

              <p className="contactFormMain__subtitle">
                Start your journey with IIInternship — explore internships,
                build real-world skills, and connect with industry experts.
              </p>
            </div>

          </div>
        </div>

        <div className="contactFormMain__curve"></div>
      </div>

      {/* BODY */}
      <div className="contactFormMain__body">
        <div className="contactFormMain__container">
          <div className="contactFormMain__content">

            {/* LEFT */}
            <div className="contactFormMain__infoSection">
              <div className="contactFormMain__infoGrid">

                <div className="contactFormMain__infoCard">
                  <h3>Call Us</h3>
                  <p>Speak with our internship advisors</p>
                  <div><FiPhoneCall /> +91 9472351693</div>
                </div>

                <div className="contactFormMain__infoCard">
                  <h3>Live Chat</h3>
                  <p>Instant help from our support team</p>
                  <div><FiMessageSquare /> Chat Available 24/7</div>
                </div>

                <div className="contactFormMain__infoCard">
                  <h3>Email Us</h3>
                  <p>Send us your queries anytime</p>
                  <div><FiMail /> supportInto@IIInternship.com</div>
                </div>

                <div className="contactFormMain__infoCard">
                  <h3>Visit Office</h3>
                  <p>Meet us in person</p>
                  <div><FiMapPin /> Chennai, India</div>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="contactFormMain__formWrap">
              <div className="contactFormMain__formCard">

                <h3>Let’s Build Your Future 🚀</h3>
                <p>Tell us your goals — we’ll guide you to the right internship.</p>

                <form>
                  <div className="contactFormMain__formRow">
                    <input placeholder="First Name" />
                    <input placeholder="Last Name" />
                  </div>

                  <div className="contactFormMain__formRow">
                    <input placeholder="Email Address" />
                    <input placeholder="Interested Domain" />
                  </div>

                  <textarea placeholder="Tell us about your goals..."></textarea>

                  <button className="contactFormMain__submitBtn">
                    Get Started <FiArrowRight />
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