import './AboutSection.css';

function AboutSection({ id }) {
  return (
    <section className="about-section" id={id}>
      <h2>About <span>Me</span></h2>
      <div className='about-text-container'>
        <p>
          I studied Computer Science, where I built a strong foundation in software development, data structures, and system design. 
          I started with HTML, CSS, and JavaScript, developing responsive and user-friendly interfaces, and later expanded into React to build dynamic, scalable applications. 
          I&#x27;m currently strengthening my backend skills to grow as a full-stack developer.
        </p>

        <p>
          My main project is a Multi-Transportation Service Platform — a full-stack web application designed to deliver a seamless ride-booking experience. 
          I focused on clean UI, usability, performance, and structured architecture, approaching it as a real-world product rather than just a demo.
        </p>

        <p>
          I enjoy building solutions that create real value. 
          I&#x27;m constantly exploring new technologies and improving my skills through hands-on development. 
          I believe growth comes from curiosity, consistency, and building things that solve real problems.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;