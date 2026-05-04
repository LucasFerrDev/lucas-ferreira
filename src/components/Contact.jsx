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
        <h2 className="section-title">Get in <span>Touch</span></h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's talk?</h3>
            <p className="contact-desc">
              I am always open to new opportunities, collaborations on open source projects, and chats about technology.
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
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="How can I help?" required></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button type="submit" className="btn-primary w-full" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
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
