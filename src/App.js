import React, { useRef, useState, useEffect } from "react";
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
  const [visibleSection, setVisibleSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
    };
  }, []);

  useEffect(() => {
    if (visibleSection === "about" || visibleSection === "experience") {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [visibleSection]);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className={`navbar-container ${showNavbar ? "fade-in" : "fade-out"}`}>
          {showNavbar && <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, experienceRef }} />}
        </div>
      </header>
      <section id="home" ref={homeRef}>
        <HomePage scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, experienceRef }} />
      </section>
      <section id="about" ref={aboutRef}>
        <AboutPage />
      </section>
      <section id="experience" ref={experienceRef}>
        <ExperiencePage />
      </section>
      <Footer />
    </div>
  );
}

export default App;
