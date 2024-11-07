import React from 'react';
import './App.css';
import logo from './img/dp-logo-transparent.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import pokedexImage from './img/pokedex.png';
import connect4Image from './img/connect4.png';
import valorantImage from './img/valorant.png';

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
          <Route
            path='/'
            element={
              <section id='about-section' className='about-section'>
                <div className='about-container'>
                  <div className='about-text'>
                    <h1>David Pham</h1>
                    <h2>Welcome to my Personal Website!</h2>
                    <h3>
                      Website was created 11/5/2024 and is still Work In
                      Progress
                    </h3>
                    <p>
                      Hello! I'm currently a senior at the University of
                      Washington majoring in Informatics with a focus in
                      software development. I have the most interest in
                      full-stack web development with experience like
                      internships, research, and teaching!
                    </p>
                    <p>
                      Outside of academics, I have leadership in two seperate
                      clubs where I am the President of Valorant @ UW and I
                      manage the mentorship program in the Software Enginnering
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
                <h1>Experience</h1>
                <div className='work-container'>
                  <div className='work-card'>
                    <h2>Teaching Assistant</h2>
                    <h3>Information School</h3>
                    <h4>
                      Serverside: React, Javascript, Express.js, Node.js
                      MongoDB, Azure
                    </h4>
                    <h4>Data: R, Tidyverse, Shiny, testthat</h4>
                    <p>INFO 441: Serverside Development</p>
                    <p>INFO 201: Foundationals Skills of Data Science</p>
                  </div>
                  <div className='work-card'>
                    <h2>Software Enginnering Intern</h2>
                    <h3>HP Inc.</h3>
                    <h4>
                      React | Typescript | Java | Selenium | AWS | Jest | Enzyme{' '}
                    </h4>
                    <p>HP Workforce Experience Platform</p>
                  </div>
                  <div className='work-card'>
                    <h2>Software Enginnering Intern</h2>
                    <h3>FoodClub</h3>
                    <h4>Javascript, Express.js, Node.js, Amazon DynamoDB</h4>
                    <p>Backend Maintenance</p>
                  </div>
                  <div className='work-card'>
                    <h2>Research Assistant</h2>
                    <h3>HCDE Department</h3>
                    <h4>Python, Pandas, OpenAI GPT 4.0, Google Perspective</h4>
                    <p>
                      Researched how LLM's can help highlight content
                      moderation.
                    </p>
                  </div>
                  <div className='work-card'>
                    <h2>Research Assistant</h2>
                    <h3>Code & Cognition Lab</h3>
                    <h4>Typescript, Svelte, Firebase</h4>
                    <p>
                      Worked on Amy J. Ko "WordPlay", an interactive coding
                      languages that focuse on learning.
                    </p>
                  </div>
                </div>
                <h1>Projects</h1>
                <div className='project-container'>
                  <div className='project-card'>
                    <h2>Connect 4</h2>
                    <p>
                      Two Player Online Connect 4 game with Accounts and lobby
                      chat rooms. Developed with Mern Stack and WebSockets.
                    </p>
                    <ul className='skills-list'>
                      <li>JavaScript, Node.js, Express.js, Azure, MongoDB</li>
                    </ul>
                    <img
                      src={connect4Image}
                      alt='Connect 4 project screenshot'
                      className='project-image'
                    />
                  </div>

                  <div className='project-card'>
                    <h2>Pokedex</h2>
                    <p>
                      Built an Pokedex that featured an Pokemon catalog,
                      guessing game, and item shop. Focused on Client Side
                      Development.
                    </p>
                    <ul className='skills-list'>
                      <li>React, BootStrap, Firebase</li>
                    </ul>
                    <img
                      src={pokedexImage}
                      alt='Pokedex project screenshot'
                      className='project-image'
                    />
                  </div>

                  <div className='project-card'>
                    <h2>Valorant Tournament Analysis</h2>
                    <p>
                      Built an maching learning model to predict the top
                      performing players in a Valorant Tournament.
                    </p>
                    <ul className='skills-list'>
                      <li>Python, Panda, Scikit-learn, Plotly</li>
                    </ul>
                    <img
                      src={valorantImage}
                      alt='Valorant Analysis project screenshot'
                      className='project-image'
                    />
                  </div>
                  <div className='project-card'>
                    <h2>More Coming Soon!</h2>
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
                <h3>Temporarily Disabled</h3>
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
