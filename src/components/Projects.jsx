
import { FaGithub as Github } from 'react-icons/fa';
import './Projects.css';
import nexusSpecImg from '../assets/nexus-spec.png';
import psicologaImg from '../assets/psicologa-beatriz.png';
import dashImg from '../assets/dash.png';


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
      title: 'Nexus Spec',
      description: 'NexusSpec is an SDD-based tool that adds a specification layer to your project to help AI agents build software according to what you defined in the process.',
      image: nexusSpecImg,
      techs: ['Python'],
      github: 'https://github.com/LucasFerrDev/NexusSpec',
      live: 'https://github.com/LucasFerrDev/NexusSpec'
    },
    {
      id: 2,
      title: 'Psychologist Beatriz',
      description: 'Landing page developed for a psychologist with a focus on acquiring new patients.',
      image: psicologaImg,
      techs: ['HTML', 'CSS', 'TypeScript', 'React', 'Vue'],
      github: 'https://github.com/LucasFerrDev/psicologa-beatriz',
      live: 'https://psicologa-beatriz.vercel.app/'
    },
    {
      id: 3,
      title: 'Wallert Tracker',
      description: 'Wallert Tracker is a personal finance application for managing income, expenses, and goals, featuring user authentication and a dashboard with a consolidated data view.',
      image: dashImg,
      techs: ['React', 'TypeScript', 'Vite', 'Java', 'Spring', 'Maven', 'PostgreSQL'],
      github: 'https://github.com/LucasFerrDev/wallert-tracker',
      live: 'https://github.com/LucasFerrDev/wallert-tracker'
    }
  ];

  return (
    <section className="section bg-secondary" id="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="View code on GitHub">
                    <Github size={24} />
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
