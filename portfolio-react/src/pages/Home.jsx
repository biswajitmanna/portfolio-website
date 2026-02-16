import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import './Home.css';

function Home () {
  return (
    <div className="home">
      <Header />

      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default Home;