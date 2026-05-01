import { Code2, MonitorPlay, Layers } from 'lucide-react';
import './About.css';

export default function About() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="section bg-secondary" id="about">
      <div className="container">
        <h2 className="section-title">Sobre <span>Mim</span></h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              Sou um desenvolvedor apaixonado por tecnologia, com foco em criar interfaces de usuário incríveis e aplicações escaláveis. Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam por trás das telas.
            </p>
            <p>
              Atualmente, especializo-me no ecossistema moderno do desenvolvimento web, combinando design principles com código limpo e eficiente. Acredito que a tecnologia deve resolver problemas de forma simples e elegante.
            </p>
          </div>
          
          <div className="skills-container">
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <Code2 size={32} className="text-accent mb-4" />
              <h3>Frontend Moderno</h3>
              <p>React, Vite, Next.js, TypeScript e CSS/Tailwind.</p>
            </div>
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <MonitorPlay size={32} className="text-accent mb-4" />
              <h3>UI/UX Design</h3>
              <p>Interfaces focadas na experiência do usuário, acessibilidade e performance.</p>
            </div>
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <Layers size={32} className="text-accent mb-4" />
              <h3>Arquitetura</h3>
              <p>Código limpo, componentes reutilizáveis e design systems escaláveis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
