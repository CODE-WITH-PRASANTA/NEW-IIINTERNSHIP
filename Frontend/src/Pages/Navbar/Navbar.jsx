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
import logo from "../../assets/Logo.png";

/* =========================
   NAV ITEMS WITH ROUTES
========================= */
const navItems = [
  {
    title: "Home",
    link: "/",
    dropdown: [],
  },
  {
    title: "Courses",
    link: "/courses",
    dropdown: [
      { name: "Course Grid", path: "/courses/grid" },
      { name: "Course List", path: "/courses/list" },
      { name: "Course Grid Video", path: "/courses/grid-video" },
      { name: "Courses Details", path: "/courses/details" },
    ],
  },
  {
    title: "Instructors",
    link: "/instructors",
    dropdown: [
      { name: "Instructors", path: "/instructors" },
      { name: "Instructors Details", path: "/instructors/details" },
    ],
  },
  {
    title: "Blog",
    link: "/blog",
    dropdown: [
      { name: "Blog", path: "/blog" },
      { name: "Blog Sidebar", path: "/blog/sidebar" },
      { name: "Blog Details", path: "/blog/details" },
    ],
  },
  {
    title: "Pages",
    link: "/about",
    dropdown: [
      { name: "About Us", path: "/about" },
      { name: "Faqs", path: "/faq" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Pricing Plans", path: "/pricing" },
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
      { name: "Contact Us", path: "/contact" },
      { name: "Error 404", path: "/404" },
    ],
  },
];

const Navbar = () => {
  const [navbarMobileOpen, setNavbarMobileOpen] = useState(false);
  const [navbarMobileDropdown, setNavbarMobileDropdown] = useState(null);
  const [navbarActiveDropdown, setNavbarActiveDropdown] = useState(null);

  useEffect(() => {
    document.body.style.overflow = navbarMobileOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [navbarMobileOpen]);

  const handleMobileDropdown = (index) => {
    setNavbarMobileDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">

          {/* LOGO */}
          <div className="navbar__logoWrap">
            <Link to="/" className="navbar__logoLink">
              <img src={logo} alt="EduThink Logo" className="navbar__logo" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <nav className="navbar__desktopNav">
            <ul className="navbar__menu">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="navbar__menuItem"
                  onMouseEnter={() =>
                    item.dropdown.length && setNavbarActiveDropdown(index)
                  }
                  onMouseLeave={() => setNavbarActiveDropdown(null)}
                >
                  <Link to={item.link} className="navbar__menuLink">
                    {item.title}
                    {item.dropdown.length > 0 && (
                      <FiChevronDown className="navbar__menuArrow" />
                    )}
                  </Link>

                  {/* DROPDOWN */}
                  {item.dropdown.length > 0 && (
                    <div
                      className={`navbar__dropdown ${
                        navbarActiveDropdown === index
                          ? "navbar__dropdown--open"
                          : ""
                      }`}
                    >
                      <ul className="navbar__dropdownList">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex} className="navbar__dropdownItem">
                            <Link
                              to={subItem.path}
                              className="navbar__dropdownLink"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT SIDE */}
          <div className="navbar__right">
            <a href="tel:+011234567890" className="navbar__phone">
              <FiPhoneCall className="navbar__phoneIcon" />
              <span>+01123 456 7890</span>
            </a>

            <Link to="/contact" className="navbar__contactBtn">
              <span>Contact Us</span>
              <span className="navbar__contactIconWrap">
                <FiArrowRight />
              </span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="navbar__toggle"
            onClick={() => setNavbarMobileOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`navbar__overlay ${
          navbarMobileOpen ? "navbar__overlay--show" : ""
        }`}
        onClick={() => setNavbarMobileOpen(false)}
      ></div>

      {/* MOBILE SIDEBAR */}
      <aside
        className={`navbar__mobileSidebar ${
          navbarMobileOpen ? "navbar__mobileSidebar--open" : ""
        }`}
      >
        <div className="navbar__mobileHeader">
          <img src={logo} className="navbar__mobileLogo" />

          <button onClick={() => setNavbarMobileOpen(false)}>
            <FiX />
          </button>
        </div>

        <ul className="navbar__mobileMenu">
          {navItems.map((item, index) => (
            <li key={index} className="navbar__mobileItem">
              <div
                className="navbar__mobileTop"
                onClick={() =>
                  item.dropdown.length
                    ? handleMobileDropdown(index)
                    : setNavbarMobileOpen(false)
                }
              >
                <Link to={item.link}>{item.title}</Link>

                {item.dropdown.length > 0 && <FiChevronDown />}
              </div>

              {item.dropdown.length > 0 && (
                <div
                  className={`navbar__mobileDropdown ${
                    navbarMobileDropdown === index
                      ? "navbar__mobileDropdown--open"
                      : ""
                  }`}
                >
                  {item.dropdown.map((subItem, i) => (
                    <Link
                      key={i}
                      to={subItem.path}
                      className="navbar__mobileDropdownLink"
                      onClick={() => setNavbarMobileOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;