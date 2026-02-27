import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa6';
import './Contact.css';

function Contact({ id }) {
  return (
    <section className="social-container" id={id}>
      <h2><span>Social</span> links</h2>
      <p className="social-description">Follow me on</p>
      <div className="social-links-container">
        <a href="https://github.com/biswajitmanna" target="_blank" rel="noopener noreferrer" className='social-link'>
          <FaGithub className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/biswajit-manna-063908237" target="_blank" rel="noopener noreferrer" className='social-link'>
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://twitter.com/biswajitmanna77" target="_blank" rel="noopener noreferrer" className='social-link'>
          <FaXTwitter className="social-icon" />
        </a>
        <a href="https://www.youtube.com/@biswajitmanna775" target="_blank" rel="noopener noreferrer" className='social-link'>
          <FaYoutube className="social-icon" />
        </a>
        <a href="https://www.instagram.com/biswajitmanna775" target="_blank" rel="noopener noreferrer" className='social-link'>
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com/share/1872bxxcf3/" target="_blank" rel="noopener noreferrer" className='social-link'>
          <FaFacebook className="social-icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;