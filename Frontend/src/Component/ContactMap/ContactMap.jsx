import React from "react";
import "./ContactMap.css";
import worldMapDots from "../../assets/Map.svg";

const ContactMap = () => {
  return (
    <section className="contactMap">
      <div className="contactMap__top">
        <div className="contactMap__container">
          <h2 className="contactMap__title">Our Location</h2>

          <div className="contactMap__worldWrap">
            <img
              src={worldMapDots}
              alt="World map"
              className="contactMap__worldImage"
            />

            <span className="contactMap__pin contactMap__pin--northAmerica"></span>
            <span className="contactMap__pin contactMap__pin--southAmerica"></span>
            <span className="contactMap__pin contactMap__pin--africa"></span>
            <span className="contactMap__pin contactMap__pin--asia"></span>
          </div>
        </div>
      </div>

      <div className="contactMap__bottom">
        <iframe
          className="contactMap__iframe"
          title="Google Map"
          src="https://www.google.com/maps?q=Bhubaneswar,Odisha,India&z=13&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;