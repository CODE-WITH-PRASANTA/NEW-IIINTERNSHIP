import React, { useState } from "react";
import "./SucessStory.css";
import { Editor } from "@tinymce/tinymce-react";

const SucessStory = () => {
  const [openForm, setOpenForm] = useState(true);
  const [openTable, setOpenTable] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quotes: "",
    date: "",
    author: "",
    designation: "",
    location: "",
    category: "",
    banner: null,
    tags: "",
  });

  const [stories, setStories] = useState([]);
  const [editId, setEditId] = useState(null);

  const categories = [
    "Startup",
    "Education",
    "Technology",
    "Motivation",
    "Business",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "banner") {
      setFormData({ ...formData, banner: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updated = stories.map((item) =>
        item.id === editId ? { ...formData, id: editId } : item
      );
      setStories(updated);
      setEditId(null);
    } else {
      setStories([{ ...formData, id: Date.now() }, ...stories]);
    }

    setFormData({
      title: "",
      description: "",
      quotes: "",
      date: "",
      author: "",
      designation: "",
      location: "",
      category: "",
      banner: null,
      tags: "",
    });
  };

  const handleEdit = (story) => {
    setFormData(story);
    setEditId(story.id);
    setOpenForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    setStories(stories.filter((item) => item.id !== id));
  };

  return (
    <div className="successStory-container">
      <h1 className="main-title">Success Story Management</h1>

      {/* FORM DROPDOWN */}
      <div className="accordion-box">
        <div
          className="accordion-header"
          onClick={() => setOpenForm(!openForm)}
        >
          <h2>Create / Edit Story</h2>
          <span>{openForm ? "−" : "+"}</span>
        </div>

        {openForm && (
          <div className="card-box">
            <form onSubmit={handleSubmit}>
              {/* BASIC */}
              <div className="section-box">
                <h3>Basic Information</h3>
                <div className="form-grid">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="quotes"
                    placeholder="Quotes"
                    value={formData.quotes}
                    onChange={handleChange}
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    {categories.map((c, i) => (
                      <option key={i}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* AUTHOR */}
              <div className="section-box">
                <h3>Author Information</h3>
                <div className="form-grid">
                  <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={formData.author}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* MEDIA */}
              <div className="section-box">
                <h3>Media & Tags</h3>
                <div className="form-grid">
                  <input type="file" name="banner" onChange={handleChange} />
                  <input
                    type="text"
                    name="tags"
                    placeholder="Tags"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>

                {formData.banner && (
                  <img
                    src={URL.createObjectURL(formData.banner)}
                    alt=""
                    className="preview-img"
                  />
                )}
              </div>

              {/* EDITOR */}
              <div className="section-box">
                <h3>Description</h3>
                <Editor
                  apiKey="your-key"
                  value={formData.description}
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: "link image code lists",
                    toolbar:
                      "undo redo | bold italic | alignleft aligncenter alignright | bullist numlist",
                  }}
                  onEditorChange={(content) =>
                    setFormData({ ...formData, description: content })
                  }
                />
              </div>

              <button className="submit-btn">
                {editId ? "Update Story" : "Publish Story"}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* TABLE DROPDOWN */}
      <div className="accordion-box">
        <div
          className="accordion-header"
          onClick={() => setOpenTable(!openTable)}
        >
          <h2>All Stories</h2>
          <span>{openTable ? "−" : "+"}</span>
        </div>

        {openTable && (
          <div className="card-box">
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Quotes</th>
                    <th>Author</th>
                    <th>Designation</th>
                    <th>Location</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Tags</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {stories.length > 0 ? (
                    stories.map((story) => (
                      <tr key={story.id}>
                        <td>{story.title}</td>
                        <td>{story.quotes}</td>
                        <td>{story.author}</td>
                        <td>{story.designation}</td>
                        <td>{story.location}</td>
                        <td>{story.category}</td>
                        <td>{story.date}</td>
                        <td>{story.tags}</td>
                        <td>
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(story)}
                          >
                            Edit
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(story.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="no-data">
                        No Stories Available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SucessStory;