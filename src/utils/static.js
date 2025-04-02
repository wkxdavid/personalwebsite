import { faBriefcase, faFlask } from '@fortawesome/free-solid-svg-icons';
import {
  pokedexImage,
  connect4Image,
  valorantImage,
  GymSchema,
  gymData,
  d3Viz,
  MemoryMentor,
} from '../img';

export const workExperience = [
  {
    icon: faBriefcase,
    title: 'Software Engineering Intern',
    company: 'HP Inc.',
    location: 'Boise, ID',
    date: 'May 2024 - August 2024',
    tech: 'React, TypeScript, Java, Selenium, AWS, Jest, Enzyme',
    details: [
      'Worked on the Control Portal team within the HP Workforce Experience Platform, developing React components, automating tests with Selenium, and enhancing backend functionality in Java.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Software Engineering Intern',
    company: 'FoodCLUB',
    location: 'Remote',
    date: 'January 2024 - May 2024',
    tech: 'JavaScript, Express.js, Node.js, Amazon DynamoDB',
    details: [
      'Developed and maintained backend API endpoints using Express.js and integrated Amazon DynamoDB for efficient data storage.',
    ],
  },
  {
    icon: faFlask,
    title: 'Research Assistant',
    company: 'Human Centered Design and Engineering Department',
    location: 'Seattle, WA',
    date: 'September 2023 - December 2023',
    tech: 'Python, Pandas, OpenAI GPT 4.0, Google Perspective',
    details: [
      'Researched how LLMs and Generative AI improve content moderation in social media and gaming chatrooms using OpenAI GPT-4 and Google Perspective API.',
    ],
  },
  {
    icon: faFlask,
    title: 'Research Assistant',
    company: 'Code & Cognition Lab',
    location: 'Seattle, WA',
    date: 'June 2023 - September 2023',
    tech: 'TypeScript, Svelte, Firebase',
    details: [
      'Developed interactive front-end components for WordPlay, an educational coding language, using TypeScript, Svelte, and Firebase.',
    ],
  },
];

export const extracurricular = [
  {
    icon: faBriefcase,
    title: 'Teaching Assistant',
    company: 'UW Information School',
    location: 'Seattle, WA',
    date: 'September 2023 - Present',
    tech: 'React, JavaScript, Express.js, Node.js, MongoDB, Azure, R, Tidyverse, Shiny, testthat',
    details: [
      'Taught server-side and client-side development as well as data science concepts across multiple courses, including INFO 441, INFO 201, and INFO 340.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Study Abroad',
    company: 'Sungkyunkwan University',
    location: 'Seoul, South Korea',
    date: 'September 2024',
    details: [
      'Did an one month study abroad with SKKU students where we worked towards learning about Information, Technology, and Culture in Modern South Korea.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'President',
    company: 'Valorant @ UW',
    location: 'University of Washington',
    date: 'September 2021 - Present',
    details: [
      'Led tournaments and community events around Valorant for 100+ people.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Mentorship Program Manager',
    company: 'Software Enginnering Career Club (SWECC)',
    location: 'University of Washington',
    date: 'June 2022 - Present',
    details: [
      'Led the foundation for the Student Mentorship Program (SMP) to help connect students pursing SWE around campus.',
    ],
  },
];

export const projects = [
  {
    title: 'Connect 4',
    tech: 'JavaScript, Node.js, Express.js, Azure, MongoDB',
    description:
      'Developed a two-player online Connect 4 game with user accounts, lobby chat rooms, and real-time gameplay using the MERN stack and WebSockets.',
    image: connect4Image,
    alt: 'Connect 4 project screenshot',
  },
  {
    title: 'Pokedex',
    tech: 'React, BootStrap, Firebase',
    description:
      'Built a Pokédex featuring a Pokémon catalog, guessing game, and item shop with Firebase authentication and database integration.',
    image: pokedexImage,
    alt: 'Pokedex project screenshot',
  },
  {
    title: 'Valorant Tournament Analysis',
    tech: 'Python, Pandas, Scikit-learn, Plotly',
    description:
      'Developed a machine learning model to predict top-performing players in Valorant tournaments and visualized insights using Plotly.',
    image: valorantImage,
    alt: 'Valorant Analysis project screenshot',
  },
  {
    title: 'Memory Mentor',
    tech: 'Kotlin, Firebase, Android Studio',
    description:
      'Created a customizable flashcard mobile app with Firebase authentication and study reminders using calendar alerts.',
    image: MemoryMentor,
    alt: 'Flash Card App',
  },
  {
    title: 'Gym Data Analysis',
    tech: 'R, Tidyverse, Plotly, Shiny',
    description:
      'Analyzed UC Berkeley gym activity trends using R and visualized patterns with ggplot2 and Plotly. Deployed via Shiny.',
    image: gymData,
    alt: 'Gym Data Analysis',
  },
  {
    title: 'Workout Database Searcher',
    tech: 'SQL, SQL Server Management Studio',
    description:
      'Designed an SQL database to recommend workouts based on muscle groups, created ER diagrams, and optimized queries for analysis.',
    image: GymSchema,
    alt: 'Gym Data Schema',
  },
  {
    title: 'Weather Analysis',
    tech: 'JavaScript, D3.js',
    description:
      'Built an interactive D3.js visualization to compare precipitation and temperature trends across various cities throughout the year.',
    image: d3Viz,
    alt: 'Weather Data Visualization',
  },
];

export const aboutContent = {
  greeting: 'Hello!',
  intro:
    "I'm David and I am studying Informatics with a focus in Software Engineering at the University of Washington. Passionate about solving interesting problems and building connections wherever I go.",
  research:
    'While at school, I have been able to do both research for the Code and Cognition Lab where I worked on Wordplay and the HCDE Department where I research content moderation using LLMs. Along with that, I have been a teaching assistant for many core software development courses in the iSchool that involve skills with frontend and backend web development. I have also had the privilege to do internships with HP Inc. and FoodCLUB.',
  leadership:
    'Outside of academics, I have spent a lot of time taking leadership positions in different clubs. I serve as the President for Valorant @ UW and Mentorship Program Manager for the Software Engineering Career Club. As graduation approaches, I’m looking forward to what’s next.',
};
