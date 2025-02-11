import { faBriefcase, faFlask } from '@fortawesome/free-solid-svg-icons';
import pokedexImage from '../img/pokedex.png';
import connect4Image from '../img/connect4.png';
import valorantImage from '../img/valorant.png';
import GymSchema from '../img/GymDataSchema.png';
import gymData from '../img/GymDataMap.png';
import d3Viz from '../img/D3Viz.png';
import MemoryMentor from '../img/MemoryMentor.PNG';

export const workExperience = [
  {
    icon: faBriefcase,
    title: 'Software Engineering Intern',
    company: 'HP Inc.',
    tech: 'React, Typescript, Java, Selenium, AWS, Jest, Enzyme',
    details: ['HP Workforce Experience Platform'],
  },
  {
    icon: faBriefcase,
    title: 'Software Engineering Intern',
    company: 'FoodCLUB',
    tech: 'Javascript, Express.js, Node.js, Amazon DynamoDB',
    details: ['Backend Maintenance'],
  },
  {
    icon: faFlask,
    title: 'Research Assistant',
    company: 'Human Centered Design and Engineering Department',
    tech: 'Python, Pandas, OpenAI GPT 4.0, Google Perspective',
    details: [
      "Researched how LLM's and Generative AI can help improve content moderation. Specfically focused on social media and video game chat rooms.",
    ],
  },
  {
    icon: faFlask,
    title: 'Research Assistant',
    company: 'Code & Cognition Lab',
    tech: 'Typescript, Svelte, Firebase',
    details: [
      'Worked as an Front-end developer on Amy J. Ko "WordPlay", an interactive coding languages focused on learning.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Teaching Assistant',
    company: 'Information School',
    tech: 'Frontend/Backend Development: React, Javascript, Express.js, Node.js MongoDB, Azure --- Data Science: R, Tidyverse, Shiny, testthat',

    details: [
      ' One of my favorite things to do is help other people learn coding! The classes listed below are the ones that I had the privilege to teach:',
      'INFO 441: Serverside Development',
      'INFO 201: Foundationals Skills of Data Science',
      'INFO 340: Client Side Development',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Leadership',
    company: 'SWECC, Valorant @ UW ',
    details: [
      'Mentorship Program Manager @ SWECC',
      'President of Valorant @ UW',
    ],
  },
];

export const projects = [
  {
    title: 'Connect 4',
    tech: 'JavaScript, Node.js, Express.js, Azure, MongoDB',
    description:
      'Two Player Online Connect 4 game with accounts and lobby chat rooms. Developed with Mern Stack and WebSockets.',
    image: connect4Image,
    alt: 'Connect 4 project screenshot',
  },
  {
    title: 'Pokedex',
    tech: 'React, BootStrap, Firebase',
    description:
      'Built a Pokedex that featured a Pokemon catalog, guessing game, and item shop. Integrated Firebase authenication and database.',
    image: pokedexImage,
    alt: 'Pokedex project screenshot',
  },
  {
    title: 'Valorant Tournament Analysis',
    tech: 'Python, Pandas, Scikit-learn, Plotly',
    description:
      'A machine learning model to predict the top performing players in a Valorant Tournament. Displayed model results via Plotly Visualizations.',
    image: valorantImage,
    alt: 'Valorant Analysis project screenshot',
  },
  {
    title: 'Memory Mentor',
    tech: 'Kotlin, Firebase,  Android Studio',
    description:
      'Customizable Flashcard mobile app for creating your own flashcards and study set. Built in calender alerts to notify study times.',
    image: MemoryMentor,
    alt: 'Flash Card App',
  },
  {
    title: 'Gym Data Analysis',
    tech: 'R, Tidyverse, Plotly, Shiny',
    description:
      'A data analysis on UC Berkeley Gym Data focusing on activity trends throughout a school year and factors affecting it.',
    image: gymData,
    alt: 'Gym Data Analysis',
  },
  {
    title: 'Workout Database Searcher',
    tech: 'SQL, SQL Server Management Studio',
    description:
      'SQL Database design focused on finding optimal workouts based on muscle group. Created ER Diagrams and made SQL queries to analyze workouts.',
    image: GymSchema,
    alt: 'Gym Data Schema',
  },
  {
    title: 'Weather Analysis',
    tech: 'JavaScript, D3.js',
    description:
      'Built an interactive D3 Visualization to evaluate how different cities compare in precipitation and Temperature throughout the year.',
    image: d3Viz,
    alt: 'Weather Data Visualization',
  },
];
