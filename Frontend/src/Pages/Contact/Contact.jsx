import React from 'react';
import './Contact.css';

// Assets
import ContactUsRightImg from '../../assets/Contact.webp';
import ContactForm from '../../Component/ContactForm/ContactForm';
import ContactFooter from '../../Component/ContactFooter/ContactFooter';


const Contact = () => {
  return (
    <>
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>
            We at <strong>'PR WEBSTOCK'</strong> promise to deliver customized and optimized
            cost-effective Software Services to our clients. Our team assures efficiency, quality,
            and speed to any type of project. We have a team of skilled Web Designer to manage
            your business need.
          </p>
        </div>
        <div className="contact-right animate-float">
          <img src={ContactUsRightImg} alt="Contact Illustration" />
        </div>
      </div>
    </div>

<ContactForm/>
<ContactFooter/>
    
    </>
  );
};

export default Contact;
