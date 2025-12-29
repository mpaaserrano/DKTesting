import React from "react";
import "./Section.css";

function Section({
  children,
  bgTop,
  bgMain,
  bgBottom,
  overlap = 0,
  zIndex = 1
}) {
  return (
    <div
      className="section"
      style={{
        marginTop: `-${overlap}px`,
        zIndex: zIndex,
      }}
    >
      {/* Top fixed background (optional) */}
      {bgTop && (
        <div
          className="section-bg-top"
          style={{ backgroundImage: `url(${bgTop})` }}
        />
      )}

      {/* Stretchable main background */}
      {bgMain && (
        <div
          className="section-bg-main"
          style={{ backgroundImage: `url(${bgMain})` }}
        >
          <div className="section-content">{children}</div>
        </div>
      )}

      {/* Bottom fixed background (optional) */}
      {bgBottom && (
        <div
          className="section-bg-bottom"
          style={{ backgroundImage: `url(${bgBottom})` }}
        />
      )}
    </div>
  );
}

export default Section;
