import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const closeMenu = () => {
      setIsOpen(false);
    };

    // Function to handle smooth scrolling
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu(); // Close the menu after clicking
      }
    };

    return (
      <nav className="navbar" aria-label="Main Navigation" role="navigation">
        <div className="navbar-brand" tabIndex="0">Lore Olympus</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`} role="menu" aria-expanded={isOpen}>
          <a href="#home" role="menuitem" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#characters" role="menuitem" onClick={() => scrollToSection('characters')}>Characters</a>
          <a href="#carousel" role="menuitem" onClick={() => scrollToSection('carousel')}>Supernatural Manhwas</a>
          <a href="#cta" role="menuitem" onClick={() => scrollToSection('cta')}>Read Now</a>
        </div>
        <div className="hamburger" onClick={toggleMenu} aria-controls="navbar-menu" aria-expanded={isOpen} aria-label="Toggle navigation menu" tabIndex="0">
          ☰
        </div>
      </nav>
    );
};

export default Navbar;
