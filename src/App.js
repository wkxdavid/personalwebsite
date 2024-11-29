import React from 'react';
import './App.css';
import logo from './img/dp-logo-transparent.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './components/IntroPage/about';
import ExperiencePage from './components/ExperiencePage/experience';
import ResumePage from './components/ResumePage/resume';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Hello, I see your taking a look at the source code. It is currently still an work in progress and I hope to make it better in the future!

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <nav className='App-nav'>
            <Link to='/'>About</Link>
            <Link to='/projects'>Experience</Link>
            <Link to='/resume'>Resume</Link> {}
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<AboutPage />} />
          <Route path='/projects' element={<ExperiencePage />} />
          <Route path='/resume' element={<ResumePage />} />
        </Routes>

        <footer className='App-footer'>
          <div className='contact-info'>
            <div className='social-item'>
              <FaEnvelope size={30} />
              <p>
                <a href='mailto:phamdavid722@gmail.com'>
                  phamdavid722@gmail.com
                </a>
              </p>
            </div>
            <div className='social-item'>
              <FaLinkedin size={30} />
              <p>
                <a
                  href='https://www.linkedin.com/in/phamdavid722'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  phamdavid722
                </a>
              </p>
            </div>
            <div className='social-item'>
              <FaGithub size={30} />
              <p>
                <a
                  href='https://github.com/wkxdavid'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  wkxdavid
                </a>
              </p>
            </div>
          </div>
          <p>&copy; 2024 David Pham. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
