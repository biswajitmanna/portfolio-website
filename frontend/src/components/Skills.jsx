import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa6';
import { VscVscode } from "react-icons/vsc"
import './Skills.css';

function Skills({ id }) {
  return (
    <section className="skills" id={id}>
      <h2>Skills</h2>
      <div className="skills-container">
        <div>
          <p>Languages I know</p>
          <ul className="skills-list">
            <li><FaHtml5 className="skills-icon skill-html" /></li>
            <li><FaCss3Alt className="skills-icon skill-css" /></li>
            <li><FaJs className="skills-icon skill-js" /></li>
            <li><FaReact className="skills-icon skill-react" /></li>
          </ul>
        </div>
        
        <div>
          <p>Tools I use</p>
          <ul className="skills-list">
            <li><VscVscode className="skills-icon skill-vscode" /></li>
            <li><FaGitAlt className="skills-icon skill-git" /></li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}

export default Skills;