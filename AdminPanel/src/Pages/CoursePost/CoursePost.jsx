import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Accordion from "../../Components/Accordion/Accordion";
import "./CoursePost.css";
import { Editor } from "@tinymce/tinymce-react";
import API, { ImageUrl } from "../../api/axios";

// ✅ FIELD (OUTSIDE)
const Field = React.memo(({ label, name, type = "text", value, onChange }) => (
  <div className="form-group">
    <input
      type={type}
      name={name}
      value={value ?? ""}
      onChange={onChange}
      placeholder=" "
    />
    <label>{label}</label>
  </div>
));

// ✅ TEXTAREA (OUTSIDE)
const Area = React.memo(({ label, name, value, onChange }) => (
  <div className="form-group">
    <textarea
      name={name}
      value={value ?? ""}
      onChange={onChange}
      placeholder=" "
    />
    <label>{label}</label>
  </div>
));

// ✅ SELECT (OUTSIDE)
const Select = React.memo(({ label, name, value, onChange, options }) => (
  <div className="form-group">
    <select name={name} value={value ?? ""} onChange={onChange}>
      <option value=""></option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <label>{label}</label>
  </div>
));

const CoursePost = () => {
  const [active, setActive] = useState(0);

  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const generateID = () => "ADV-" + Math.floor(100000 + Math.random() * 900000);

  const [form, setForm] = useState({
    adId: generateID(),

    title: "",
    description: "",
    banner: null,

    department: "",
    modules: "",
    project: "",
    tools: "",
    internshipMode: "", // ✅ NEW DROPDOWN FIELD

    internshipType: "",
    credits: "",
    location: "",
    duration: "",

    qualification: "",
    skills: "",

    paymentType: "",
    timePeriod: "",

    facilities: "",
    career: "",

    startDate: "",
    fee: "",
    lastDate: "",

    mentor: "",
    contact: "",
    organizer: "",

    rating: "",
    pricing: "",
    content: "",
    lectures: "",
    quiz: "",
    courseDuration: "",

    skillLevel: "",
    language: "",
    students: "",
    assessments: "",

    instructor: "",
    ownerName: "",
    designation: "",
    ownerLocation: "",
    profile: null,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      const fetchCourse = async () => {
        try {
          const res = await API.get(`/api/courses/${id}`);
          const data = res.data.data || res.data;

          setForm({
            ...data,
            banner: data.banner ? { url: data.banner } : null,

            profile: data.profile
              ? { url: data.profile } // 🔥 ADD THIS
              : null,
          });
        } catch (err) {
          console.error(err);
        }
      };

      fetchCourse();
    }
  }, [id]);

  // ✅ FIXED HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm((prev) => ({
        ...prev,
        banner: {
          file,
          preview: URL.createObjectURL(file), // 🔥 instant preview
        },
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm((prev) => ({
        ...prev,
        profile: {
          file,
          preview: URL.createObjectURL(file),
        },
      }));
    }
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      for (let key in form) {
        if (key !== "banner" && key !== "profile") {
          formData.append(key, form[key]);
        }
      }

      if (form.banner?.file) {
        formData.append("banner", form.banner.file);
      }
      if (form.profile?.file) {
        formData.append("profile", form.profile.file);
      }

      if (isEdit) {
        await API.put(`/api/courses/${id}`, formData);
        alert("Updated Successfully ✅");
      } else {
        await API.post("/api/courses", formData);
        alert("Saved Successfully ✅");
      }

      navigate("/course/manage");
    } catch (err) {
      console.error(err);
      alert("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>{isEdit ? "Edit Course" : "Post Internship / Course"}</h2>

      <div className="ad-id">
        Advertisement ID: <strong>{form.adId}</strong>
      </div>

      {/* 1️⃣ BASIC */}
      <Accordion
        title="Basic Details"
        open={active === 0}
        onClick={() => toggle(0)}
      >
        <div className="form-group file-upload">
          <input type="file" accept="image/*" onChange={handleBannerChange} />
          <label>Choose Banner</label>

          {form.banner && (
            <div className="image-preview">
              <img
                src={
                  form.banner?.preview
                    ? form.banner.preview
                    : form.banner?.url
                      ? ImageUrl(form.banner.url) + "?t=" + new Date().getTime()
                      : "/no-image.png"
                }
              />
            </div>
          )}
        </div>

        <Field
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <Area
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <Field
          label="Department"
          name="department"
          value={form.department}
          onChange={handleChange}
        />
      </Accordion>

      {/* 2️⃣ CONTENT */}
      <Accordion
        title="Internship Content"
        open={active === 1}
        onClick={() => toggle(1)}
      >
        <Area
          label="Modules"
          name="modules"
          value={form.modules}
          onChange={handleChange}
        />
        <Area
          label="Project"
          name="project"
          value={form.project}
          onChange={handleChange}
        />
        <Field
          label="Tools"
          name="tools"
          value={form.tools}
          onChange={handleChange}
        />

      <Select
        label="Internship Mode"
        name="internshipMode"
        value={form.internshipMode}
        onChange={handleChange}
        options={["Running Internship", "On-Campus Internship"]}
      />
      </Accordion>

      {/* 3️⃣ REQUIREMENTS */}
      <Accordion
        title="Requirements & Type"
        open={active === 2}
        onClick={() => toggle(2)}
      >
        <Field
          label="Qualification"
          name="qualification"
          value={form.qualification}
          onChange={handleChange}
        />
        <Field
          label="Skills"
          name="skills"
          value={form.skills}
          onChange={handleChange}
        />

        <Select
          label="Internship Type"
          name="internshipType"
          value={form.internshipType}
          onChange={handleChange}
          options={["Full Time", "Part Time", "Virtual"]}
        />

        <Select
          label="Payment Type"
          name="paymentType"
          value={form.paymentType}
          onChange={handleChange}
          options={["Paid", "Free", "Stipend"]}
        />

        <Select
          label="Time Period"
          name="timePeriod"
          value={form.timePeriod}
          onChange={handleChange}
          options={["Non-Residential", "Residential"]}
        />

        <Field
          label="Credits"
          name="credits"
          value={form.credits}
          onChange={handleChange}
        />
        <Field
          label="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
        />
        <Field
          label="Duration"
          name="duration"
          value={form.duration}
          onChange={handleChange}
        />
      </Accordion>

      {/* 4️⃣ FACILITIES */}
      <Accordion
        title="Facilities, Dates & Contact"
        open={active === 3}
        onClick={() => toggle(3)}
      >
        <Area
          label="Facilities"
          name="facilities"
          value={form.facilities}
          onChange={handleChange}
        />
        <Area
          label="Career Opportunity"
          name="career"
          value={form.career}
          onChange={handleChange}
        />

        <Field
          type="date"
          label="Start Date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
        />
        <Field
          type="date"
          label="Last Date"
          name="lastDate"
          value={form.lastDate}
          onChange={handleChange}
        />
        <Field
          type="number"
          label="Fee"
          name="fee"
          value={form.fee}
          onChange={handleChange}
        />

        <Field
          label="Mentor"
          name="mentor"
          value={form.mentor}
          onChange={handleChange}
        />
        <Field
          label="Contact"
          name="contact"
          value={form.contact}
          onChange={handleChange}
        />
        <Field
          label="Organizer"
          name="organizer"
          value={form.organizer}
          onChange={handleChange}
        />
      </Accordion>

      {/* 5️⃣ COURSE DETAILS */}
      <Accordion
        title="Course Details & Instructor"
        open={active === 4}
        onClick={() => toggle(4)}
      >
        <Field
          label="Rating"
          name="rating"
          value={form.rating}
          onChange={handleChange}
        />
        <Field
          label="Pricing"
          name="pricing"
          value={form.pricing}
          onChange={handleChange}
        />

        <div className="form-group">
          <label className="editor-label">Course Content</label>

          <Editor
            apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
            value={form.content}
            init={{
              height: 400,
              menubar: true,

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
                "emoticons",
                "directionality",
              ],

              toolbar:
                "undo redo | blocks | bold italic underline | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | link image media | " +
                "table | emoticons | fullscreen preview code",

              toolbar_mode: "sliding",
            }}
            onEditorChange={(content) =>
              setForm((prev) => ({ ...prev, content }))
            }
          />
        </div>

        <Field
          label="Lectures"
          name="lectures"
          value={form.lectures}
          onChange={handleChange}
        />
        <Field
          label="Quiz"
          name="quiz"
          value={form.quiz}
          onChange={handleChange}
        />

        <Select
          label="Skill Level"
          name="skillLevel"
          value={form.skillLevel}
          onChange={handleChange}
          options={["Beginner", "Intermediate", "Advanced"]}
        />

        <Field
          label="Language"
          name="language"
          value={form.language}
          onChange={handleChange}
        />
        <Field
          label="Students"
          name="students"
          value={form.students}
          onChange={handleChange}
        />

        <Select
          label="Assessments"
          name="assessments"
          value={form.assessments}
          onChange={handleChange}
          options={["Yes", "No"]}
        />

        <Field
          label="Instructor"
          name="instructor"
          value={form.instructor}
          onChange={handleChange}
        />
        <Field
          label="Owner Name"
          name="ownerName"
          value={form.ownerName}
          onChange={handleChange}
        />
        <Field
          label="Designation"
          name="designation"
          value={form.designation}
          onChange={handleChange}
        />
        <Field
          label="Location"
          name="ownerLocation"
          value={form.ownerLocation}
          onChange={handleChange}
        />

        <div className="form-group">
          <input type="file" onChange={handleFileChange} />
          <label>Upload Profile</label>
        </div>
        {form.profile && (
          <div className="image-preview">
            <img
              src={
                form.profile?.preview
                  ? form.profile.preview
                  : form.profile?.url
                    ? ImageUrl(form.profile.url) + "?t=" + new Date().getTime()
                    : "/no-image.png"
              }
              alt="Profile"
            />
          </div>
        )}
      </Accordion>

      <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
        {loading ? "Processing..." : isEdit ? "UPDATE COURSE " : "ADD COURSE "}
      </button>
    </div>
  );
};

export default CoursePost;
