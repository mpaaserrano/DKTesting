import React from "react";
import "./Grid.css";

function Grid({
  children,
  columns,        // number | undefined
  gap = 24,       // number (px)
  min = 280,      // min column width (px)
  className = "",
}) {
  const style = {
    gap: `${gap}px`,
    ...(columns
      ? { gridTemplateColumns: `repeat(${columns}, 1fr)` }
      : { gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))` }),
  };

  return (
    <div className={`grid ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Grid;
