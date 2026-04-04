import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {
  FiChevronDown,
  FiPhoneCall,
  FiArrowRight,
  FiMenu,
  FiX,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
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
    
    ],
  },
  { title: "Gallery", link: "/gallery", dropdown: [] },
  { title: "Success Story", link: "/story", dropdown: [] },
  { title: "Recruitment", link: "/career", dropdown: [] },
  { title: "FAQ", link: "/faq", dropdown: [] },
  { title: "Contact", link: "/contact", dropdown: [] },
];

const Navbar = () => {
  const [navbarMobileOpen, setNavbarMobileOpen] = useState(false);
  const [navbarActiveDropdown, setNavbarActiveDropdown] = useState(null);
  const [navbarMobileDropdown, setNavbarMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = navbarMobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navbarMobileOpen]);

  useEffect(() => {
    setNavbarMobileOpen(false);
    setNavbarMobileDropdown(null);
  }, [location.pathname]);

  const isParentActive = (item) => {
    if (location.pathname === item.link) return true;
    if (item.dropdown?.length) {
      return item.dropdown.some((sub) => sub.path === location.pathname);
    }
    return false;
  };

  return (
    <>
      <header className="Navbar">
        <div className="Navbar__container">
          {/* LOGO */}
          <Link to="/" className="Navbar__logoWrap">
            <img src={logo} alt="IIIT Logo" className="Navbar__logo" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="Navbar__menu">
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`Navbar__item ${
                  isParentActive(item) ? "Navbar__item--active" : ""
                }`}
                onMouseEnter={() =>
                  item.dropdown.length > 0 && setNavbarActiveDropdown(index)
                }
                onMouseLeave={() => setNavbarActiveDropdown(null)}
              >
                <Link to={item.link} className="Navbar__link">
                  <span>{item.title}</span>
                  {item.dropdown.length > 0 && (
                    <FiChevronDown className="Navbar__linkIcon" />
                  )}
                </Link>

                {item.dropdown.length > 0 && (
                  <div
                    className={`Navbar__dropdown ${
                      navbarActiveDropdown === index ? "Navbar__dropdown--show" : ""
                    }`}
                  >
                    {item.dropdown.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.path}
                        className={`Navbar__dropdownLink ${
                          location.pathname === sub.path
                            ? "Navbar__dropdownLink--active"
                            : ""
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="Navbar__right">
            <a href="tel:+011234567890" className="Navbar__contactBtn">
              <div className="Navbar__contactIcon">
                <FiPhoneCall />
              </div>

              <div className="Navbar__contactTextWrap">
                <span className="Navbar__contactLabel">Contact Us</span>
                <span className="Navbar__contactNumber">+01123 456 7890</span>
              </div>

              <div className="Navbar__contactArrow">
                <FiArrowRight />
              </div>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="Navbar__toggle"
            onClick={() => setNavbarMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`Navbar__overlay ${
          navbarMobileOpen ? "Navbar__overlay--show" : ""
        }`}
        onClick={() => setNavbarMobileOpen(false)}
      ></div>

      {/* MOBILE SIDEBAR */}
      <aside
        className={`Navbar__mobile ${
          navbarMobileOpen ? "Navbar__mobile--show" : ""
        }`}
      >
        <div className="Navbar__mobileTop">
          <Link to="/" className="Navbar__mobileLogoWrap">
            <img src={logo} alt="IIIT Logo" className="Navbar__mobileLogo" />
          </Link>

          <button
            className="Navbar__mobileClose"
            onClick={() => setNavbarMobileOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>

        <div className="Navbar__mobileBody">
          {navItems.map((item, index) => {
            const hasDropdown = item.dropdown.length > 0;
            const isOpen = navbarMobileDropdown === index;
            const isActive = isParentActive(item);

            return (
              <div
                key={index}
                className={`Navbar__mobileItem ${
                  isActive ? "Navbar__mobileItem--active" : ""
                }`}
              >
                <div className="Navbar__mobileRow">
                  <Link
                    to={item.link}
                    className="Navbar__mobileLink"
                    onClick={() => {
                      if (!hasDropdown) {
                        setNavbarMobileOpen(false);
                      }
                    }}
                  >
                    {item.title}
                  </Link>

                  {hasDropdown && (
                    <button
                      className="Navbar__mobileDropdownBtn"
                      onClick={() =>
                        setNavbarMobileDropdown(isOpen ? null : index)
                      }
                      aria-label="Toggle dropdown"
                    >
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </button>
                  )}
                </div>

                {hasDropdown && (
                  <div
                    className={`Navbar__mobileDropdown ${
                      isOpen ? "Navbar__mobileDropdown--show" : ""
                    }`}
                  >
                    {item.dropdown.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.path}
                        className={`Navbar__mobileDropdownLink ${
                          location.pathname === sub.path
                            ? "Navbar__mobileDropdownLink--active"
                            : ""
                        }`}
                        onClick={() => setNavbarMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="Navbar__mobileBottom">
          <a href="tel:+011234567890" className="Navbar__mobileContactBtn">
            <div className="Navbar__mobileContactIcon">
              <FiPhoneCall />
            </div>
            <div className="Navbar__mobileContactText">
              <span>Contact Us</span>
              <p>+01123 456 7890</p>
            </div>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;