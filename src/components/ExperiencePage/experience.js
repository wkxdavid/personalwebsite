import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pokedexImage from '../../img/pokedex.png';
import connect4Image from '../../img/connect4.png';
import valorantImage from '../../img/valorant.png';
import GymSchema from '../../img/GymDataSchema.png';
import gymData from '../../img/GymDataMap.png';
import d3Viz from '../../img/D3Viz.png';
import { experiences } from '../../utils/static';
import './experience.css';

function ExperiencePage() {
  return (
    <div>
      <section id='projects-section' className='projects-section'>
        <h1>Projects</h1>
        <div className='project-container'>
          <div className='project-card'>
            <h2>Connect 4</h2>
            <h4>JavaScript, Node.js, Express.js, Azure, MongoDB</h4>
            <p>
              Two Player Online Connect 4 game with Accounts and lobby chat
              rooms. Developed with Mern Stack and WebSockets.
            </p>
            <img
              src={connect4Image}
              alt='Connect 4 project screenshot'
              className='project-image'
            />
          </div>

          <div className='project-card'>
            <h2>Pokedex</h2>
            <h4>React, BootStrap, Firebase</h4>
            <p>
              Built a Pokedex that featured a Pokemon catalog, guessing game,
              and item shop. Focused on Client Side Development.
            </p>
            <img
              src={pokedexImage}
              alt='Pokedex project screenshot'
              className='project-image'
            />
          </div>

          <div className='project-card'>
            <h2>Valorant Tournament Analysis</h2>
            <h4>Python, Pandas, Scikit-learn, Plotly</h4>

            <p>
              Built a machine learning model to predict the top performing
              players in a Valorant Tournament.
            </p>
            <img
              src={valorantImage}
              alt='Valorant Analysis project screenshot'
              className='project-image'
            />
          </div>

          <div className='project-card'>
            <h2>Gym Data Analysis</h2>
            <h4>R, Tidyverse, Plotly, Shiny</h4>

            <p>
              An Data Analysis on UC Berkeley Gym Data focusing on activity
              trends throughout a school year and factors affecting it.
            </p>
            <img
              src={gymData}
              alt='Gym Data Analysis'
              className='project-image'
            />
          </div>

          <div className='project-card'>
            <h2>Gym SQL Test</h2>
            <h4>SQL, SQL Server Management Studio</h4>

            <p>
              Created ER Diagrams and made SQL queries to analyze top workouts.
            </p>
            <img
              src={GymSchema}
              alt='Gym Data Schema'
              className='project-image'
            />
          </div>

          <div className='project-card'>
            <h2>Weather Analysis</h2>
            <h4>Javascript, D3.js</h4>

            <p>
              Built an interactive D3 Visualization to evaluate how different
              cities compare in perciptation and Temperature throughout the
              year.
            </p>
            <img
              src={d3Viz}
              alt='Weather Visualization'
              className='project-image'
            />
          </div>

          <div className='project-card'>
            <h2>More Coming Soon!</h2>
            <p>
              Still Building Website. Planning to have each project feature its
              own page
            </p>
          </div>
        </div>

        <h1>Experience</h1>
        <h3>
          For a more detailed description of my Experiences, please reach out or
          take a look at my resume!
        </h3>
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
      </section>
    </div>
  );
}

export default ExperiencePage;
