import { useRef } from 'react';
import { FaEllipsis } from 'react-icons/fa6';
import './Header.css'

function Header({ activeSection }) {
  const navRef = useRef(null);

  const navListToggleFn = () => {
    navRef.current.classList.toggle('show');
    const navLinks = navRef.current.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navRef.current.classList.remove('show');
      });
    });
  }

  return (
    <header className="header">
      <h1>Portfolio</h1>

      <nav className="nav">
        <ul className="nav-list" ref={navRef}>
          <li><a className={activeSection === 'home' ? 'active' : ''} href="#home">Home</a></li>
          <li><a className={activeSection === 'about' ? 'active' : ''} href="#about">About</a></li>
          <li><a className={activeSection === 'skills' ? 'active' : ''} href="#skills">Skills</a></li>
          <li><a className={activeSection === 'projects' ? 'active' : ''} href="#projects">Projects</a></li>
          <li><a className={activeSection === 'contact' ? 'active' : ''} href="#contact">Social links</a></li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={navListToggleFn}>
        <FaEllipsis />
      </div>
    </header>
  );
}

export default Header;