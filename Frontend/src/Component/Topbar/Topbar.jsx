import React from "react";
import "./Topbar.css";
import { FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__container">

        {/* LEFT */}
        <div className="topbar__left">
          <a href="tel:12345615523" className="topbar__item">
            <FiPhone />
            <span>123 4561 5523</span>
          </a>

          <a href="mailto:info@iiinternship.co" className="topbar__item">
            <FiMail />
            <span>info@iiinternship.co</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="topbar__right">
          <Link to="/login" className="topbar__login">
            🔑 Login / Register
          </Link>

          {/* NEW DONATE BUTTON */}
          <Link to="/donate" className="topbar__donate">
            💖 Donate
          </Link>

          <Link to="/apply" className="topbar__apply">
            🚀 Apply Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Topbar;