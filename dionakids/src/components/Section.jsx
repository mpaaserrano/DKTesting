import "./Section.css";

function Section({ backgrounds, children }) {
  // Join multiple backgrounds for CSS
  const bgStyle = {
    backgroundImage: backgrounds
      ? backgrounds.map(bg => `url(${bg})`).join(", ")
      : "none",
  };

  return (
    <section className="section" style={bgStyle}>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}

export default Section;
