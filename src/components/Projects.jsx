import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    e.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`);
    e.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--rotate-x', '0deg');
    e.currentTarget.style.setProperty('--rotate-y', '0deg');
  };

  const projects = [
    {
      id: 1,
      title: 'DevSpace Dashboard',
      description: 'Um dashboard moderno e analítico para desenvolvedores acompanharem métricas de produtividade, commits e integrações.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
      techs: ['React', 'TypeScript', 'Chart.js'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'E-commerce UI Kit',
      description: 'Uma biblioteca completa de componentes de UI focada em e-commerces, com carrinho de compras, checkout e filtros.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      techs: ['Next.js', 'Tailwind', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'TaskFlow Manager',
      description: 'Aplicativo de gerenciamento de tarefas com suporte a drag and drop, quadros kanban e colaboração em tempo real.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=600',
      techs: ['Vue', 'Firebase', 'Sass'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section className="section bg-secondary" id="projects">
      <div className="container">
        <h2 className="section-title">Meus <span>Projetos</span></h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="Ver código no GitHub">
                    <Github size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Ver projeto online">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-techs">
                  {project.techs.map(tech => (
                    <span key={tech}>{tech}</span>
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
