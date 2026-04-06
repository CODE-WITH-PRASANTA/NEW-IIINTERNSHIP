import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// 👉 IMPORT YOUR IMAGE HERE
import signupImg from "../../assets/blog2.webp"; // change path if needed

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="signupPage">
      <div className="signupPage__container">
        
        {/* LEFT SIDE */}
        <div className="signupPage__left">
          <img
            src={signupImg}
            alt="Student learning"
            className="signupPage__image"
          />

<div className="signupPage__overlay">
  <div className="signupPage__overlayContent">

    <h2 className="signupPage__welcome">Welcome To</h2>

    <h1 className="signupPage__brand">
      UNIQUE RECORDS OF IIT
    </h1>

    <h3 className="signupPage__portal">SIGNUP PORTAL</h3>

    <p className="signupPage__description">
      Create your account and login to register your name as a
      "Unique Records of the Universe" holder. Apply online to
      participate in various events and award ceremonies.
    </p>

  </div>
</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="signupPage__right">
          <div className="signupPage__formBox">
            <h2 className="signupPage__title">Create Account</h2>

            <form className="signupPage__form">
              
              <input
                type="text"
                placeholder="Full Name"
                className="signupPage__input"
              />

              <div className="signupPage__row">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="signupPage__input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="signupPage__input"
                />
              </div>

              <div className="signupPage__passwordField">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  className="signupPage__input"
                />
                <span
                  className="signupPage__eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="signupPage__passwordField">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="signupPage__input"
                />
                <span
                  className="signupPage__eye"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button type="submit" className="signupPage__button">
                Register
              </button>

<p className="signupPage__loginText">
  Already have an account?{" "}
  <Link to="/login" className="signupPage__loginLink">
    Log In
  </Link>
</p>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;