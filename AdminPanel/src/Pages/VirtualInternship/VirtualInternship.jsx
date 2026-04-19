import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./VirtualInternship.css";
import { useParams } from "react-router-dom";
import API, { ImageUrl } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const VirtualInternship = () => {
  // ================== STATE ==================
  const [form, setForm] = useState({
    title: "",
    description: "",
    rating: "",
    ownerName: "",
    designation: "",
    learners: "",
    duration: "",
    department: "",
    modules: "",
    projects: "",
    tools: "",
    lectures: "",
    quiz: "",
    skillLevel: "",
    language: "",
    students: "",
    assessment: "",
    thumbnail: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const editCourse = location.state || null;
  const [preview, setPreview] = useState("");
  const [oldThumbnail, setOldThumbnail] = useState("");

  const [categories, setCategories] = useState([]); // ✅ FIXED
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  const [editorContent, setEditorContent] = useState("");
  const [open, setOpen] = useState(null);
  const [youtubeLinks, setYoutubeLinks] = useState([""]);

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      rating: "",
      ownerName: "",
      designation: "",
      learners: "",
      duration: "",
      department: "",
      modules: "",
      projects: "",
      tools: "",
      lectures: "",
      quiz: "",
      skillLevel: "",
      language: "",
      students: "",
      assessment: "",
      thumbnail: null,
    });

    setYoutubeLinks([""]);
    setSelectedInstructors([]);
    setEditorContent("");

    // ✅ ADD HERE (clean way)
    setCategory("");
    setOldThumbnail("");
    setPreview("");
  };

  // ================== TOGGLE ==================
  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  // ================== FETCH ==================
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/api/categories");
      setCategories(res.data.data);
    } catch (err) {
      console.error("Category Fetch Error:", err);
    }
  };

  const validId = id && id !== ":id" && id !== "undefined";
  const isEdit = !!(editCourse || validId);

  useEffect(() => {
    const loadData = async () => {
      try {
        let data = editCourse;

        // ✅ SAFE API CALL
        if (!data && validId) {
          const res = await API.get(`/api/virtual-internships/${id}`);
          data = res.data?.data;
        }

        // ✅ STOP if no data
        if (!data) {
          resetForm();
          return;
        }

        // ✅ SET FORM
        setForm({
          title: data.title || "",
          description: data.description || "",
          rating: data.rating || "",
          ownerName: data.ownerName || "",
          designation: data.designation || "",
          learners: data.learners || "",
          duration: data.duration || "",
          department: data.department || "",
          modules: data.modules || "",
          projects: data.projects || "",
          tools: data.tools || "",
          lectures: data.lectures || "",
          quiz: data.quiz || "",
          skillLevel: data.skillLevel || "",
          language: data.language || "",
          students: data.students || "",
          assessment: data.assessment || "",
          thumbnail: null,
        });

        // ✅ SAFE DEFAULTS
        setYoutubeLinks(
          Array.isArray(data.youtubeLinks) && data.youtubeLinks.length
            ? data.youtubeLinks
            : [""],
        );

        setSelectedInstructors(
          Array.isArray(data.instructors) ? data.instructors : [],
        );

        setEditorContent(data.courseDescription || "");

        setCategory(data.category?._id || data.category || "");

        setOldThumbnail(data.thumbnail || "");
      } catch (err) {
        console.error("Load Error:", err?.response?.data || err.message);
      }
    };

    if (isEdit) {
      loadData();
    }
  }, [isEdit]);

  useEffect(() => {
    if (!isEdit) {
      resetForm();
    }
  }, [isEdit]);

  // ================== AUTO SELECT ==================
  useEffect(() => {
    if (categories.length > 0 && !category && !isEdit) {
      setCategory(categories[0]._id);
    }
  }, [categories, isEdit]);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // ================== HANDLERS ==================
  const addLink = () => {
    setYoutubeLinks((prev) => [...prev, ""]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLinkChange = (value, index) => {
    const updated = [...youtubeLinks];
    updated[index] = value;
    setYoutubeLinks(updated);
  };

  // ================== INSTRUCTORS ==================
  const instructors = [
    "John Doe",
    "Sarah Smith",
    "Alex Johnson",
    "Emma Watson",
  ];

  const handleCheckboxChange = (name) => {
    setSelectedInstructors((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name],
    );
  };

  // ================== SUBMIT ==================
  const handleSubmit = async () => {
    if (!form.title || !form.description || !category) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        if (form[key] && key !== "thumbnail") {
          if (["learners", "students", "lectures", "quiz"].includes(key)) {
            formData.append(key, Number(form[key]));
          } else {
            formData.append(key, form[key].toString().trim());
          }
        }
      });

      formData.append("category", category);

      const filteredLinks = youtubeLinks.filter((l) => l.trim());
      if (filteredLinks.length > 0) {
        formData.append("youtubeLinks", JSON.stringify(filteredLinks));
      }

      formData.append("instructors", JSON.stringify(selectedInstructors));

      if (editorContent) {
        formData.append("courseDescription", editorContent);
      }

      if (form.thumbnail) {
        formData.append("thumbnail", form.thumbnail);
      }

      const courseId = editCourse?._id || (validId ? id : null);

      if (courseId && courseId !== ":id" && courseId !== "undefined") {
        await API.put(`/api/virtual-internships/${courseId}`, formData);
        alert("Updated Successfully ✅");

        resetForm();
        navigate("/course/virtual", { replace: true, state: null });
      } else {
        await API.post("/api/virtual-internships", formData);
        alert("Created Successfully ✅");

        resetForm();
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isEdit) {
      setOpen(0);
    }
  }, [isEdit]);

  return (
    <div className="vi">
      <h2 className="vi__title">Post Internship / Course</h2>

      <div className="vi__banner">
        Advertisement ID: <strong>ADV-541478</strong>
      </div>

      {/* ================== 1. BASIC DETAILS ================== */}
      <div className="vi__accordion">
        <div className="vi__accordionHeader" onClick={() => toggle(0)}>
          Basic Details
        </div>

        {open === 0 && (
          <div className="vi__accordionContent">
            <label className="vi__label">YouTube Links</label>

            {youtubeLinks.map((link, i) => (
              <div key={i} className="vi__multiInput">
                <input
                  className="vi__input"
                  type="text"
                  placeholder="Paste YouTube Link"
                  value={link}
                  onChange={(e) => handleLinkChange(e.target.value, i)}
                />
              </div>
            ))}

            <button className="vi__addBtn" onClick={addLink}>
              + Add Link
            </button>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="vi__input"
              placeholder="Title"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="vi__textarea"
              placeholder="Description"
            />
            <input
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="vi__input"
              type="text"
              placeholder="Rating (4.8 / 3.5)"
            />
          </div>
        )}
      </div>

      {/* ================== 2. INTERNSHIP CONTENT ================== */}
      <div className="vi__accordion">
        <div className="vi__accordionHeader" onClick={() => toggle(1)}>
          Internship Content
        </div>

        {open === 1 && (
          <div className="vi__accordionContent">
            <input
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              className="vi__input"
              placeholder="Owner Name"
            />
            <input
              name="designation"
              value={form.designation}
              onChange={handleChange}
              className="vi__input"
              type="text"
              placeholder="Designation"
            />

            <input
              name="learners"
              value={form.learners}
              onChange={handleChange}
              className="vi__input"
              type="number"
              placeholder="Learners"
            />

            <div className="vi__field vi__full">
              <div className="vi__field">
                <label className="vi__label">Category</label>

                <select
                  className="vi__select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select Category</option>

                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <label className="vi__label">Choose Instructor</label>

              <div className="vi__checkboxGroup">
                {instructors.map((name, index) => (
                  <label key={index} className="vi__checkboxItem">
                    <input
                      type="checkbox"
                      checked={selectedInstructors.includes(name)}
                      onChange={() => handleCheckboxChange(name)}
                    />
                    {name}
                  </label>
                ))}
              </div>

              {/* SELECTED TAGS */}
              <div className="vi__selectedList">
                {selectedInstructors.map((name, i) => (
                  <span key={i} className="vi__tag">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================== 3. REQUIREMENT ================== */}
      <div className="vi__accordion">
        <div className="vi__accordionHeader" onClick={() => toggle(2)}>
          Requirements & Type
        </div>

        {open === 2 && (
          <div className="vi__accordionContent">
            <input
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="vi__input"
              type="text"
              placeholder="Time Duration"
            />

            <input
              name="department"
              value={form.department}
              onChange={handleChange}
              className="vi__input"
              type="text"
              placeholder="Department"
            />

            <input
              name="modules"
              value={form.modules}
              onChange={handleChange}
              className="vi__input"
              type="text"
              placeholder="Modules"
            />

            <input
              name="projects"
              value={form.projects}
              onChange={handleChange}
              className="vi__input"
              type="text"
              placeholder="Projects"
            />

            <input
              name="tools"
              value={form.tools}
              onChange={handleChange}
              className="vi__input"
              type="text"
              placeholder="Tools"
            />
          </div>
        )}
      </div>

      {/* ================== 4. COURSE DETAILS ================== */}
      <div className="vi__accordion">
        <div className="vi__accordionHeader" onClick={() => toggle(3)}>
          Course Details
        </div>

        {open === 3 && (
          <div className="vi__accordionContent">
            {/* LECTURES */}
            <input
              name="lectures"
              value={form.lectures}
              onChange={handleChange}
              className="vi__input"
              type="number"
              placeholder="Lectures"
            />

            {/* QUIZ */}
            <input
              name="quiz"
              value={form.quiz}
              onChange={handleChange}
              className="vi__input"
              type="number"
              placeholder="Quiz"
            />

            {/* SKILL LEVEL */}
            <div className="vi__field">
              <label className="vi__label">Skill Level</label>

              <select
                name="skillLevel"
                value={form.skillLevel}
                onChange={handleChange}
                className="vi__select"
              >
                <option value="">Choose Skill</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* LANGUAGE */}
            {/* LANGUAGE */}
            <input
              name="language"
              value={form.language}
              onChange={handleChange}
              className="vi__input"
              type="text"
              placeholder="Language"
            />

            {/* STUDENTS */}
            <input
              name="students"
              value={form.students}
              onChange={handleChange}
              className="vi__input"
              type="number"
              placeholder="Students"
            />

            {/* ASSESSMENT */}
            <div className="vi__field">
              <label className="vi__label">Assessment</label>

              <select
                name="assessment"
                value={form.assessment}
                onChange={handleChange}
                className="vi__select"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];

                if (preview) {
                  URL.revokeObjectURL(preview); // cleanup old preview
                }

                setForm((prev) => ({
                  ...prev,
                  thumbnail: file,
                }));

                if (file) {
                  const url = URL.createObjectURL(file);
                  setPreview(url);
                }
              }}
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                style={{
                  width: "120px",
                  marginTop: "10px",
                  borderRadius: "8px",
                }}
              />
            )}
            {!preview && oldThumbnail && (
              <img
                src={ImageUrl(oldThumbnail)}
                alt="old"
                style={{
                  width: "120px",
                  marginTop: "10px",
                  borderRadius: "8px",
                }}
              />
            )}

            {/* DESCRIPTION (TINYMCE) */}
            <div className="vi__full">
              <label className="vi__label">Course Description</label>

              <div className="vi__editorWrapper">
                <Editor
                  value={editorContent}
                  onEditorChange={(content) => setEditorContent(content)}
                  apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
                  init={{
                    height: 320,
                    menubar: true,
                    branding: true,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic underline | \
                alignleft aligncenter alignright | bullist numlist | \
                link image media | code fullscreen",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        disabled={loading || !form.title || !form.description || !category}
        className="vi__submitBtn"
        onClick={handleSubmit}
      >
        {loading ? "Submitting..." : isEdit ? "UPDATE" : "SUBMIT"}
      </button>
    </div>
  );
};

export default VirtualInternship;
