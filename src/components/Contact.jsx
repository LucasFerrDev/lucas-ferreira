import { Mail, Send, CheckCircle } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm('xqenaddw');
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
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
              <a href="mailto:lucasferreira1.dev@gmail.com" className="social-item">
                <div className="social-icon">
                  <Mail size={24} />
                </div>
                <span>lucasferreira1.dev@gmail.com</span>
              </a>
              <a href="https://github.com/LucasFerrDev" target="_blank" rel="noreferrer" className="social-item">
                <div className="social-icon">
                  <Github size={24} />
                </div>
                <span>github.com/LucasFerrDev</span>
              </a>
              <a href="https://www.linkedin.com/in/lucasf-souza/" target="_blank" rel="noreferrer" className="social-item">
                <div className="social-icon">
                  <Linkedin size={24} />
                </div>
                <span>linkedin.com/in/lucasf-souza</span>
              </a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit} onMouseMove={handleMouseMove}>
            {state.succeeded ? (
              <div className="success-message">
                <CheckCircle size={48} color="var(--accent)" />
                <h3>Mensagem Enviada!</h3>
                <p>Obrigado pelo contato. Retornarei o mais breve possível.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" id="name" name="name" placeholder="Seu nome completo" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="email" placeholder="seu@email.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" name="message" rows="5" placeholder="Como posso ajudar?" required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button type="submit" className="btn-primary w-full" disabled={state.submitting}>
                  {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                  {!state.submitting && <Send size={18} />}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
