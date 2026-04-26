import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaNewspaper,
  FaImages,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaUserTie,
  FaCommentDots,
  FaChevronDown,
  FaAddressBook,
  FaMoneyBillWave,
  FaUserGraduate,
  FaClipboardList,
  FaQuoteLeft,
  FaUsers,        // ✅ ADD THIS
  FaBook,         // ✅ ADD THIS
  FaTrophy,       // ✅ ADD THIS
  FaFolderPlus    // ✅ ADD THIS
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
 const menu = [
  { name: "Dashboard", path: "/", icon: <FaHome /> },

  { name: "Event Gallery", path: "/events/upload", icon: <FaImages /> },

  { name: "Learning Partners", path: "/learning-partners", icon: <FaUsers /> },

  {
    name: "Course Management",
    icon: <FaBook />,
    submenu: [
      { name: "Create Course", path: "/course/post", icon: <FaClipboardList /> },
      { name: "Manage Courses", path: "/course/manage", icon: <FaClipboardList /> },
      { name: "Course Preview", path: "/course/preview", icon: <FaClipboardList /> },
      { name: "Virtual Internship", path: "/course/virtual", icon: <FaClipboardList /> },
      { name: "Manage Virtual Internship", path: "/course/manage/virtual", icon: <FaClipboardList /> },
    ],
  },

  {
    name: "Success Stories",
    icon: <FaTrophy />,
    submenu: [
      { name: "Add Success Story", path: "/success-story/post", icon: <FaQuoteLeft /> },
      { name: "Story Preview", path: "/success-story/preview", icon: <FaQuoteLeft /> },
      { name: "Client Reviews", path: "/success-story/review", icon: <FaCommentDots /> },
    ],
  },

  {
    name: "Mentor Management",
    icon: <FaUserTie />,
    submenu: [
      { name: "Add Mentor", path: "/mentor/add", icon: <FaUserTie /> },
      { name: "Manage Instructors", path: "/instructor/manage", icon: <FaUserTie /> },
      { name: "Assign Courses", path: "/instructor/assign-courses", icon: <FaClipboardList /> },
      { name: "Assignments", path: "/instructor/assignments", icon: <FaClipboardList /> },
      { name: "Payments & Payouts", path: "/instructor/payment", icon: <FaMoneyBillWave /> },
      { name: "Attendance Management", path: "/instructor/attendance", icon: <FaClipboardList /> },
    ],
  },

  {
    name: "Category Management",
    icon: <FaFolderPlus />,
    submenu: [
      { name: "Create Category", path: "/category/create", icon: <FaFolderPlus /> },
      { name: "Category Overview", path: "/category/preview", icon: <FaClipboardList /> },
    ],
  },

  {
    name: "Testimonials",
    icon: <FaCommentDots />,
    submenu: [
      { name: "Add Testimonial", path: "/testimonial/add", icon: <FaQuoteLeft /> },
      { name: "View Testimonials", path: "/testimonial/view", icon: <FaQuoteLeft /> },
    ],
  },

  {
    name: "Student Management",
    icon: <FaUserGraduate />,
    submenu: [
      { name: "Enroll Student", path: "/student/enroll", icon: <FaClipboardList /> },
      { name: "Manage Students", path: "/student/manage", icon: <FaUserGraduate /> },
      { name: "Internship Progress", path: "/student/progress", icon: <FaClipboardList /> },
      { name: "Student Assignments", path: "/student/assignments", icon: <FaClipboardList /> },
      { name: "Payment Tracking", path: "/student/payment", icon: <FaMoneyBillWave /> },
      { name: "Attendance & Leave", path: "/student/attendance", icon: <FaClipboardList /> },
    ],
  },


  

  {
    name: "Financial Management",
    icon: <FaMoneyBillWave />,
    submenu: [
      { name: "Transaction History", path: "/payment/history", icon: <FaMoneyBillWave /> },
      { name: "Pending Payments", path: "/payment/pending", icon: <FaMoneyBillWave /> },
      { name: "Generate Invoice", path: "/payment/invoice", icon: <FaMoneyBillWave /> },
    ],
  },

  {
    name: "Feedback Management",
    icon: <FaCommentDots />,
    submenu: [
      { name: "Submit Feedback", path: "/feedback/add", icon: <FaCommentDots /> },
      { name: "Feedback Overview", path: "/feedback/view", icon: <FaCommentDots /> },
    ],
  },

  {
    name: "Analytics & Reports",
    icon: <FaClipboardList />,
    submenu: [
      { name: "Student Reports", path: "/reports/students", icon: <FaClipboardList /> },
      { name: "Course Reports", path: "/reports/courses", icon: <FaClipboardList /> },
      { name: "Instructor Reports", path: "/reports/instructors", icon: <FaClipboardList /> },
      { name: "Payment Reports", path: "/reports/payments", icon: <FaMoneyBillWave /> },
      { name: "Attendance Reports", path: "/reports/attendance", icon: <FaClipboardList /> },
    ],
  },

  {
    name: "Notifications",
    icon: <FaCommentDots />,
    submenu: [
      { name: "Send Notification", path: "/notifications/send", icon: <FaCommentDots /> },
      { name: "Inbox Management", path: "/notifications/manage", icon: <FaCommentDots /> },
    ],
  },

  {
    name: "Notice Management",
    icon: <FaNewspaper />,
    submenu: [
      { name: "Post Notice", path: "/admin/notices/post", icon: <FaNewspaper /> },
      { name: "Manage Notices", path: "/admin/notices/manage", icon: <FaNewspaper /> },
    ],
  },

  {
    name: "Media Management",
    icon: <FaImages />,
    submenu: [
      { name: "Course Materials", path: "/media/course-materials", icon: <FaImages /> },
      { name: "Certificates", path: "/media/certificates", icon: <FaImages /> },
    ],
  },

   {
    name: "Carreier",
    icon: <FaCommentDots />,
    submenu: [
      { name: "Crreier", path: "/admin/carreier", icon: <FaQuoteLeft /> },
      { name: "Apply Form", path: "/admin/carreierapplyform", icon: <FaQuoteLeft /> },
      
    ],
  },

  {
    name: "Gallery",
    icon: <FaCommentDots />,
    submenu: [
      { name: "Gallery", path: "/admin/gallery", icon: <FaQuoteLeft /> },
      
      
    ],
  },

   {
    name: "Project Posting",
    icon: <FaCommentDots />,
    submenu: [
      { name: "Project Posting", path: "/admin/projectposting", icon: <FaQuoteLeft /> },
      
      
    ],
  },

  {
    name: "System Settings",
    icon: <FaAddressBook />,
    submenu: [
      { name: "Platform Settings", path: "/settings/platform", icon: <FaAddressBook /> },
      { name: "Admin Users", path: "/settings/admin-users", icon: <FaUserTie /> },
      { name: "System Configuration", path: "/settings/system-config", icon: <FaClipboardList /> },
    ],
  },
];
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const handleMenuClick = () => {
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && isMobile && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`admin-sidebar ${sidebarOpen ? "open" : "close"}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="sidebar-brand-icon">A</div>

            {sidebarOpen && (
              <div className="sidebar-brand-text">
                <h2>Admin Panel</h2>
                <p>Management System</p>
              </div>
            )}
          </div>
        </div>

        <nav className="sidebar-menu">
          {menu.map((item, index) => {
            if (item.type === "section") {
              return sidebarOpen ? (
                <div className="sidebar-section" key={`${item.label}-${index}`}>
                  {item.label}
                </div>
              ) : null;
            }

            return (
              <div className="sidebar-menu-item" key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      className={`menu-btn ${openMenu === item.name ? "expanded" : ""}`}
                      onClick={() => toggleMenu(item.name)}
                    >
                      <div className="menu-main">
                        <span className="menu-icon">{item.icon}</span>
                        {sidebarOpen && <span className="menu-text">{item.name}</span>}
                      </div>

                      {sidebarOpen && (
                        <span className={`menu-arrow ${openMenu === item.name ? "rotate" : ""}`}>
                          <FaChevronDown />
                        </span>
                      )}
                    </button>

                    {openMenu === item.name && sidebarOpen && (
                      <div className="submenu">
                        {item.submenu.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            onClick={handleMenuClick}
                            className={({ isActive }) =>
                              `submenu-link ${isActive ? "active" : ""}`
                            }
                          >
                            <span className="submenu-icon">{sub.icon}</span>
                            <span className="submenu-text">{sub.name}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={handleMenuClick}
                    className={({ isActive }) =>
                      `menu-link ${isActive ? "active" : ""}`
                    }
                  >
                    <div className="menu-main">
                      <span className="menu-icon">{item.icon}</span>
                      {sidebarOpen && <span className="menu-text">{item.name}</span>}
                    </div>
                  </NavLink>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}