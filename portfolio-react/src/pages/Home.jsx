import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import './Home.css';

function Home () {
  return (
    <div className="home">
      <Header />

      <HeroSection id="home" />
      <AboutSection id="about" />
      <Skills id="skills" />
    </div>
  )
}

export default Home;