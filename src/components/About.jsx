import { Code2, Server, Database } from 'lucide-react';
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
            <p>Olá pessoal!</p>
            <p>
              Sou um desenvolvedor apaixonado por tecnologia e por criar soluções que fazem a diferença. Ao longo da minha trajetória, venho desenvolvendo diversos projetos com diferentes tecnologias, o que me permitiu construir uma visão ampla sobre desenvolvimento e resolução de problemas.
            </p>
            <p>
              Atualmente, estou direcionando meu foco para o desenvolvimento front-end, buscando me especializar cada vez mais na criação de interfaces modernas, intuitivas e bem estruturadas.
            </p>
            <p>
              Além disso, tenho cada vez mais inserido inteligência artificial e suas aplicações práticas no meu trabalho, principalmente no uso para automação e otimização de processos. É uma área que me motiva bastante e que venho explorando com entusiasmo.
            </p>
            <p>
              Sou movido por desafios, aprendizado contínuo e pela vontade de construir soluções que realmente façam a diferença.
            </p>
          </div>
          
          <div className="skills-container">
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <Code2 size={32} className="text-accent mb-4" />
              <h3>Frontend</h3>
              <p>HTML, CSS, Javascript, React, Angular, Next.js</p>
            </div>
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <Server size={32} className="text-accent mb-4" />
              <h3>Backend</h3>
              <p>Node.js, Typescript, Java, Spring, Ruby on Rails.</p>
            </div>
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <Database size={32} className="text-accent mb-4" />
              <h3>Infraestrutura</h3>
              <p>Postgresql, MongoDB, Git e Github, CI/CD, Linux, Docker.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
