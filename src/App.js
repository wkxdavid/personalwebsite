import React from 'react';
import './App.css';
import logo from './img/dp-logo-transparent.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="App-nav">
            <Link to="/">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link> {}
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
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
          } />
          
          <Route path="/projects" element={
            <section id="projects-section" className="projects-section">
              <h2>Projects</h2>
              <div className="project-container">
                <div className="project-card">
                  <h3>Project 1: Connect 4</h3>
                  <p>serverside</p>
                </div>
                <div className="project-card">
                  <h3>Project 2: Pokedex</h3>
                  <p>clientside</p>
                </div>
                <div className="project-card">
                  <h3>Project 3: Valorant Analysis</h3>
                  <p>ML project in Python</p>
                </div>
              </div>
            </section>
          } />

          <Route path="/resume" element={
            <section id="resume-section" className="resume-section">
              <h2>Resume</h2>
                  <iframe 
                  src="https://docs.google.com/document/d/1u8Go0lS6eTKbvYy-eVjPEfg2Y08wokaDN7mJ56GE4bY/preview" 
                  width="100%" 
                  height="600px" 
                  title="Resume"
              ></iframe>
            </section>
          } />
        </Routes>

        <footer className="App-footer">
          <div className="contact-info">
            <p>Email: <a href="mailto:phamdavid722@gmail.com">phamdavid722@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/phamdavid722" target="_blank" rel="noopener noreferrer">phamdavid722</a></p>
            <p>GitHub: <a href="https://github.com/wkxdavid" target="_blank" rel="noopener noreferrer">wkxdavid</a></p>
          </div>
          <p>&copy; 2024 David Pham. All rights reserved.</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;
