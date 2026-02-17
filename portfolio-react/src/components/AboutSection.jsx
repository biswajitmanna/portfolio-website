import './AboutSection.css';

function AboutSection({ id }) {
  return (
    <section className="about-section" id={id}>
      <h2>About <span>Me</span></h2>
      <div className='about-text-container'>
        <p>
          I&#x2019;m a Full-Stack Developer with a Bachelor&#x2019;s degree in Computer Science and hands-on experience building scalable web applications. 
          I specialize in creating responsive, user-centered interfaces using modern frontend technologies, particularly React, while expanding my backend capabilities to develop complete end-to-end systems.
        </p>

        <p>
          My work includes developing a multi-transportation service platform designed to deliver a seamless and efficient booking experience. 
          This project reflects my focus on clean architecture, performance, usability, and real-world problem-solving.
        </p>

        <p>
          With a strong foundation in software engineering principles, data structures, and system design, I approach development with both technical depth and product-oriented thinking. 
          I&#x2019;m driven by continuous improvement, practical learning, and building solutions that create real value.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;