import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../../api/axios";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import "./LoginPage.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const res = await API.post("/auth/login", { email, password });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("admin", JSON.stringify(res.data.admin));

        Swal.fire({
          title: "Login Successful 🎉",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });

        navigate(from, { replace: true });
      } else {
        const res = await API.post("/auth/register", {
          name,
          email,
          password,
        });

        Swal.fire({
          title: "Registered Successfully 🎉",
          icon: "success",
        });

        setIsLogin(true);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      Swal.fire(
        "Error ❌",
        err.response?.data?.message || "Something went wrong",
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginPage">
      {/* LEFT SIDE */}
      <div className="loginPage__left">
        <h1 className="loginPage__title">Admin Dashboard</h1>

        <p className="loginPage__desc">
          Securely manage your platform, users, courses and analytics with a
          modern dashboard.
        </p>

        <div className="loginPage__line"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="loginPage__right">
        <div className="loginCard">
          <h2 className="loginCard__title">
            {isLogin ? "Welcome Back 🔐" : "Create Admin 📝"}
          </h2>

          <form onSubmit={handleSubmit} className="loginForm">
            {!isLogin && (
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label>Admin Name</label>
              </div>
            )}

            <div className="inputGroup">
              <input
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email Address</label>
            </div>

            <div className="inputGroup passwordGroup">
              <input
                type={showPass ? "text" : "password"}
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>

              <span className="eyeIcon" onClick={() => setShowPass(!showPass)}>
                {showPass ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>

            <button disabled={loading} className="loginBtn">
              {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
            </button>
          </form>

          <p className="loginToggle">
            {isLogin ? "Don't have admin?" : "Already registered?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Register" : " Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
