import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import './Home.css';

function Home () {
  return (
    <div className="home">
      <Header />

      <HeroSection id="home" />
      <AboutSection id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  )
}

export default Home;