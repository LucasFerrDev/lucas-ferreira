import { Mail, Send } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission would go here
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section className="section stars-bg" id="contact">
      <div className="container">
        <h2 className="section-title">Entre em <span>Contato</span></h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Vamos conversar?</h3>
            <p className="contact-desc">
              Estou sempre aberto a novas oportunidades, colaborações em projetos open source e bate-papos sobre tecnologia.
            </p>
            
            <div className="social-links">
              <a href="mailto:seu-email@gmail.com" className="social-item">
                <div className="social-icon">
                  <Mail size={24} />
                </div>
                <span>seu-email@gmail.com</span>
              </a>
              <a href="https://github.com/seu-usuario" target="_blank" rel="noreferrer" className="social-item">
                <div className="social-icon">
                  <Github size={24} />
                </div>
                <span>github.com/seu-usuario</span>
              </a>
              <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noreferrer" className="social-item">
                <div className="social-icon">
                  <Linkedin size={24} />
                </div>
                <span>linkedin.com/in/seu-usuario</span>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit} onMouseMove={handleMouseMove}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu nome completo" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="seu@email.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" rows="5" placeholder="Como posso ajudar?" required></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Enviar Mensagem
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
