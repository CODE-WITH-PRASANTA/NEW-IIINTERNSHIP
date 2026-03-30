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
      { name: "Running Internships", path: "/running" },
      { name: "Virtual Internships", path: "/virtual" },
      { name: "On Campus Internships", path: "/oncampus" },
       { name: "Course Grid", path: "/coursegrid" },
       { name: "Course List", path: "/courselist" },
    ],
  },

  { title: "Gallery", link: "/gallery", dropdown: [] },
  { title: "Success Story", link: "/story", dropdown: [] },
  { title: "Recruitment", link: "/career", dropdown: [] },
  { title: "FAQ", link: "/faq", dropdown: [] },
  { title: "Contact Us", link: "/contact", dropdown: [] },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

          {/* MENU */}
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

          {/* RIGHT SIDE */}
          <div className="navbar__right">

            {/* CONTACT BLOCK */}
<div className="navbar__contactWrap">
  <a href="tel:+011234567890" className="navbar__contactBtn">
    <FiPhoneCall />

    <span className="navbar__contactLabel">Contact Us</span>

    <span className="navbar__divider"></span>

    <span className="navbar__contactText">+01123 456 7890</span>

    <FiArrowRight />
  </a>
</div>

            {/* DONATE */}
            <Link to="/donate" className="navbar__donate">
              Donate
            </Link>
          </div>

          {/* MOBILE */}
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

        {navItems.map((item, i) => (
          <Link key={i} to={item.link} onClick={() => setMobileOpen(false)}>
            {item.title}
          </Link>
        ))}

        <a href="tel:+011234567890" className="mobile__phone">
          <FiPhoneCall /> +01123 456 7890
        </a>

        <Link to="/contact" className="mobile__contact">
          Contact Us
        </Link>

        <Link to="/donate" className="mobile__donate">
          Donate
        </Link>
      </div>
    </>
  );
};

export default Navbar;

