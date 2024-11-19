import React from 'react';
import './App.css';
import logo from './img/dp-logo-transparent.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './components/IntroPage/about';
import ExperiencePage from './components/ExperiencePage/experience';
import ResumePage from './components/ResumePage/resume';

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
            <p>
              Email:{' '}
              <a href='mailto:phamdavid722@gmail.com'>phamdavid722@gmail.com</a>
            </p>
            <p>
              LinkedIn:{' '}
              <a
                href='https://www.linkedin.com/in/phamdavid722'
                target='_blank'
                rel='noopener noreferrer'
              >
                phamdavid722
              </a>
            </p>
            <p>
              GitHub:{' '}
              <a
                href='https://github.com/wkxdavid'
                target='_blank'
                rel='noopener noreferrer'
              >
                wkxdavid
              </a>
            </p>
          </div>
          <p>&copy; 2024 David Pham. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
