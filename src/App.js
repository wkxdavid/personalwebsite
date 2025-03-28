import React, { useRef } from "react";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AboutPage from "./pages/AboutPage/about";
import ExperiencePage from "./pages/ExperiencePage/experience";
import HomePage from "./pages/HomePage/home";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, experienceRef }} />
      </header>
      <section ref={homeRef}>
        <HomePage scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, experienceRef }} />
      </section>
      <section ref={aboutRef}>
        <AboutPage />
      </section>
      <section ref={experienceRef}>
        <ExperiencePage />
      </section>
      <Footer />
    </div>
  );
}

export default App;