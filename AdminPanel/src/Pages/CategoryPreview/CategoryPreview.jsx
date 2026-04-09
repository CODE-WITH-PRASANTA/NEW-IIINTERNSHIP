import React, { useState } from "react";
import "./CategoryPreview.css";
import { FaEllipsisV } from "react-icons/fa";
import Swal from "sweetalert2";

const CategoryPreview = ({ categories: propCategories, setCategories: propSetCategories }) => {
  
  // ✅ FALLBACK DUMMY DATA
  const [localCategories, setLocalCategories] = useState([
    {
      id: 1,
      title: "Web Development",
      published: true,
      images: [
        { preview: "https://picsum.photos/400/300?1" },
        { preview: "https://picsum.photos/400/300?2" },
        { preview: "https://picsum.photos/400/300?3" },
      ],
    },
    {
      id: 2,
      title: "UI/UX Design",
      published: false,
      images: [
        { preview: "https://picsum.photos/400/300?4" },
        { preview: "https://picsum.photos/400/300?5" },
      ],
    },
    {
      id: 3,
      title: "Digital Marketing",
      published: true,
      images: [
        { preview: "https://picsum.photos/400/300?6" },
      ],
    },
  ]);

  // ✅ USE PROP OR FALLBACK
  const categories = propCategories ?? localCategories;
  const setCategories = propSetCategories ?? setLocalCategories;

  const [activeMenu, setActiveMenu] = useState(null);

  // DELETE
  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete?",
      text: "This category will be removed",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
    }).then((res) => {
      if (res.isConfirmed) {
        setCategories(categories.filter((c) => c.id !== id));
      }
    });
  };

  // TOGGLE PUBLISH
  const togglePublish = (id, status) => {
    const updated = categories.map((c) =>
      c.id === id ? { ...c, published: status } : c
    );
    setCategories(updated);
  };

  return (
    <div className="cpv-container">
      <h2 className="cpv-title">Category Preview</h2>

      <div className="cpv-grid">
        {categories?.length > 0 ? (
          categories.map((item) => (
            <div className="cpv-card" key={item.id}>
              
              {/* IMAGE SLIDER */}
              <div className="cpv-slider">
                {item.images?.map((img, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`slider-${item.id}`}
                    defaultChecked={i === 0}
                  />
                ))}

                <div className="cpv-slides">
                  {item.images?.map((img, i) => (
                    <div className="cpv-slide" key={i}>
                      <img src={img.preview} alt="" />
                    </div>
                  ))}
                </div>

                {/* DOTS */}
                <div className="cpv-dots">
                  {item.images?.map((_, i) => (
                    <label key={i}></label>
                  ))}
                </div>
              </div>

              {/* HEADER */}
              <div className="cpv-header">
                <h4>{item.title}</h4>

                <div className="cpv-menu-wrapper">
                  <FaEllipsisV
                    onClick={() =>
                      setActiveMenu(activeMenu === item.id ? null : item.id)
                    }
                  />

                  <div
                    className={`cpv-menu ${
                      activeMenu === item.id ? "show" : ""
                    }`}
                  >
                    {item.published ? (
                      <button onClick={() => togglePublish(item.id, false)}>
                        Unpublish
                      </button>
                    ) : (
                      <button onClick={() => togglePublish(item.id, true)}>
                        Publish
                      </button>
                    )}

                    <button
                      className="delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {/* STATUS */}
              <div className="cpv-status">
                {item.published ? "🟢 Published" : "⚪ Draft"}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No Categories Found</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPreview;