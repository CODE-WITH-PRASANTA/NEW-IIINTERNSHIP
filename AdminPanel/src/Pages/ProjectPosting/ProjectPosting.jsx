import React, { useEffect, useState } from "react";
import "./ProjectPosting.css";
import API ,{ImageUrl} from "../../api/axios";

const ProjectPosting = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
    preview: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/api/projects");
      
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Image
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

  // Save Project
 const handleSave = async () => {
  const formData = new FormData();

  formData.append("title", form.title);
  formData.append("description", form.description);

  if (form.image instanceof File) {
    formData.append("image", form.image);
  }

  try {
    await API.post("/api/projects", formData);

    fetchProjects();
    setForm({ title: "", description: "", image: null, preview: "" });
  } catch (err) {
    console.log(err);
  }
};

  // Edit
  const handleEdit = (index) => {
    const item = projects[index];

    setForm({
      title: item.title,
      description: item.description,
      image: null,
      preview: item.image, // backend image
    });

    setEditIndex(item._id);
  };

  // Delete
  const handleDelete = async (index) => {
    const id = projects[index]._id;

    try {
      await API.delete(`/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  // Toggle Visibility
  const handleToggle = async (index) => {
    const id = projects[index]._id;

    try {
      await API.patch(`/api/projects/${id}/toggle`);
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="projectPosting">
      {/* TOP SECTION */}
      <div className="projectPosting__top">
        {/* LEFT FORM */}
        <div className="projectPosting__form">
          <h2>Project Form</h2>

          <label className="uploadBox">
            <input type="file" onChange={handleImage} hidden />
            {form.preview ? (
              <img src={form.preview} alt="preview" />
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
            {editIndex !== null ? "Update Project" : "Save Project"}
          </button>
        </div>

        {/* RIGHT LIVE PREVIEW */}
        <div className="projectPosting__preview">
          <h2>Live Preview</h2>

          <div className="previewCard">
            {form.preview && <img src={form.preview} alt="" />}
            <h3>{form.title || "Project Title"}</h3>
            <p>{form.description || "Project Description"}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM LIST */}
      <div className="projectPosting__list">
        <h2>Projects List</h2>

        <div className="cardGrid">
          {projects.map((item, index) =>
            item.visible ? (
              <div className="projectCard" key={index}>
                {item.image && <img src={ImageUrl(item.image)} alt="" />}
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="cardActions">
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleToggle(index)}>Hide</button>
                </div>
              </div>
            ) : (
              <div className="projectCard hiddenCard" key={index}>
                <p>Hidden Project</p>
                <button onClick={() => handleToggle(index)}>Show</button>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPosting;
