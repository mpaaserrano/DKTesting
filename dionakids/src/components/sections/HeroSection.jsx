import React from 'react';
import './HeroSection.css';
import heroImage from '/assets/Hero.png';

const HeroSection = () => {
  return (
    <div className="hero-section bg-transparent">
      <div className="hero-content">
        <h1 className="hero-title">
          Dê aos seus filhos <br /> um futuro seguro.
        </h1>
        <p className="hero-subtitle">
          Ensinar programação a crianças abre portas para qualquer área em TI. 🚀
        </p>
        <button className="hero-button">
          AGENDE UMA AULA GRATUITA
        </button>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
