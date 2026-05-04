import { useState, useEffect } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import perfilImg from '../assets/perfil.png';
import './Hero.css';

export default function Hero() {
  const [charIndex, setCharIndex] = useState(0);
  const fullText = "Web developer";

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCharIndex(prev => {
          if (prev < fullText.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 50); // Speed of typing per letter
      return () => clearInterval(interval);
    }, 800); // Wait for the main h1 to fade in
    return () => clearTimeout(timeout);
  }, []);

  const renderTypedText = () => {
    return fullText.slice(0, charIndex);
  };

  return (
    <section className="section hero-section stars-bg" id="hero">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in delay-100">
            Lucas Ferreira
          </h1>
          <p className="hero-subtitle">
            {renderTypedText()}
            <span className="cursor-block"></span>
          </p>
          <p className="hero-description animate-fade-in delay-300">
            Building modern, performant, and accessible applications with a focus on clean code and scalable architecture.
          </p>
          
          <div className="hero-actions animate-fade-in delay-300">
            <a href="#projects" className="btn-primary">
              Projects
            </a>
            <a href="#about" className="btn-secondary">
              About Me
            </a>
            <a href="#contact" className="btn-transparent">
              Contact
            </a>
          </div>
        </div>
        
        <div className="hero-graphic animate-fade-in delay-300">
          <div className="profile-image-container">
            <img src={perfilImg} alt="Lucas Ferreira" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
