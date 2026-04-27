import "./NoticePost.css";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState, useEffect } from "react";
import API from "../../api/axios";

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

  useEffect(() => {
    loadNotices();
  }, []);

  const loadNotices = async () => {
    try {
      const res = await API.get("/api/notices");
      setData(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // INPUT HANDLER
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // IMAGE
  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  // FILES
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

  // RESET FORM
  const resetForm = () => {
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
    setEditIndex(null);
  };

  // SUBMIT (CREATE + UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // only send image if selected
      if (form.image) {
        formData.append("image", form.image);
      }

      formData.append("date", form.date);
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("author", form.author);
      formData.append("designation", form.designation);
      formData.append("links", JSON.stringify(form.links));

      form.files.forEach((file) => {
        formData.append("files", file);
      });

      if (editIndex !== null) {
        const id = data[editIndex]._id;
        await API.put(`/api/notices/${id}`, formData);
        alert("Notice Updated ✅");
      } else {
        await API.post("/api/notices", formData);
        alert("Notice Created ✅");
      }

      loadNotices();
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Error saving notice");
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await API.delete(`/api/notices/${id}`);
      loadNotices();
    } catch (err) {
      console.error(err);
    }
  };

  // EDIT
  const handleEdit = (index) => {
    const item = data[index];

    setForm({
      image: null,
      date: item.date || "",
      title: item.title || "",
      description: item.description || "",
      author: item.author || "",
      designation: item.designation || "",
      links: item.links?.length ? item.links : [""],
      files: [],
    });

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
            <input
              type="file"
              onChange={handleImage}
              key={form.image ? "hasImage" : "noImage"}
            />

            {/* ✅ PREVIEW IMAGE WHEN EDIT */}
            {editIndex !== null && data[editIndex]?.image && (
              <img
                src={`http://localhost:5000${data[editIndex].image}`}
                alt="preview"
                className="np-thumb"
                style={{ marginTop: "10px" }}
              />
            )}
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
            apiKey="your-api-key"
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

        {/* SUBMIT */}
        <button className="np-submitBtn">
          {editIndex !== null ? "Update Notice" : "Submit Notice"}
        </button>

        {/* ✅ CANCEL EDIT */}
        {editIndex !== null && (
          <button
            type="button"
            className="np-submitBtn"
            onClick={resetForm}
            style={{ marginLeft: "10px", background: "#aaa" }}
          >
            Cancel Edit
          </button>
        )}
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
            {data.length === 0 ? (
              <tr>
                <td colSpan="9" style={{ textAlign: "center", padding: "20px" }}>
                  No notices available
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item._id || index}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={
                        item.image
                          ? `http://localhost:5000${item.image}`
                          : "/no-image.png"
                      }
                      alt="notice"
                      className="np-thumb"
                    />
                  </td>

                  <td>{item.date || "-"}</td>
                  <td>{item.title || "Untitled"}</td>
                  <td>{item.author || "-"}</td>
                  <td>{item.designation || "-"}</td>

                  <td>{item.links?.length || 0}</td>
                  <td>{item.files?.length || 0}</td>

                  <td className="np-actions">
                    <button
                      onClick={() => handleEdit(index)}
                      className="np-edit"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="np-delete"
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

export default NoticePost;