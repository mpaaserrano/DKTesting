import React from "react";

// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Grid from "../components/layout/Grid";
import PlayerPanel from "../components/layout/PlayerPanel";

// Sections
import Section from "../components/sections/Section";
import HeroSection from "../components/sections/HeroSection";
import CourseSection from "../components/sections/CourseSection";
import DiogoSection from "../components/sections/DiogoSection";
import MethodologySection from "../components/sections/MethodologySection";
import EventSection from "../components/sections/EventSection";
import ContactsSection from "../components/sections/ContactsSection";


// Cards
import CharacterCard from "../components/cards/CharacterCard";

// Background image paths
const backgroundOrangeMain = "/backgrounds/orange_main.svg";
const backgroundOrangeBottom = "/backgrounds/orange_bottom.svg";

const backgroundBeigeTop = "/backgrounds/beige_top.svg";
const backgroundBeigeMain = "/backgrounds/beige_main.svg";
const backgroundBeigeBottom = "/backgrounds/beige_bottom.svg";

const backgroundBlueMain = "/backgrounds/blue_main.svg";
const backgroundBlueBottom = "/backgrounds/blue_bottom.svg";

const backgroundRedMain = "/backgrounds/red_main.svg";
const backgroundRedBottom = "/backgrounds/red_bottom.svg";

const footerTop = "/footer/footer_top.svg";
const footerMain = "/footer/footer_main.svg";

// Section Data
const sectionsData = [
  { id: "hero", label: "Dionakids" },
  { id: "cursos", label: "Cursos" },
  { id: "diogo", label: "Quem é o Diogo" },
  { id: "metodologia", label: "Metodologia" },
  { id: "eventos", label: "Eventos" },
  { id: "contactos", label: "Contactos" },
];

export default function Home() {
  return (
    <>
      <Header sections={sectionsData} />

      {/* HERO */}
      <Section
        id="hero"
        bgMain={backgroundOrangeMain}
        bgBottom={backgroundOrangeBottom}
        overlap={0}
        zIndex={1}
      >
        <HeroSection />
      </Section>

      {/* COURSES */}
      <Section id="cursos" zIndex={1}>
        <CourseSection />
      </Section>

      {/* ABOUT */}
      <Section
        id="diogo"
        bgTop={backgroundBeigeTop}
        bgMain={backgroundBeigeMain}
        bgBottom={backgroundBeigeBottom}
        zIndex={3}
      >
        <DiogoSection
          left={<CharacterCard />}
          right={<PlayerPanel />}
        />
      </Section>

      {/* METHODOLOGY */}
      <Section
        id="metodologia"
        bgMain={backgroundBlueMain}
        bgBottom={backgroundBlueBottom}
        overlap={100}
        zIndex={2}
      >
        <MethodologySection />
      </Section>

      {/* EVENTS */}
      <Section
        id="eventos"
        bgMain={backgroundRedMain}
        bgBottom={backgroundRedBottom}
        overlap={100}
        zIndex={1}
      >
        <EventSection />
      </Section>

      {/* CONTACT */}
      <Section id="contactos" zIndex={1}>
        <ContactsSection />
      </Section>

      <Footer bgTop={footerTop} bgMain={footerMain} zIndex={1}>
        <p>© 2025 — Todos os direitos reservados</p>
      </Footer>
    </>
  );
}
