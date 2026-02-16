import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <p className="hero-section-greeting">Hi there!</p>
        <h1 className="hero-section-name">I'm <span>Biswajit Manna</span></h1>
        <p className="sort-bio">I develop web applications</p>

        <div className="quick-links">
          <a href="#projects" className="project-link">Projects</a>
          <a href="#contact" className="contact-link">Contact</a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/biswajitmanna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/biswajit-manna-063908237"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://twitter.com/biswajitmanna77"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>

      <div className="profile-pic">
        <img src="/MyPhoto.jpg" alt="Profile Picture" />
      </div>
    </section>
  );
}

export default HeroSection;