import React, { useEffect, useRef, useState } from "react";
import "./ContactBanner.css";

// Assets
import ContactBg from "../../assets/contact-bg.webp";
import dotshape from "../../assets/shape-2.png";

const ContactBanner = () => {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
   <section
  ref={bannerRef}
  className={`contact-banner ${visible ? "show" : ""}`}
>

      {/* Left decorative dot */}
      <img src={dotshape} alt="dotshape" className="dot-shape left" />
      {/* Right decorative dot */}
      <img src={dotshape} alt="dotshape" className="dot-shape right" />

      <div className="contact-content">
        <div className="contact-item">
          <p>Get In Touch:</p>
          <h3>
            <a href="mailto:info@edublink">info@edublink</a>
          </h3>
        </div>

        <div className="divider">or</div>

        <div className="contact-item">
          <p>Call Us Via:</p>
          <h3>
            <a href="tel:+011235641231">+01 123 5641 231</a>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
