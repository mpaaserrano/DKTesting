import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        {/* ===== DESKTOP NAVBAR ===== */}
        <nav className="navbar desktop">
          <div
            className="logo-container"
            onClick={() => sections[0] && scrollToSection(sections[0].id)}
          >
            <img src="/logo/logo.svg" alt="DionaKids Logo" />
          </div>

          <div className="nav-links">
            {sections.slice(1).map((section) => (
              <button
                key={section.id}
                className="nav-button"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="cta-button"
            onClick={() => scrollToSection("contacto")}
          >
            AGENDAR AULA
          </button>
        </nav>

        {/* ===== BURGER BUTTON (MOBILE) ===== */}
        <button
          className="burger"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* ===== MOBILE MENU ===== */}
        {menuOpen && (
          <nav className="navbar mobile">
            <div className="menu-header">
              <div
                className="logo-container"
                onClick={() => sections[0] && scrollToSection(sections[0].id)}
              >
                <img src="/logo/logo.svg" alt="DionaKids Logo" />
              </div>

              <button
                className="close"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                ✕
              </button>
            </div>

            <div className="nav-links">
              {sections.slice(1).map((section) => (
                <button
                  key={section.id}
                  className="nav-button"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label.toUpperCase()}
                </button>
              ))}

              <button
                className="nav-button nav-cta"
                onClick={() => scrollToSection("contacto")}
              >
                AGENDAR AULA
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
