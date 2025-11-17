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

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  details: string[];
  tech?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tech?: string;
  image?: string;
  alt?: string;
  link?: string;

}

export const workExperience = [
      {
    icon: faBriefcase,
    title: 'Software Engineer',
    company: 'HP Inc.',
    location: 'Seattle, WA',
    date: 'September 2025 - Present',
    tech: 'Golang, AWS, React, Typescript, Docker, RabbitMQ',
    details: [
      'Working on the Enterprise Solutions team.',
    ],
  },
    {
    icon: faBriefcase,
    title: 'Teaching Assistant',
    company: 'UW Information School',
    location: 'Seattle, WA',
    date: 'September 2023 - June 2025',
    tech: 'React, JavaScript, Express.js, Node.js, MongoDB, Azure, R, Tidyverse, Shiny, testthat',
    details: [
      'Supported and led instruction for INFO 201, INFO 340, and INFO 441, covering topics in full-stack web development and data science, while mentoring students on projects and coding best practices.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Software Engineering Intern',
    company: 'HP Inc.',
    location: 'Boise, ID',
    date: 'May 2024 - August 2024',
    tech: 'React, TypeScript, Java, Selenium, AWS, Jest, Enzyme',
    details: [
      'Developed React components for the HP Workforce Experience Platform and enhanced backend APIs using Java to streamline enterprise workflows.',
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
      'Built and maintained scalable RESTful API endpoints using Express.js and integrated Amazon DynamoDB for optimized data access and low-latency performance.',
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
      'Conducted research on improving content moderation through LLMs by analyzing toxicity in gaming chatrooms using OpenAI GPT-4 and Google Perspective API.',
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
      'Designed and implemented interactive front-end modules for WordPlay, an educational coding tool, using Svelte, TypeScript, and Firebase to enhance user learning experiences.',
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
      'Supported and led instruction for INFO 201, INFO 340, and INFO 441, covering topics in full-stack web development and data science, while mentoring students on projects and coding best practices.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Study Abroad',
    company: 'Sungkyunkwan University',
    location: 'Seoul, South Korea',
    date: 'September 2024',
    details: [
      'Participated in a month-long academic exchange focused on the intersection of technology, culture, and society in South Korea, collaborating with local SKKU students.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'President',
    company: 'Valorant @ UW',
    location: 'University of Washington',
    date: 'September 2021 - Present',
    details: [
      'Organized tournaments and community events for 100+ members, fostering competitive play and inclusive culture in the university’s largest gaming club.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Mentorship Program Manager',
    company: 'Software Engineering Career Club (SWECC)',
    location: 'University of Washington',
    date: 'June 2022 - Present',
    details: [
      'Scaled the Student Mentorship Program (SMP), matching aspiring SWE students with mentors and increasing club engagement and retention.',
    ],
  },
  {
    icon: faBriefcase,
    title: 'Volunteer',
    company: 'MathCounts',
    location: 'Washington',
    date: 'June 2022 - Present',
    details: [
      'Served as a grader and proctor for annual MathCounts competitions, supporting local STEM education and middle school math.',
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
  }
  // {
  //   title: 'Workout Database Searcher',
  //   tech: 'SQL, SQL Server Management Studio',
  //   description:
  //     'Designed an SQL database to recommend workouts based on muscle groups, created ER diagrams, and optimized queries for analysis.',
  //   image: GymSchema,
  //   alt: 'Gym Data Schema',
  // },
  // {
  //   title: 'Weather Analysis',
  //   tech: 'JavaScript, D3.js',
  //   description:
  //     'Built an interactive D3.js visualization to compare precipitation and temperature trends across various cities throughout the year.',
  //   image: d3Viz,
  //   alt: 'Weather Data Visualization',
  // },
];

export const aboutContent = {
  greeting: 'Hello!',
  intro:
    "I recently graduated from the University of Washington with a Bachelor of Science in Informatics, focusing on Software Engineering. Currently working as a SWE @ HP working on enterprise solutions. ",
  activeSkills: [
    'Golang',
    'AWS',
    'TypeScript',
    'React',
    'Docker',
    'CI/CD',
  ],
};

