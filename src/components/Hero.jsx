import { useState, useEffect } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [charIndex, setCharIndex] = useState(0);
  const fullText = "A stellar web experience";

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
            Construindo aplicações modernas, performáticas e acessíveis com foco em um código limpo e arquitetura escalável.
          </p>
          
          <div className="hero-actions animate-fade-in delay-300">
            <a href="#projects" className="btn-primary">
              Projetos
            </a>
            <a href="#about" className="btn-secondary">
              Sobre Mim
            </a>
            <a href="#contact" className="btn-transparent">
              Contato
            </a>
          </div>
        </div>
        
        <div className="hero-graphic animate-fade-in delay-300">
          <div className="react-planet-container">
            <div className="react-core"></div>
            
            <div className="react-ring ring-1">
              <div className="electron-container c-1">
                <div className="react-electron"></div>
              </div>
            </div>
            
            <div className="react-ring ring-2">
              <div className="electron-container c-2">
                <div className="react-electron"></div>
              </div>
            </div>
            
            <div className="react-ring ring-3">
              <div className="electron-container c-3">
                <div className="react-electron"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
