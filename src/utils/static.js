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
    title: 'Teaching Assistant',
    company: 'Information School',
    tech: 'Clientside/Serverside: React, Javascript, Express.js, Node.js MongoDB, Azure',
    data: 'Data: R, Tidyverse, Shiny, testthat',
    details: [
      'INFO 441: Serverside Development',
      'INFO 201: Foundationals Skills of Data Science',
      'INFO 340: Client Side Development',
    ],
  },
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
    company: 'HCDE Department',
    tech: 'Python, Pandas, OpenAI GPT 4.0, Google Perspective',
    details: ["Researched how LLM's can help highlight content moderation."],
  },
  {
    icon: faFlask,
    title: 'Research Assistant',
    company: 'Code & Cognition Lab',
    tech: 'Typescript, Svelte, Firebase',
    details: [
      'Worked on Amy J. Ko "WordPlay", an interactive coding languages focused on learning.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Leadership',
    company: 'SWECC, Valorant @ UW ',
    // tech: 'Clientside/Serverside: React, Javascript, Express.js, Node.js MongoDB, Azure',
    // data: 'Data: R, Tidyverse, Shiny, testthat',
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
      'Two Player Online Connect 4 game with Accounts and lobby chat rooms. Developed with Mern Stack and WebSockets.',
    image: connect4Image,
    alt: 'Connect 4 project screenshot',
  },
  {
    title: 'Pokedex',
    tech: 'React, BootStrap, Firebase',
    description:
      'Built a Pokedex that featured a Pokemon catalog, guessing game, and item shop. Focused on Client Side Development.',
    image: pokedexImage,
    alt: 'Pokedex project screenshot',
  },
  {
    title: 'Valorant Tournament Analysis',
    tech: 'Python, Pandas, Scikit-learn, Plotly',
    description:
      'Built a machine learning model to predict the top performing players in a Valorant Tournament.',
    image: valorantImage,
    alt: 'Valorant Analysis project screenshot',
  },
  {
    title: 'Memory Mentor',
    tech: 'Kotlin, Firebase,  Android Studio',
    description:
      'Customizable Flashcard app for creating your own flashcards and studying.',
    image: MemoryMentor,
    alt: 'Flash Card App',
  },
  {
    title: 'Gym Data Analysis',
    tech: 'R, Tidyverse, Plotly, Shiny',
    description:
      'A Data Analysis on UC Berkeley Gym Data focusing on activity trends throughout a school year and factors affecting it.',
    image: gymData,
    alt: 'Gym Data Analysis',
  },
  {
    title: 'Gym SQL Test',
    tech: 'SQL, SQL Server Management Studio',
    description:
      'Created ER Diagrams and made SQL queries to analyze top workouts.',
    image: GymSchema,
    alt: 'Gym Data Schema',
  },
  {
    title: 'Weather Analysis',
    tech: 'JavaScript, D3.js',
    description:
      'Built an interactive D3 Visualization to evaluate how different cities compare in precipitation and Temperature throughout the year.',
    image: d3Viz,
    alt: 'Weather Visualization',
  },
];
