import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./VirtualInternship.css";

const VirtualInternship = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  const [youtubeLinks, setYoutubeLinks] = useState([""]);

  const addLink = () => {
    setYoutubeLinks([...youtubeLinks, ""]);
  };

  const handleLinkChange = (value, index) => {
    const updated = [...youtubeLinks];
    updated[index] = value;
    setYoutubeLinks(updated);
  };

  const instructors = [
  "John Doe",
  "Sarah Smith",
  "Alex Johnson",
  "Emma Watson"
];

const [selectedInstructors, setSelectedInstructors] = useState([]);

const handleCheckboxChange = (name) => {
  if (selectedInstructors.includes(name)) {
    setSelectedInstructors(selectedInstructors.filter(i => i !== name));
  } else {
    setSelectedInstructors([...selectedInstructors, name]);
  }
};

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

            <input className="vi__input" type="text" placeholder="Title" />
            <textarea className="vi__textarea" placeholder="Description"></textarea>
            <input className="vi__input" type="text" placeholder="Rating (4.8 / 3.5)" />

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

            <input className="vi__input" type="text" placeholder="Owner Name" />
            <input className="vi__input" type="text" placeholder="Designation" />
            <input className="vi__input" type="text" placeholder="Rating" />
            <input className="vi__input" type="number" placeholder="Learners" />

<div className="vi__field vi__full">
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
      <span key={i} className="vi__tag">{name}</span>
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

            <input className="vi__input" type="text" placeholder="Time Duration" />
            <input className="vi__input" type="text" placeholder="Department" />
            <input className="vi__input" type="text" placeholder="Modules" />
            <input className="vi__input" type="text" placeholder="Projects" />
            <input className="vi__input" type="text" placeholder="Tools" />

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
        className="vi__input" 
        type="number" 
        placeholder="Lectures" 
      />

      {/* QUIZ */}
      <input 
        className="vi__input" 
        type="number" 
        placeholder="Quiz" 
      />

      {/* SKILL LEVEL */}
      <div className="vi__field">
        <label className="vi__label">Skill Level</label>
        <select className="vi__select">
          <option>Choose Skill</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      {/* LANGUAGE */}
      <input 
        className="vi__input" 
        type="text" 
        placeholder="Language" 
      />

      {/* STUDENTS (instead of pricing) */}
      <input 
        className="vi__input" 
        type="number" 
        placeholder="Students" 
      />

      {/* ASSESSMENT */}
      <div className="vi__field">
        <label className="vi__label">Assessment</label>
        <select className="vi__select">
          <option>Select</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {/* DESCRIPTION (TINYMCE) */}
      <div className="vi__full">
        <label className="vi__label">Course Description</label>

        <div className="vi__editorWrapper">
          <Editor
            apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
            init={{
              height: 320,
              menubar: true,
              branding: true,
              plugins: [
                "advlist", "autolink", "lists", "link", "image",
                "charmap", "preview", "anchor", "searchreplace",
                "visualblocks", "code", "fullscreen",
                "insertdatetime", "media", "table", "help", "wordcount"
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

      <button className="vi__submitBtn">SUBMIT</button>
    </div>
  );
};

export default VirtualInternship;