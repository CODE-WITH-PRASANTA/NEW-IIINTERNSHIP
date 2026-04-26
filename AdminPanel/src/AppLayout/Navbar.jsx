import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
// import "./Navbar.css";
import API from "../api/axios";
import Swal from "sweetalert2";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {



  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

 const handleLogout = async () => {
  try {
    await API.post("/auth/logout", {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    // 🧹 Clear storage
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("isAdmin");

    // 🔔 Alert
    Swal.fire({
      title: "Logged out 👋",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });

    // 🔄 Redirect to login
    navigate("/login");

  } catch (err) {
    console.error(err);

    // Even if API fails, still logout locally
    localStorage.clear();
    navigate("/login");
  }
};

  const handleGoToProfile = () => {
    navigate("/admin/profile");
    setOpenProfile(false);
  };

  const handleGoToSettings = () => {
    navigate("/admin/settings");
    setOpenProfile(false);
  };

  return (
    <header className="admin-navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <h2 className="navbar-title">Admin Dashboard</h2>
      </div>

      <div className="navbar-profile">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="profile-img"
          onClick={() => setOpenProfile(!openProfile)}
        />

        {openProfile && (
          <div className="profile-dropdown">
            <button className="dropdown-item" onClick={handleGoToProfile}>
              <FaUser /> Profile
            </button>

            <button className="dropdown-item" onClick={handleGoToSettings}>
              <FaCog /> Settings
            </button>

            <button onClick={handleLogout} className="dropdown-item logout">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}