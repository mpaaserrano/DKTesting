import React from "react";
import "./Header.css";

const Header = ({ sections }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      {/* Logo as SVG */}
      <div
        className="logo-container"
        onClick={() => sections[0] && scrollToSection(sections[0].id)}
        style={{ cursor: "pointer" }}
      >
        <img src="/logo/logo.svg" alt="DionaKids Logo" className="logo-image" />
      </div>

      {/* Navigation */}
      <nav>
        {sections.slice(1).map((section) => (
          <button
            className="nav-button"
            key={section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* CTA Button */}
      <button className="schedule-button">AGENDAR AULA</button>
    </header>
  );
};

export default Header;
