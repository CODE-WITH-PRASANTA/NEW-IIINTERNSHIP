import React from "react";
import "./Footer.css";
import { FiArrowRight } from "react-icons/fi";
import footerImage from "../../assets/F-img.webp";
import footerCircle from "../../assets/F-Circle.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__topLeft">
            <span className="footer__sparkle">✦</span>
            <h2 className="footer__title">
              Sign Up to Receive
              <br />
              Our Latest Updates
            </h2>
          </div>

          <div className="footer__topRight">
            <form className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email here"
                className="footer__input"
              />
              <button type="submit" className="footer__submitBtn">
                <span className="footer__submitText">Submit</span>
                <span className="footer__submitIcon">
                  <FiArrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__middle">
          <div className="footer__linksWrap">
            <div className="footer__column">
              <h3 className="footer__heading">Get In Touch</h3>

              <div className="footer__group">
                <p className="footer__label">Call us directly?</p>
                <a href="tel:+921234567890" className="footer__highlightLink">
                  +92 (123) 456–7890
                </a>
              </div>

              <div className="footer__group">
                <p className="footer__label">Address</p>
                <a href="/" className="footer__highlightLink">
                  123 Innovation Lane
                </a>
              </div>

              <div className="footer__group">
                <p className="footer__label">Supports</p>
                <a
                  href="mailto:info@example.com"
                  className="footer__highlightLink"
                >
                  info@example.com
                </a>
              </div>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">Popular Courses</h3>
              <ul className="footer__list">
                <li><a href="/" className="footer__link">Business Management</a></li>
                <li><a href="/" className="footer__link">Arts & Design</a></li>
                <li><a href="/" className="footer__link">Personal Development</a></li>
                <li><a href="/" className="footer__link">Health & Fitness</a></li>
                <li><a href="/" className="footer__link">Data Science</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__heading">Links</h3>
              <ul className="footer__list">
                <li><a href="/" className="footer__link">Home</a></li>
                <li><a href="/" className="footer__link">About</a></li>
                <li><a href="/" className="footer__link">Gallery</a></li>
                <li><a href="/" className="footer__link">Suscess Story</a></li>
                <li><a href="/" className="footer__link">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__imageWrap">
            <img
              src={footerCircle}
              alt="Circle Shape"
              className="footer__circleShape"
            />
            <div className="footer__imageBox">
              <img
                src={footerImage}
                alt="Students"
                className="footer__mainImage"
              />
            </div>
          </div>
        </div>

     <div className="footer__bottom">
        <p className="footer__copyright">
          © 2026 DPKHRC Trust. Crafted with ❤️ by{" "}
          <a
            href="https://prwebstock.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__brand"
          >
            PR Webstock
          </a>
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;