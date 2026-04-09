import React, { useState, useEffect } from "react";
import "./ViewTestimonials.css";
import { FaStar, FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Web Developer",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    rating: 5,
    description:
      "Amazing platform! It helped me grow my skills and land my dream job.",
  },
  {
    id: 2,
    name: "Sarah Smith",
    designation: "UI/UX Designer",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 4,
    description:
      "Great learning experience with practical examples and real projects.",
  },
  {
    id: 3,
    name: "Michael Lee",
    designation: "Business Analyst",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 5,
    description:
      "Highly recommend this! The content quality is top-notch.",
  },
];

const ViewTestimonials = () => {
  const [openMenuId, setOpenMenuId] = useState(null);

  // Close menu when clicking anywhere
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenMenuId(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleEdit = (item) => {
    console.log("Edit:", item);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  return (
    <div className="vt-container">
      <h2 className="vt-title">Testimonials</h2>

      <div className="vt-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="vt-card">
            
            {/* MENU */}
            <div
              className="vt-menu-wrapper"
              onClick={(e) => e.stopPropagation()} // 🔥 important
            >
              <FaEllipsisV
                className="vt-menu-icon"
                onClick={(e) => {
                  e.stopPropagation(); // 🔥 prevent closing instantly
                  setOpenMenuId(
                    openMenuId === item.id ? null : item.id
                  );
                }}
              />

              {openMenuId === item.id && (
                <div className="vt-menu-dropdown">
                  <div
                    className="vt-menu-item"
                    onClick={() => handleEdit(item)}
                  >
                    <FaEdit /> Edit
                  </div>

                  <div
                    className="vt-menu-item delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash /> Delete
                  </div>
                </div>
              )}
            </div>

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="vt-card-img"
            />

            {/* BODY */}
            <div className="vt-card-body">
              <h3 className="vt-card-name">{item.name}</h3>
              <p className="vt-card-designation">
                {item.designation}
              </p>
              <p className="vt-card-location">📍 {item.location}</p>

              <div className="vt-card-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < item.rating
                        ? "vt-star-filled"
                        : "vt-star-empty"
                    }
                  />
                ))}
              </div>

              <p className="vt-card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTestimonials;