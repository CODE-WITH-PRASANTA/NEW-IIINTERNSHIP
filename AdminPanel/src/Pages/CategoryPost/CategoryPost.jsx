import React, { useState } from "react";
import "./CategoryPost.css";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import API, { ImageUrl } from "../../api/axios";
import { useEffect } from "react";

const CategoryPost = () => {
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    images: [], // multiple images
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/api/categories");
      setCategories(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

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
  useEffect(() => {
    return () => {
      formData.images.forEach((img) => {
        if (img.file && img.preview) {
          URL.revokeObjectURL(img.preview);
        }
      });
    };
  }, [formData.images]);
  // REMOVE IMAGE
  const removeImage = (index) => {
    const updated = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updated });
  };

  // EDIT
  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      images: item.images.map((img) => ({
        preview: ImageUrl(img), // show existing image
      })),
    });

    setEditingId(item._id);
  };

  const handleSubmit = async () => {
    if (!formData.title || formData.images.length === 0) {
      Swal.fire("Error", "Title & at least one image required", "error");
      return;
    }

    try {
      const fd = new FormData();
      fd.append("title", formData.title);

      formData.images.forEach((img) => {
        if (img.file) {
          // ✅ new uploaded image
          fd.append("images", img.file);
        } else if (img.preview) {
          // ✅ existing image
          fd.append("existingImages", img.preview);
        }
      });

      if (editingId) {
        await API.put(`/api/categories/${editingId}`, fd);
        Swal.fire("Updated", "Category updated", "success");
      } else {
        await API.post("/api/categories", fd);
        Swal.fire("Success", "Category added", "success");
      }

      setFormData({ title: "", images: [] });
      setEditingId(null);
      fetchCategories();
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This category will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await API.delete(`/api/categories/${id}`);
          fetchCategories();
          Swal.fire("Deleted!", "Category removed.", "success");
        } catch (err) {
          console.error(err);
        }
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
                  <img
                    src={img.preview}
                    style={{
                      border: img.file ? "2px solid green" : "2px solid blue",
                    }}
                  />
                  <span onClick={() => removeImage(index)}>×</span>
                </div>
              ))}

              {/* ADD BUTTON */}
              <label className="cp-add-btn">
                <FaPlus />
                <input type="file" multiple onChange={handleImage} hidden />
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
                  <tr key={item._id}>
                    <td>
                      <div className="cp-table-images">
                        {item.images.map((img, i) => (
                          <img key={i} src={ImageUrl(img)} alt="" />
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
                        onClick={() => handleDelete(item._id)}
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
