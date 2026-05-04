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
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p>Hi everyone!</p>
            <p>
              I am a developer passionate about technology and creating solutions that make a difference. Throughout my journey, I have been developing several projects with different technologies, which has allowed me to build a broad vision of development and problem-solving.
            </p>
            <p>
              Currently, I am focusing on front-end development, seeking to specialize more and more in creating modern, intuitive, and well-structured interfaces.
            </p>
            <p>
              Additionally, I am increasingly incorporating artificial intelligence and its practical applications into my work, mainly using it for automation and process optimization. It is an area that motivates me greatly and that I have been exploring with enthusiasm.
            </p>
            <p>
              I am driven by challenges, continuous learning, and the desire to build solutions that truly make a difference.
            </p>
          </div>
          
          <div className="skills-container">
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <Code2 size={32} className="text-accent mb-4" />
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, React, Angular</p>
            </div>
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <Server size={32} className="text-accent mb-4" />
              <h3>Backend</h3>
              <p>Node.js, Typescript, Java, Spring, Ruby on Rails.</p>
            </div>
            <div className="skill-card" onMouseMove={handleMouseMove}>
              <Database size={32} className="text-accent mb-4" />
              <h3>Infrastructure</h3>
              <p>Postgresql, MongoDB, Git e Github, CI/CD, Linux, Docker.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
