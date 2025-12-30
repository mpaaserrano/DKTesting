import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

// Background image paths
const backgroundOrangeMain   = "/backgrounds/orange_main.svg";
const backgroundOrangeBottom = "/backgrounds/orange_bottom.svg";

const backgroundBeigeTop     = "/backgrounds/beige_top.svg";
const backgroundBeigeMain    = "/backgrounds/beige_main.svg";
const backgroundBeigeBottom  = "/backgrounds/beige_bottom.svg";

const backgroundBlueMain     = "/backgrounds/blue_main.svg";
const backgroundBlueBottom   = "/backgrounds/blue_bottom.svg";

const backgroundRedMain      = "/backgrounds/red_main.svg";
const backgroundRedBottom    = "/backgrounds/red_bottom.svg";

const footerTop = "/footer/footer_top.svg";
const footerMain = "/footer/footer_main.svg"


//Section Data
const sectionsData = [
  { id: "hero", label: "Dionakids"},
  { id: "cursos", label: "Cursos" },
  { id: "diogo", label: "Quem é o Diogo"},
  { id: "metodologia", label: "Metodologia"},
  { id: "eventos", label: "Eventos"},
  { id: "contactos", label: "Contacto" },
];

function App() {
  return (
    <div>
      <Header sections={sectionsData} /> {/* Dynamic Header */}

      {/* Orange Section */}
      <Section
        id="hero"
        bgMain={backgroundOrangeMain}
        bgBottom={backgroundOrangeBottom}
        overlap={0}
        zIndex={1}
      >
        <h1>Orange Section</h1>
      </Section>

      {/* White Section */}
      <Section
        id="cursos"
        zIndex={1}
      >
        <h1>White Section</h1>
      </Section>

      {/* Beige Section */}
      <Section
        id="diogo"
        bgTop={backgroundBeigeTop}
        bgMain={backgroundBeigeMain}
        bgBottom={backgroundBeigeBottom}
        overlap={0}
        zIndex={3}
      >
        <h1>Beige Section</h1>
      </Section>

      {/* Blue Section */}
      <Section
        id="metodologia"
        bgMain={backgroundBlueMain}
        bgBottom={backgroundBlueBottom}
        overlap={100}
        zIndex={2}
      >
        <h1>Blue Section</h1>
      </Section>

      {/* Red Section */}
      <Section
        id="eventos"
        bgMain={backgroundRedMain}
        bgBottom={backgroundRedBottom}
        overlap={100}
        zIndex={1}
      >
        <h1>Red Section</h1>
      </Section>

      
      {/* White Section */}
      <Section 
        id="contactos"
        zIndex={1}
      >
        <h1>White Section</h1>
      </Section>

      <Footer
        bgTop={footerTop}
        bgMain={footerMain}
        overlap={0}
        zIndex={1}
      >
      <p>© 2025 — Todos os direitos reservados</p>
      </Footer>
    </div>
  );
}

export default App;
