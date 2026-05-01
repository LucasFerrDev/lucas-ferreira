import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#hero" className="header-logo">
          Lucas <span>Ferreira</span>
        </a>
        
        <div className="header-right">
          <nav className="header-nav desktop-nav">
            <a href="#about">About</a>
            <a href="#experience">Work</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contacts</a>
          </nav>
          
          <div className="header-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#experience" onClick={() => setIsMenuOpen(false)}>Work</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacts</a>
      </div>
    </header>
  );
}
