import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pokedexImage from '../img/pokedex.png';
import connect4Image from '../img/connect4.png';
import valorantImage from '../img/valorant.png';
import { experiences } from '../utils/static';

function ExperiencePage() {
  return (
    <div>
      <section id='projects-section' className='projects-section'>
        <h1>Experience</h1>
        <div className='work-container'>
          {experiences.map((exp, index) => (
            <div key={index} className='work-card'>
              <div className='icon'>
                <FontAwesomeIcon icon={exp.icon} />
              </div>
              <div className='content'>
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <h4>{exp.tech}</h4>
                {exp.data && <h4>{exp.data}</h4>}
                {exp.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h1>Projects</h1>
        <div className='project-container'>
          <div className='project-card'>
            <h2>Connect 4</h2>
            <p>
              Two Player Online Connect 4 game with Accounts and lobby chat
              rooms. Developed with Mern Stack and WebSockets.
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
              Built a Pokedex that featured a Pokemon catalog, guessing game,
              and item shop. Focused on Client Side Development.
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
              Built a machine learning model to predict the top performing
              players in a Valorant Tournament.
            </p>
            <ul className='skills-list'>
              <li>Python, Pandas, Scikit-learn, Plotly</li>
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
    </div>
  );
}

export default ExperiencePage;
