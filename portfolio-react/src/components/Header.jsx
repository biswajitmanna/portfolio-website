import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1>Portfolio</h1>

      <nav className="nav">
        <ul>
          <li><a className='active' href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Social links</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;