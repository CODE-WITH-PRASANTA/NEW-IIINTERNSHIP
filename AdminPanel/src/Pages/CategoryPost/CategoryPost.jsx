import React, { useState } from "react";
import "./CategoryPost.css";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CategoryPost = () => {
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    images: [], // multiple images
  });

  // TITLE CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  // IMAGE ADD
  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFormData({
      ...formData,
      images: [...formData.images, ...newImages],
    });
  };

  // REMOVE IMAGE
  const removeImage = (index) => {
    const updated = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updated });
  };

  // SUBMIT
  const handleSubmit = () => {
    if (!formData.title || formData.images.length === 0) {
      Swal.fire("Error", "All fields required", "error");
      return;
    }

    if (editingId !== null) {
      const updated = categories.map((item) =>
        item.id === editingId ? { ...formData, id: editingId } : item
      );
      setCategories(updated);
      setEditingId(null);
    } else {
      setCategories([...categories, { ...formData, id: Date.now() }]);
    }

    setFormData({ title: "", images: [] });
  };

  // EDIT
  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
  };

  // DELETE
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This category will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCategories(categories.filter((item) => item.id !== id));
        Swal.fire("Deleted!", "Category removed.", "success");
      }
    });
  };

  return (
    <div className="cp-container">
      {/* FORM */}
      <div className="cp-form-section">
        <h3 className="cp-heading">
          {editingId ? "Edit Category" : "Add Category"}
        </h3>

        <div className="cp-form">
          <div className="cp-input-group">
            <label>Category Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter category title"
            />
          </div>

          {/* MULTI IMAGE UPLOAD */}
          <div className="cp-input-group">
            <label>Upload Icons</label>

            <div className="cp-upload-box">
              {formData.images.map((img, index) => (
                <div key={index} className="cp-preview-item">
                  <img src={img.preview} alt="" />
                  <span onClick={() => removeImage(index)}>×</span>
                </div>
              ))}

              {/* ADD BUTTON */}
              <label className="cp-add-btn">
                <FaPlus />
                <input
                  type="file"
                  multiple
                  onChange={handleImage}
                  hidden
                />
              </label>
            </div>
          </div>

          <button className="cp-submit-btn" onClick={handleSubmit}>
            {editingId ? "Update" : "Submit"}
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="cp-table-section">
        <h3 className="cp-heading">Category List</h3>

        <div className="cp-table-wrapper">
          <table className="cp-table">
            <thead>
              <tr>
                <th>Icons</th>
                <th>Category Title</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan="3" className="cp-empty">
                    No Data Found
                  </td>
                </tr>
              ) : (
                categories.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cp-table-images">
                        {item.images.map((img, i) => (
                          <img key={i} src={img.preview} alt="" />
                        ))}
                      </div>
                    </td>

                    <td>{item.title}</td>

                    <td>
                      <button
                        className="cp-action-btn edit"
                        onClick={() => handleEdit(item)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="cp-action-btn delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;