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
      role: 'Desenvolvedor Frontend Júnior',
      company: 'Funnel Max',
      period: '2026 - Presente',
      description: 'Atuo como desenvolvedor com foco em front-end, responsável pela criação, manutenção e publicação de páginas web utilizadas em campanhas de marketing digital, garantindo performance, estabilidade e integração com ferramentas externas.',
      techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'n8n']
    },
    {
      id: 2,
      role: 'Estagiário de Desenvolvimento',
      company: 'Funnel Max',
      period: '2024 - 2026',
      description: 'Atuação na manutenção e publicação de páginas web, garantindo atualizações, correções e melhorias contínuas. Responsável pela configuração e acompanhamento de automações, além de prestar suporte técnico relacionado a hospedagens e ambientes de produção.',
      techs: ['HTML', 'CSS', 'JavaScript', 'WordPress']
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
