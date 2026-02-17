export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  details: string[];
  tech?: string;
}

export const workExperience = [
  {
    title: 'Software Engineer',
    company: 'HP Inc.',
    location: 'Seattle, WA',
    date: 'September 2025 - Present',
    tech: 'Golang, React, TypeScript, MongoDB, AWS, Docker, RabbitMQ',
    details: [
      'Working under HP Software Solutions on the HP Workforce Experience Platform.',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'UW Information School',
    location: 'Seattle, WA',
    date: 'September 2023 - June 2025',
    tech: 'React, JavaScript, Express.js, Node.js, MongoDB, Azure, R',
    details: [
      'Supported and led instruction for INFO 201, INFO 340, and INFO 441, covering topics in full-stack web development and data science, while mentoring students on projects and coding best practices.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'HP Inc.',
    location: 'Boise, ID',
    date: 'May 2024 - August 2024',
    tech: 'React, TypeScript, Java, AWS, Selenium, Jest, Enzyme',
    details: [
      'Developed React components for the HP Workforce Experience Platform and built a migration tool using Java to support enterprise customer onboarding.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'FoodCLUB',
    location: 'Remote',
    date: 'January 2024 - May 2024',
    tech: 'JavaScript, Express.js, Node.js, Amazon DynamoDB',
    details: [
      'Student start up experience building backend REST APIs endpoints for recipe information.',
    ],
  },
  {
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

export const aboutContent = {
  greeting: 'Hello!',
  intro:
        "I studied Informatics at the University of Washington primarily focusing on Software Engineering. Currently a full-stack SWE @ HP working on enterprise solutions.",
  activeSkills: [
    'Golang',
    'Typescript',
    'React',
    'AWS',
    'MongoDB',
    'RabbitMQ',
  ],
};

