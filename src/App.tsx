import React, { useRef, useState, useEffect, RefObject } from 'react';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ParticleBackground from './components/particleBackground';
import AboutPage from './pages/AboutPage/about';
import ExperiencePage from './pages/ExperiencePage/experience';
import HomePage from './pages/HomePage/home';
import { Analytics } from '@vercel/analytics/react';
import { SECTIONS, SectionId } from './config/sections';
import { getVisitorId } from './utils/visitorId';

function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const [visibleSection, setVisibleSection] = useState<SectionId>('home');
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Get or create visitor ID from cookie
    const visitorId = getVisitorId();

    fetch('/api/track-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        path: window.location.pathname,
        visitor_id: visitorId,
      }),
    }).catch(() => {
      // Ignore errors on the client; this is best-effort logging
    });
  }, []);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as SectionId;
          if (SECTIONS.some((section) => section.id === id)) {
            setVisibleSection(id);
          }
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
    if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime < 16) return; // ~60fps throttle
      lastTime = now;

      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <ParticleBackground />
      {!prefersReducedMotion && (
        <div
          className="gradient-orb"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        />
      )}
      <header className={`App-header ${visibleSection === 'home' ? 'hide' : 'show'}`}>
        <div className="navbar-container">
          <Navbar
            scrollToSection={scrollToSection}
            refs={{
              home: homeRef,
              about: aboutRef,
              experience: experienceRef,
            }}
            activeSection={visibleSection}
            sections={SECTIONS}
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
