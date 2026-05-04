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
      role: 'Junior Frontend Developer',
      company: 'Funnel Max',
      period: '2026 - Present',
      description: 'I work as a front-end developer responsible for creating, maintaining, and publishing web pages used in digital marketing campaigns, ensuring performance, stability, and integration with external tools.',
      techs: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'n8n']
    },
    {
      id: 2,
      role: 'Development Intern',
      company: 'Funnel Max',
      period: '2024 - 2026',
      description: 'Worked on the maintenance and publication of web pages, ensuring continuous updates, fixes, and improvements. Responsible for configuring and monitoring automations, in addition to providing technical support related to hosting and production environments.',
      techs: ['HTML', 'CSS', 'JavaScript', 'WordPress']
    }
  ];

  return (
    <section className="section stars-bg" id="experience">
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        
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
