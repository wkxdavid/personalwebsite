import React from 'react';
import './App.css';
import logo from './img/dp-logo-transparent.png';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from 'react-router-dom';
import AboutPage from './components/AboutPage/about';
import ExperiencePage from './components/ExperiencePage/experience';
import HomePage from './components/HomePage/home';
// import ResumePage from './components/ResumePage/resume';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Hello, I see your taking a look at the source code. It is currently still an work in progress and I hope to make it better in the future!

function Navbar() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/experience'>Work</Link>
        </li>
        {/* <li>
          <Link to='/resume'>Resume</Link>
        </li> */}
      </ul>
    </nav>
  );
}

function Header() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  return (
    <header className='App-header'>
      <Link to='/'>
        <img src={logo} className='App-logo' alt='logo' />
      </Link>
      <Navbar />
    </header>
  );
}

function Footer() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer className='App-footer'>
      <div className='contact-info'>
        <div className='social-item'>
          <FaEnvelope size={30} />
          <p>
            <a href='mailto:phamdavid722@gmail.com'>phamdavid722@gmail.com</a>
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
  );
}

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/experience' element={<ExperiencePage />} />
          {/* <Route path='/resume' element={<ResumePage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
