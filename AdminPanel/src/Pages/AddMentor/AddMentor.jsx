import React, { useState, useEffect } from "react";
import "./AddMentor.css";
import API, { ImageUrl } from "../../api/axios";

const AddMentor = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [mentors, setMentors] = useState([]);
  const [editId, setEditId] = useState(null);

  // ✅ FETCH MENTORS FROM DB
  const fetchMentors = async () => {
    try {
      const res = await API.get("/mentors");
      setMentors(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  // ✅ HANDLE IMAGE
  const handleImage = (file) => {
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // ✅ SUBMIT (CREATE + UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !designation) return;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("designation", designation);
      if (image) formData.append("image", image);

      if (editId) {
        // 🔄 UPDATE
        await API.put(`/mentors/${editId}`, formData);
      } else {
        // ➕ CREATE
        await API.post("/mentors", formData);
      }

      // 🔁 REFRESH LIST
      fetchMentors();

      // RESET
      setName("");
      setDesignation("");
      setImage(null);
      setPreview(null);
      setEditId(null);

    } catch (err) {
      console.log(err);
    }
  };

  // ❌ DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/mentors/${id}`);
      fetchMentors();
    } catch (err) {
      console.log(err);
    }
  };

  // ✏️ EDIT
  const handleEdit = (item) => {
    setName(item.name);
    setDesignation(item.designation);
    setPreview(ImageUrl(item.image));
    setEditId(item._id);
  };

  return (
    <div className="addmentor-container">
      <h2 className="addmentor-heading">Add Mentor</h2>

      <div className="addmentor-grid">
        {/* FORM */}
        <div className="addmentor-card">
          <h3>{editId ? "Edit Mentor" : "Add Mentor Details"}</h3>

          <form onSubmit={handleSubmit} className="addmentor-form">
            <input
              type="text"
              placeholder="Enter Mentor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />

            <input
              type="file"
              onChange={(e) => handleImage(e.target.files[0])}
            />

            <button type="submit">
              {editId ? "Update Mentor" : "Submit"}
            </button>
          </form>
        </div>

        {/* PREVIEW */}
        <div className="addmentor-card">
          <h3>Live Preview</h3>

          <div className="addmentor-preview">
            {preview ? (
              <>
                <img src={preview} alt="preview" />
                <h4>{name || "Mentor Name"}</h4>
                <p>{designation || "Designation"}</p>
              </>
            ) : (
              <p className="placeholder">Preview will appear here</p>
            )}
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="addmentor-table-card">
        <h3>Mentor List</h3>

        <div className="table-wrapper">
          <div className="table-scroll">
            <table className="addmentor-table">
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {mentors.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="no-data">
                      No Mentors Added
                    </td>
                  </tr>
                ) : (
                  mentors.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>
                        <img src={ImageUrl(item.image)} alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.designation}</td>
                      <td>
                        <div className="action-group">
                          <button
                            className="btn edit-btn"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>

                          <button
                            className="btn delete-btn"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMentor;