import { FaMagnifyingGlass, FaTicket, FaCircleUser, FaArrowDown } from 'react-icons/fa6';
import { Link } from 'react-router';
import './Projects.css';
import transportImg from '../assets/transportation-project.png';

function Projects({ id }) {
  return (
    <section className="projects" id={id}>
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-image-container">
          <img src={transportImg} alt="Multi-Transportation Service Platform" />
        </div>

        <div className="project-details">
          <h3>Multi-Transportation Service Platform</h3>
          <p className="project-description">
            A full-stack web application that enables users to book rides across multiple transport options through a seamless, user-friendly interface.
          </p>

          <div className='project-features'>
            <p>Key Features:</p>
            <ul>
              <li><FaMagnifyingGlass className="project-icon" /> Search for transport options</li>
              <li><FaTicket className="project-icon" /> Book & manage tickets</li>
              <li><FaCircleUser className="project-icon" /> User profiles</li>
            </ul>
          </div>

          <div className="project-tech">
            <p>Technologies Used:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <Link to="/" className="project-view-link">View Details <FaArrowDown className="project-view-link-icon" /></Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;