import React from "react";
import "./Grid.css";

function Grid({
  children,
  gap = 24,   // space between items (px)
  min = 280,  // minimum column width (px)
  className = "",
}) {
  const style = {
    gap: `${gap}px`,
    gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
  };

  return (
    <div className={`grid ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Grid;
