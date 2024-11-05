import React from 'react';
import './App.css';
import logo from './img/test.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <a href="#about-section">About</a>
          <a href="#projects-section">Projects</a>
          <a href="#contact-section">Contact</a>
        </nav>
      </header>

      <section id="about-section" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h1>David Pham</h1>
            <h2>Senior Informatics @ University of Washington</h2>
            <p>
              Previous SWE Intern, Teaching Assistant, and Research Assistant. Current leadership roles in SWECC and Valorant @ UW.
            </p>
          </div>
        </div>
      </section>

      <section id="projects-section" className="projects-section">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="project-card">
            <h3>Project 1: Connect 4</h3>
            <p>serverside</p>
          </div>
          <div className="project-card">
            <h3>pokedex</h3>
            <p>clientside</p>
          </div>
          <div className="project-card">
            <h3>valorant analysis</h3>
            <p>ml project python</p>
          </div>
        </div>
      </section>

      <footer id="contact-section" className="App-footer">
        <div className="footer-content">
          <p>Email: <a href="mailto:phamdavid722@gmail.com">phamdavid722@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/phamdavid722" target="_blank" rel="noopener noreferrer">phamdavid722</a></p>
          <p>GitHub: <a href="https://github.com/wkxdavid" target="_blank" rel="noopener noreferrer">wkxdavid</a></p>
        </div>
        <p>&copy; 2024 David Pham. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
