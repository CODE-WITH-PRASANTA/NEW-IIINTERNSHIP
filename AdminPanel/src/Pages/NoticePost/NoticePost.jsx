import React, { useState } from "react";
import "./NoticePost.css";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";

const NoticePost = () => {
  const [form, setForm] = useState({
    image: null,
    date: "",
    title: "",
    description: "",
    author: "",
    designation: "",
    links: [""],
    files: [],
  });

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // INPUT HANDLER
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // IMAGE
  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  // FILES (MULTIPLE)
  const handleFiles = (e) => {
    setForm({ ...form, files: [...form.files, ...e.target.files] });
  };

  // LINKS
  const handleLinkChange = (index, value) => {
    const updated = [...form.links];
    updated[index] = value;
    setForm({ ...form, links: updated });
  };

  const addLink = () => {
    setForm({ ...form, links: [...form.links, ""] });
  };

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = form;
      setData(updated);
      setEditIndex(null);
    } else {
      setData([...data, form]);
    }

    setForm({
      image: null,
      date: "",
      title: "",
      description: "",
      author: "",
      designation: "",
      links: [""],
      files: [],
    });
  };

  // DELETE
  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  // EDIT
  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
  };

  return (
    <div className="np-container">
      <h2 className="np-title">Notice Management</h2>

      {/* ================= FORM ================= */}
      <form className="np-form" onSubmit={handleSubmit}>
        <div className="np-grid">
          {/* IMAGE */}
          <div className="np-field">
            <label>Upload Image</label>
            <input type="file" onChange={handleImage} />
          </div>

          {/* DATE */}
          <div className="np-field">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          {/* TITLE */}
          <div className="np-field np-full">
            <label>Notice Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          {/* AUTHOR */}
          <div className="np-field">
            <label>Author Name</label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={handleChange}
            />
          </div>

          {/* DESIGNATION */}
          <div className="np-field">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={form.designation}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="np-field np-full">
          <label>Description</label>
          <Editor
            apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
            value={form.description}
            init={{
              height: 250,
              menubar: false,
            }}
            onEditorChange={(content) =>
              setForm({ ...form, description: content })
            }
          />
        </div>

        {/* LINKS */}
        <div className="np-field np-full">
          <label>Links</label>
          {form.links.map((link, i) => (
            <div key={i} className="np-multiRow">
              <input
                type="text"
                value={link}
                onChange={(e) => handleLinkChange(i, e.target.value)}
              />
            </div>
          ))}
          <button type="button" className="np-addBtn" onClick={addLink}>
            <FaPlus /> Add Link
          </button>
        </div>

        {/* FILES */}
        <div className="np-field np-full">
          <label>Upload Files</label>
          <input type="file" multiple onChange={handleFiles} />
        </div>

        <button className="np-submitBtn">
          {editIndex !== null ? "Update Notice" : "Submit Notice"}
        </button>
      </form>

      {/* ================= TABLE ================= */}
      <div className="np-tableWrapper">
        <table className="np-table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Image</th>
              <th>Date</th>
              <th>Title</th>
              <th>Author</th>
              <th>Designation</th>
              <th>Links</th>
              <th>Files</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {item.image && (
                    <img
                      src={URL.createObjectURL(item.image)}
                      alt=""
                      className="np-thumb"
                    />
                  )}
                </td>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.designation}</td>
                <td>{item.links.length}</td>
                <td>{item.files.length}</td>
                <td className="np-actions">
                  <button onClick={() => handleEdit(index)} className="np-edit">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="np-delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticePost;