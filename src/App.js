import React from 'react';
import './App.css';
import logo from './img/dp-logo-transparent.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <nav className='App-nav'>
            <Link to='/'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Resume</Link> {}
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <section id='about-section' className='about-section'>
                <div className='about-container'>
                  <div className='about-text'>
                    <h1>David Pham</h1>
                    <h2>Welcome to my Personal Website!</h2>
                    <h3>Website is still Work In Progress</h3>
                    <p>
                      Hello! I'm currently a senior at the University of
                      Washington majoring in Informatics with a focus in
                      software development. I have the most interest in
                      full-stack web development with experience like
                      internships, research, and teaching!{' '}
                    </p>
                    <p>
                      Outside of academics, I have leadership in two seperate
                      clubs where I am the President of Valorant @ UW and I
                      mange the mentorship program in the Software Enginnering
                      Career Club. Feel free to look around the website and
                      shoot me an email if you have any questions!
                    </p>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path='/projects'
            element={
              <section id='projects-section' className='projects-section'>
                <h2>Projects</h2>
                <div className='project-container'>
                  <div className='project-card'>
                    <h3>Connect 4</h3>
                    <p>
                      Two Player Online Connect 4 game with Accounts and lobby
                      chat rooms. Developed with Mern Stack and WebSockets.
                    </p>
                    <ul className='skills-list'>
                      <li>JavaScript, Node.js, Express.js, Azure, MongoDB</li>
                    </ul>
                    {/* <img
                      src='path/to/connect4-image.jpg'
                      alt='Connect 4 project screenshot'
                      className='project-image'
                    /> */}
                  </div>

                  <div className='project-card'>
                    <h3>Pokedex</h3>
                    <p>
                      Built an Pokemon Pokedex that featured an catalog,
                      guessing game, and shop.
                    </p>
                    <ul className='skills-list'>
                      <li>React, BootStrap, Firebase</li>
                    </ul>
                    {/* <img
                      src='path/to/pokedex-image.jpg'
                      alt='Pokedex project screenshot'
                      className='project-image'
                    /> */}
                  </div>

                  <div className='project-card'>
                    <h3>Valorant Tournament Analysis</h3>
                    <p>
                      Built an maching learning model to predict the top
                      performing players in a Valorant Tournament based on
                      individualized performance.
                    </p>
                    <ul className='skills-list'>
                      <li>Python, Panda, Scikit-learn, Plotly</li>
                    </ul>
                    {/* <img
                      src='path/to/valorant-analysis-image.jpg'
                      alt='Valorant Analysis project screenshot'
                      className='project-image'
                    /> */}
                  </div>

                  <div className='project-card'>
                    <h3>More Coming Soon!</h3>
                    <p>Still Building Website</p>
                  </div>
                </div>
              </section>
            }
          />

          <Route
            path='/resume'
            element={
              <section id='resume-section' className='resume-section'>
                <h2>Reach out if you have any questions!</h2>
                <iframe
                  src='https://docs.google.com/document/d/1u8Go0lS6eTKbvYy-eVjPEfg2Y08wokaDN7mJ56GE4bY/preview'
                  width='100%'
                  height='600px'
                  title='Resume'
                ></iframe>
              </section>
            }
          />
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
