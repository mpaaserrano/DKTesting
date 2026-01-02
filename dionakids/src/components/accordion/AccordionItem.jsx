import { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item-wrapper">
      <div className={`accordion-item ${open ? "open" : ""}`}>
        <button
          className="accordion-header"
          onClick={() => setOpen(!open)}
        >
          <span>{title}</span>
          <span className="accordion-icon">{open ? "▲" : "▼"}</span>
        </button>

        <div className="accordion-content">
          <div className="accordion-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
