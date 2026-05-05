import React, { useState, useEffect } from "react";
import "./LearningPartner.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import API, { ImageUrl } from "../../api/axios";

const LearningPartner = () => {
  const [formOpen, setFormOpen] = useState(true);
  const [partners, setPartners] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    logo: null,
    preview: "",
  });

  // ✅ FETCH FROM BACKEND
  const fetchPartners = async () => {
    try {
      const res = await API.get("/learningpartners");
      setPartners(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

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

  // ✅ SUBMIT (CREATE + UPDATE)
  const handleSubmit = async () => {
    if (!formData.name) return;

    try {
      const form = new FormData();
      form.append("name", formData.name);
      if (formData.logo) form.append("logo", formData.logo);

      if (editingId) {
        // UPDATE
        await API.put(`/learningpartners/${editingId}`, form);
      } else {
        // CREATE
        await API.post("/learningpartners", form);
      }

      fetchPartners();

      // RESET
      setFormData({ name: "", logo: null, preview: "" });
      setEditingId(null);

    } catch (err) {
      console.log(err);
    }
  };

  // ✅ EDIT
  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      logo: null,
      preview: ImageUrl(item.logo),
    });
    setEditingId(item._id);
    setFormOpen(true);
  };

  // ✅ DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/learningpartners/${id}`);
      fetchPartners();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lp-container">

      {/* HEADER */}
      <div className="lp-header">
        <h2>Learning Partner</h2>
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
                <tr key={item._id}>
                  <td>
                    <img
                      src={ImageUrl(item.logo)}
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
  );
};

export default LearningPartner;