import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import API, { ImageUrl } from "../../api/axios";

const Testimonial = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [testimonials, setTestimonials] = useState([]);
  const [editId, setEditId] = useState(null);

  // ✅ FETCH FROM DB
  const fetchTestimonials = async () => {
    try {
      const res = await API.get("/testimonials");
      setTestimonials(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // ✅ IMAGE HANDLE
  const handleImage = (file) => {
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // ✅ SUBMIT (CREATE + UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !designation || !rating || !feedback || !location) return;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("designation", designation);
      formData.append("rating", rating);
      formData.append("feedback", feedback);
      formData.append("location", location);

      if (image) {
        formData.append("image", image);
      }

      if (editId) {
        // 🔄 UPDATE
        await API.put(`/testimonials/${editId}`, formData);
      } else {
        // ➕ CREATE
        await API.post("/testimonials", formData);
      }

      fetchTestimonials();

      // RESET
      setName("");
      setDesignation("");
      setRating(0);
      setFeedback("");
      setLocation("");
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
      await API.delete(`/testimonials/${id}`);
      fetchTestimonials();
    } catch (err) {
      console.log(err);
    }
  };

  // ✏️ EDIT
  const handleEdit = (item) => {
    setName(item.name);
    setDesignation(item.designation);
    setRating(item.rating);
    setFeedback(item.feedback);
    setLocation(item.location);
    setPreview(ImageUrl(item.image));
    setEditId(item._id);
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Testimonial Posting</h2>

      {/* FORM */}
      <div className="testimonial-card">
        <form onSubmit={handleSubmit} className="testimonial-form">

          <div className="testimonial-grid">
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="file"
              onChange={(e) => handleImage(e.target.files[0])}
            />
          </div>

          {/* ⭐ RATING */}
          <div className="rating-section">
            <label>Rating</label>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "star active" : "star"}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Write Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <button type="submit">
            {editId ? "Update" : "Submit"}
          </button>

        </form>
      </div>

      {/* TABLE */}
      <div className="testimonial-table-card">
        <div className="table-header">
          <h3>Testimonial List</h3>
        </div>

        <div className="table-wrapper">
          <table className="testimonial-table">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Rating</th>
                <th>Feedback</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {testimonials.length > 0 ? (
                testimonials.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>

                    <td>
                      <img src={ImageUrl(item.image)} alt="profile" />
                    </td>

                    <td>{item.name}</td>

                    <td>{item.designation}</td>

                    <td className="rating-cell">
                      {"★".repeat(item.rating)}
                    </td>

                    <td className="feedback-cell">{item.feedback}</td>

                    <td>{item.location}</td>

                    <td>
                      <div className="action-btns">
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
              ) : (
                <tr>
                  <td colSpan="8" className="no-data">
                    No testimonials added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;