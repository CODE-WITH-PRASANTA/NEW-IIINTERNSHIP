import React, { useEffect, useState } from "react";
import "./ProjectPosting.css";
import API, { ImageUrl } from "../../api/axios";

const ProjectPosting = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
    preview: "",
  });

  const [editId, setEditId] = useState(null);

  // ================= FETCH =================
  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ================= INPUT =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= IMAGE =================
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm({
        ...form,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  // ================= SAVE / UPDATE =================
  const handleSave = async () => {
    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("description", form.description);

    if (form.image instanceof File) {
      formData.append("image", form.image);
    }

    try {
      if (editId) {
        // ✅ UPDATE
        await API.put(`/projects/${editId}`, formData);
      } else {
        // ✅ CREATE
        await API.post("/projects", formData);
      }

      fetchProjects();
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  // ================= RESET =================
  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      image: null,
      preview: "",
    });
    setEditId(null);
  };

  // ================= EDIT =================
  const handleEdit = (index) => {
    const item = projects[index];

    setForm({
      title: item.title,
      description: item.description,
      image: null,
      preview: item.image ? ImageUrl(item.image) : "",
    });

    setEditId(item._id);
  };

  // ================= DELETE =================
  const handleDelete = async (index) => {
    const id = projects[index]._id;

    try {
      await API.delete(`/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  // ================= TOGGLE =================
  const handleToggle = async (index) => {
    const id = projects[index]._id;

    try {
      await API.patch(`/projects/${id}/toggle`);
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="projectPosting">
      {/* ================= TOP ================= */}
      <div className="projectPosting__top">

        {/* ===== FORM ===== */}
        <div className="projectPosting__form">
          <h2>{editId ? "Update Project" : "Add Project"}</h2>

          <label className="uploadBox">
            <input type="file" onChange={handleImage} hidden />
            {form.preview ? (
              <img src={ImageUrl(form.preview)} alt="preview" />
            ) : (
              <span>Upload Image</span>
            )}
          </label>

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={form.description}
            onChange={handleChange}
          />

          <button onClick={handleSave}>
            {editId ? "Update Project" : "Save Project"}
          </button>

          {editId && (
            <button className="cancelBtn" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>

        {/* ===== LIVE PREVIEW ===== */}
        <div className="projectPosting__preview">
          <h2>Live Preview</h2>

          <div className="previewCard">
            {form.preview && (
              <img src={ImageUrl(form.preview)} alt="preview" />
            )}
            <h3>{form.title || "Project Title"}</h3>
            <p>{form.description || "Project Description"}</p>
          </div>
        </div>
      </div>

      {/* ================= LIST ================= */}
      <div className="projectPosting__list">
        <h2>Projects List</h2>

        <div className="cardGrid">
          {projects.map((item, index) =>
            item.visible ? (
              <div className="projectCard" key={item._id}>
                {item.image && (
                  <img src={ImageUrl(item.image)} alt="project" />
                )}

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="cardActions">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleToggle(index)}>Hide</button>
                </div>
              </div>
            ) : (
              <div className="projectCard hiddenCard" key={item._id}>
                <p>Hidden Project</p>
                <button onClick={() => handleToggle(index)}>Show</button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPosting;