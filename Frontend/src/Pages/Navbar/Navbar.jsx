import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  FiChevronDown,
  FiPhoneCall,
  FiArrowRight,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/IIITLOGO.png";

const navItems = [
  { title: "Home", link: "/", dropdown: [] },
  {
    title: "About Us",
    link: "/about",
    dropdown: [
      { name: "Organisation History", path: "/org/history" },
      { name: "Vision & Mission", path: "/vision/mission" },
      { name: "What is Immersion", path: "/immersion" },
      { name: "What is Internship", path: "/internship" },
    ],
  },
  {
    title: "Internships Program",
    link: "/internship/program",
    dropdown: [
      { name: "Running Internships", path: "/coursegrid" },
      { name: "Virtual Internships", path: "/coursevideo" },
      { name: "On Campus Internships", path: "/oncampus" },
       
       { name: "Course Video", path: "/coursevideo" },
    ],
    
  },
  { title: "Gallery", link: "/gallery", dropdown: [] },
  { title: "Success Story", link: "/story", dropdown: [] },
  { title: "Recruitment", link: "/career", dropdown: [] },
  { title: "FAQ", link: "/faq", dropdown: [] },
  { title: "Contact", link: "/contact", dropdown: [] },
];
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

 
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  
  return (
    <>
        <header className="navbar">
          <div className="navbar__container">

          {/* LOGO */}
          <Link to="/" className="navbar__logoWrap">
            <img src={logo} alt="logo" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="navbar__menu">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="navbar__item"
                onMouseEnter={() =>
                  item.dropdown.length && setActiveDropdown(index)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={item.link} className="navbar__link">
                  {item.title}
                  {item.dropdown.length > 0 && <FiChevronDown />}
                </Link>

                {item.dropdown.length > 0 && (
                  <div
                    className={`navbar__dropdown ${
                      activeDropdown === index ? "show" : ""
                    }`}
                  >
                    {item.dropdown.map((sub, i) => (
                      <Link key={i} to={sub.path}>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="navbar__right">
            <a href="tel:+011234567890" className="navbar__contactBtn">
              <FiPhoneCall />
              <div className="navbar__contactTextWrap">
                <span className="navbar__contactLabel">Contact Us</span>
                <span className="navbar__contactNumber">
                  +01123 456 7890
                </span>
              </div>
              <FiArrowRight />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile ${mobileOpen ? "show" : ""}`}>
        <div className="mobile__header">
          <img src={logo} alt="" />
          <FiX onClick={() => setMobileOpen(false)} />
        </div>

        {navItems.map((item, index) => (
          <div key={index} className="mobile__item">
            <div
              className="mobile__link"
              onClick={() =>
                item.dropdown.length
                  ? setMobileDropdown(
                      mobileDropdown === index ? null : index
                    )
                  : setMobileOpen(false)
              }
            >
              {item.title}
              {item.dropdown.length > 0 && <FiChevronDown />}
            </div>

            {item.dropdown.length > 0 && mobileDropdown === index && (
              <div className="mobile__dropdown">
                {item.dropdown.map((sub, i) => (
                  <Link
                    key={i}
                    to={sub.path}
                    onClick={() => setMobileOpen(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* CONTACT BUTTON IN MOBILE */}
        <a href="tel:+011234567890" className="mobile__contactBtn">
          <FiPhoneCall />
          <div>
            <span>Contact Us</span>
            <p>+01123 456 7890</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Navbar;