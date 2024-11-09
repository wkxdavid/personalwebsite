import {
  faBriefcase,
  faCode,
  faFlask,
} from '@fortawesome/free-solid-svg-icons';

export const experiences = [
  {
    icon: faBriefcase,
    title: 'Teaching Assistant',
    company: 'Information School',
    tech: 'Serverside: React, Javascript, Express.js, Node.js MongoDB, Azure',
    data: 'Data: R, Tidyverse, Shiny, testthat',
    details: [
      'INFO 441: Serverside Development',
      'INFO 201: Foundationals Skills of Data Science',
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
    company: 'FoodClub',
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
];
