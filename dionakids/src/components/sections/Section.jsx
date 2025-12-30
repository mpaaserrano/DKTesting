import React from "react";
import "./Section.css";

function Section({
  id,
  children,
  bgTop,
  bgMain,
  bgBottom,
  overlap = 0,
  zIndex = 1,
}) {
  return (
    <div
      id={id}
      className="section"
      style={{
        marginTop: `-${overlap}px`,
        zIndex,
      }}
    >
      {bgTop && (
        <div
          className="section-bg-top"
          style={{ backgroundImage: `url(${bgTop})` }}
        />
      )}

      {/* MAIN */}
      <div
        className="section-bg-main"
        style={bgMain ? { backgroundImage: `url(${bgMain})` } : {}}
      >
        <div className="container section-content">
          {children} {/* 🔑 AGORA SEMPRE RENDERIZA */}
        </div>
      </div>

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
