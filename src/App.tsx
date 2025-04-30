import React, { useRef, useState, useEffect, RefObject } from 'react';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import AboutPage from './pages/AboutPage/about';
import ExperiencePage from './pages/ExperiencePage/experience';
import HomePage from './pages/HomePage/home';
import { Analytics } from '@vercel/analytics/react';
import ScrollTimeline from './components/scrollTimeline';

function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const [visibleSection, setVisibleSection] = useState('home');
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.3,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const homeNode = homeRef.current;
    const aboutNode = aboutRef.current;
    const experienceNode = experienceRef.current;

    if (homeNode) observer.observe(homeNode);
    if (aboutNode) observer.observe(aboutNode);
    if (experienceNode) observer.observe(experienceNode);

    return () => {
      if (homeNode) observer.unobserve(homeNode);
      if (aboutNode) observer.unobserve(aboutNode);
      if (experienceNode) observer.unobserve(experienceNode);
    };
  }, []);

  useEffect(() => {
    setShowNavbar(visibleSection === 'about' || visibleSection === 'experience');
  }, [visibleSection]);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
  ];
  
  
  const scrollToSection = (sectionId: string | RefObject<HTMLElement>) => {
    if (typeof sectionId === 'string') {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      sectionId.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    
    <div className="App">
      {showNavbar && (
        <header className="App-header">
          <div
            className={`navbar-container ${
              showNavbar ? 'fade-in' : 'fade-out'
            }`}
          >
            <Navbar
              scrollToSection={scrollToSection}
              refs={{
                home: homeRef,
                about: aboutRef,
                experience: experienceRef,
              }}
            />
          </div>
        </header>
      )}

      <section id="home" ref={homeRef}>
        <HomePage
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, experienceRef }}
        />
      </section>
      <section id="about" ref={aboutRef}>
        <AboutPage />
      </section>
      <section id="experience" ref={experienceRef}>
        <ExperiencePage />
      </section>
      <Footer />
      <Analytics />
      {showNavbar && (
      <ScrollTimeline
        sections={sections}
        visibleSection={visibleSection}
        scrollToSection={scrollToSection}
      />
      )}
    </div>
  );
}

export default App;
