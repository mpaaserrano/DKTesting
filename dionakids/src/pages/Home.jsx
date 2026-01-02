import React from "react";

// Layout
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Grid from "../components/layout/Grid";
import PlayerPanel from "../components/layout/PlayerPanel";

// Sections
import Section from "../components/sections/Section";
import HeroSection from "../components/sections/HeroSection";
import DiogoSection from "../components/sections/DiogoSection";

// Cards
import CourseCard from "../components/cards/CourseCard";
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
        <Grid columns={3} gap={32}>
          <CourseCard
            image="/assets/cards/courses/DionaKidz.png"
            age="7 A 11 ANOS"
            title="DionaKidz"
            subject="Minecraft & Python Introdutório"
            description="Minecraft é o puxador emocional: o aluno sente que está hackeando o mundo favorito dele. Python leve nessa idade é excelente."
            price="220"
            color="#F7941D"
            borderColor="#C26A10"
          />

          <CourseCard
            image="/assets/cards/courses/DionaTeenz.png"
            age="11 A 14 ANOS"
            title="DionaTeenz"
            subject="Roblox Studio & Desenvolvimento Web"
            description="Roblox dá criatividade imediata e lógica de programação; Web Dev dá noção real de criação."
            price="250"
            color="#4AA3F8"
            borderColor="#1E2939"
          />

          <CourseCard
            image="/assets/cards/courses/DionaBotz.png"
            age="9 A 14 ANOS"
            title="DionaBotz - Robótica"
            subject="Arduino, Raspberry Pi & Linux"
            description="Arduino é o ponto de partida para a robótica; Raspberry Pi abre portas para projetos mais complexos."
            price="300"
            color="#F05A4A"
            borderColor="#A02619"
          />
        </Grid>
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
        <h1>Blue Section</h1>
      </Section>

      {/* EVENTS */}
      <Section
        id="eventos"
        bgMain={backgroundRedMain}
        bgBottom={backgroundRedBottom}
        overlap={100}
        zIndex={1}
      >
        <h1>Red Section</h1>
      </Section>

      {/* CONTACT */}
      <Section id="contactos" zIndex={1}>
        <h1>White Section</h1>
      </Section>

      <Footer bgTop={footerTop} bgMain={footerMain} zIndex={1}>
        <p>© 2025 — Todos os direitos reservados</p>
      </Footer>
    </>
  );
}
