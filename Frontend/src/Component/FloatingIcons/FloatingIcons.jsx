import React, { useEffect, useState } from "react";
import "./FloatingIcons.css";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

const FloatingIcons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="floatingIcons">
      <div className="floatingIcons__wrapper">
        
        <a
          href="https://wa.me/918280547763"
          target="_blank"
          rel="noopener noreferrer"
          className="floatingIcons__btn floatingIcons__btn--whatsapp"
        >
          <FaWhatsapp />
        </a>

        <a
          href="tel:8280547763"
          className="floatingIcons__btn floatingIcons__btn--call"
        >
          <FaPhoneAlt />
        </a>

        <button
          onClick={handleScrollTop}
          className={`floatingIcons__btn floatingIcons__btn--top ${
            showTop ? "show" : "hide"
          }`}
        >
          <FaArrowUp />
        </button>

      </div>
    </div>
  );
};

export default FloatingIcons;