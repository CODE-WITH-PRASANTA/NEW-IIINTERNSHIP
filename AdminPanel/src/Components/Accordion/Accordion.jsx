import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "./Accordion.css";

const Accordion = React.memo(({ title, children, open, onClick }) => {
  return (
    <div className={`accordion ${open ? "active" : ""}`}>
      
      <button
        type="button"
        className="accordion-header"
        onClick={(e) => {
          e.stopPropagation();   // 🔥 prevent unwanted bubbling
          onClick();
        }}
        aria-expanded={open}
      >
        <h3>{title}</h3>
        <FiChevronDown className={`icon ${open ? "rotate" : ""}`} />
      </button>

      <div className={`accordion-content ${open ? "show" : ""}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
});

export default Accordion;