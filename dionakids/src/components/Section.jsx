import React from "react";
import "./Section.css";

function Section({ children, background }) {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="section-content">{children}</div>
    </div>
  );
}

export default Section;
