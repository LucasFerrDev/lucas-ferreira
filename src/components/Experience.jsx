import { Calendar, Briefcase } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const experiences = [
    {
      id: 1,
      role: 'Desenvolvedor Frontend Sênior',
      company: 'Tech Solutions Inc.',
      period: '2024 - Presente',
      description: 'Liderando o desenvolvimento de interfaces complexas e arquitetura de aplicações web usando React e Next.js.',
      techs: ['React', 'TypeScript', 'Tailwind', 'Zustand']
    },
    {
      id: 2,
      role: 'Desenvolvedor Pleno',
      company: 'Digital Agency X',
      period: '2022 - 2024',
      description: 'Desenvolvimento de e-commerces e landing pages de alta performance, melhorando as métricas de conversão em 40%.',
      techs: ['Vue.js', 'Nuxt', 'Sass', 'Figma']
    },
    {
      id: 3,
      role: 'Desenvolvedor Júnior',
      company: 'Startup Y',
      period: '2020 - 2022',
      description: 'Manutenção de sistemas legados e migração progressiva para novas tecnologias web.',
      techs: ['JavaScript', 'HTML5/CSS3', 'Bootstrap']
    }
  ];

  return (
    <section className="section stars-bg" id="experience">
      <div className="container">
        <h2 className="section-title">Experiência <span>Profissional</span></h2>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              <div className="timeline-content" onMouseMove={handleMouseMove}>
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-period">
                    <Calendar size={14} className="text-accent" />
                    {exp.period}
                  </span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-techs">
                  {exp.techs.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
