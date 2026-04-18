import React, { useState } from "react";
import "./LearningPartner.css";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const LearningPartner = () => {
  const [formOpen, setFormOpen] = useState(true);
  const [partners, setPartners] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    logo: null,
    preview: "",
  });

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  // Handle image
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        logo: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  // Submit
  const handleSubmit = () => {
    if (!formData.name || !formData.preview) return;

    if (editingId !== null) {
      const updated = partners.map((item) =>
        item.id === editingId ? { ...formData, id: editingId } : item
      );
      setPartners(updated);
      setEditingId(null);
    } else {
      setPartners([
        ...partners,
        { ...formData, id: Date.now() },
      ]);
    }

    setFormData({ name: "", logo: null, preview: "" });
  };

  // Edit
  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setFormOpen(true);
  };

  // Delete
  const handleDelete = (id) => {
    const filtered = partners.filter((item) => item.id !== id);
    setPartners(filtered);
  };

  return (
    <div className="lp-container">
      {/* HEADER */}
      <div className="lp-header">
        <h2>Learning Partner</h2>
        {/* <button
          className="lp-toggle-btn"
          onClick={() => setFormOpen(!formOpen)}
        >
          <FaPlus /> {formOpen ? "Close Form" : "Add Partner"}
        </button> */}
      </div>

      {/* FORM */}
      <div className={`lp-form-wrapper ${formOpen ? "open" : ""}`}>
        <div className="lp-form">
          <div className="lp-form-row">
            <div className="lp-input-group">
              <label>Organisation Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter organisation name"
              />
            </div>

            <div className="lp-input-group">
              <label>Upload Logo</label>
              <input type="file" onChange={handleImage} />
            </div>
          </div>

          {formData.preview && (
            <div className="lp-preview">
              <img src={formData.preview} alt="preview" />
            </div>
          )}

          <button className="lp-submit-btn" onClick={handleSubmit}>
            {editingId ? "Update" : "Submit"}
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="lp-table-wrapper">
        <table className="lp-table">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Organisation Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {partners.length === 0 ? (
              <tr>
                <td colSpan="3" className="lp-empty">
                  No Data Found
                </td>
              </tr>
            ) : (
              partners.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.preview}
                      alt="logo"
                      className="lp-table-img"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="lp-action-btn edit"
                      onClick={() => handleEdit(item)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="lp-action-btn delete"
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
  );
};

export default LearningPartner;