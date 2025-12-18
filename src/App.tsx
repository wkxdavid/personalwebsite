import React, { useRef, useState, useEffect, RefObject } from 'react';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ParticleBackground from './components/particleBackground';
import AboutPage from './pages/AboutPage/about';
import ExperiencePage from './pages/ExperiencePage/experience';
import HomePage from './pages/HomePage/home';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const [visibleSection, setVisibleSection] = useState('home');

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.5,
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

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <ParticleBackground />
      <header className="App-header">
        <div className="navbar-container">
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

      <main className="main-content">
        <section id="home" ref={homeRef} className={visibleSection === 'home' ? 'active' : ''}>
          <HomePage
            scrollToSection={scrollToSection}
            refs={{ homeRef, aboutRef, experienceRef }}
          />
        </section>
        <section id="about" ref={aboutRef} className={visibleSection === 'about' ? 'active' : ''}>
          <AboutPage />
        </section>
        <section id="experience" ref={experienceRef} className={visibleSection === 'experience' ? 'active' : ''}>
          <ExperiencePage />
        </section>
      </main>
      
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
