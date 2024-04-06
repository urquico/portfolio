export type ExperienceData = {
  title: string;
  date: string;
  location: string;
  description: string[];
  active: boolean;
  projects: string[];
};

export const experienceData: ExperienceData[] = [
  {
    title: 'Freelance Full-Stack Web Developer',
    date: '2022 - Now',
    location: 'Manila',
    description: ['Developed and deployed systems for clients.'],
    active: true,
    projects: ['OMMS-Next'],
  },
  {
    title:
      'Web Developer Intern at Gothong Southern Shipping Lines Inc. (GSSLI)',
    date: '2023 - 2023',
    location: 'Manila',
    description: [
      'A 240-hour practicum in Gothong Southern Shipping Lines Inc. - Manila, Philippines',
      'Developed and Deployed three functional systems, each contributing to enhanced operational efficiency and streamlined processes.',
      'Collaborated with cross-functional teams to ensure seamless integration and user-friendly interfaces.',
      'Utilized advanced technologies and best practices to create innovative solutions that addressed specific needs.',
    ],
    active: false,
    projects: ['MAPS', 'ORASAN', 'HealthVault'],
  },
  {
    title: 'IT Support Intern at DTI - CITEM Philippines',
    date: '2019 - 2019',
    location: 'Pasay, Metro Manila',
    description: [
      'An 80-hour work immersion in Department of Trade and Industries - CITEM Philippines',
      'Assisted and Provided solutions to multiple technology-related issues in a timely and effective manner, and worked to minimize downtime and disruptions for end-users',
    ],
    active: false,
    projects: [],
  },
];
