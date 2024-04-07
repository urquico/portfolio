export type ProjectData = {
  title: string;
  date: string;
  client: string;
  description: string[];
  isInProgress: boolean;
  associatedExperience: string;
  role: string;
  stacks: {
    label: string;
    src: string;
  }[];
  githubLink?: string;
  previewLink?: string;
};

export const projectData: ProjectData[] = [
  {
    title: 'OMMS-Next',
    date: 'Ongoing',
    client: 'One Man Merchandising',
    description: ['A Web-Based Application for One Man Merchandising'],
    isInProgress: true,
    associatedExperience: 'Freelance',
    role: 'Full-Stack Developer',
    stacks: [
      {
        label: 'Next JS',
        src: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
      },
      {
        label: 'React',
        src: 'https://cdn.svgporn.com/logos/react.svg',
      },
      {
        label: 'Mantine UI',
        src: 'https://cdn.svgporn.com/logos/mantine-icon.svg',
      },
      {
        label: 'Tailwind CSS',
        src: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
      },
      {
        label: 'Prisma ORM',
        src: 'https://cdn.svgporn.com/logos/prisma.svg',
      },
      {
        label: 'Auth JS',
        src: 'https://authjs.dev/img/logo/logo-sm.webp',
      },
      {
        label: 'MySQL',
        src: 'https://cdn.svgporn.com/logos/mysql-icon.svg',
      },
    ],
  },
  {
    title: 'MAPS',
    date: '2023',
    client: 'Gothong Southern Shipping Lines Inc.',
    description: ['A Web-Based Map and Proximity System for GSSLI'],
    isInProgress: false,
    associatedExperience: 'Internship at GSSLI',
    role: 'Lead Programmer',
    stacks: [
      {
        label: 'React',
        src: 'https://cdn.svgporn.com/logos/react.svg',
      },
      {
        label: 'Vite JS',
        src: 'https://cdn.svgporn.com/logos/vitejs.svg',
      },
      {
        label: 'Leaflet API',
        src: 'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-q.cdn.bubble.io%2Ff1628613062972x583148037293412100%2F8y-GChEY.jpg?w=&h=&auto=compress&dpr=1&fit=max',
      },
      {
        label: 'Mantine UI',
        src: 'https://cdn.svgporn.com/logos/mantine-icon.svg',
      },
    ],
  },
  {
    title: 'InternConnect: ORASAN',
    date: '2023',
    client: 'Gothong Southern Shipping Lines Inc.',
    description: ['A Web-Based OJT-Monitoring System for GSSLI'],
    isInProgress: false,
    associatedExperience: 'Internship at GSSLI',
    role: 'Lead Programmer',
    stacks: [
      {
        label: 'React',
        src: 'https://cdn.svgporn.com/logos/react.svg',
      },
      {
        label: 'Vite JS',
        src: 'https://cdn.svgporn.com/logos/vitejs.svg',
      },
      {
        label: 'Mantine UI',
        src: 'https://cdn.svgporn.com/logos/mantine-icon.svg',
      },
      {
        label: 'Node JS',
        src: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
      },
      {
        label: 'Express JS',
        src: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
      },
      {
        label: 'MySQL',
        src: 'https://cdn.svgporn.com/logos/mysql-icon.svg',
      },
    ],
  },
  {
    title: 'HealthVault',
    date: '2023',
    client: 'Gothong Southern Shipping Lines Inc.',
    description: ['A Web-Based Health Information Management System for GSSLI'],
    isInProgress: false,
    associatedExperience: 'Internship at GSSLI',
    role: 'Lead Programmer',
    stacks: [
      {
        label: 'Electron',
        src: 'https://cdn.svgporn.com/logos/electron.svg',
      },
      {
        label: 'Typescript',
        src: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
      },
      {
        label: 'React',
        src: 'https://cdn.svgporn.com/logos/react.svg',
      },
      {
        label: 'Vite JS',
        src: 'https://cdn.svgporn.com/logos/vitejs.svg',
      },
      {
        label: 'Mantine UI',
        src: 'https://cdn.svgporn.com/logos/mantine-icon.svg',
      },
      {
        label: 'Node JS',
        src: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
      },
      {
        label: 'Express JS',
        src: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
      },
      {
        label: 'MySQL',
        src: 'https://cdn.svgporn.com/logos/mysql-icon.svg',
      },
    ],
  },
];
export const sideProjectData: ProjectData[] = [
  // {
  //   title: 'Unreels & Longs',
  //   date: 'Ongoing',
  //   client: 'N/A',
  //   description: [
  //     'A Web extension that blocks Youtube Shorts and Facebook Reels',
  //   ],
  //   isInProgress: true,
  //   associatedExperience: 'Personal Project',
  //   role: '',
  //   stacks: [
  //     {
  //       label: 'Chrome Web Extension',
  //       src: 'https://cdn.svgporn.com/logos/chrome-web-store.svg',
  //     },
  //     {
  //       label: 'WXT',
  //       src: 'https://wxt.dev/hero-logo.svg',
  //     },
  //     {
  //       label: 'React',
  //       src: 'https://cdn.svgporn.com/logos/react.svg',
  //     },
  //     {
  //       label: 'Mantine UI',
  //       src: 'https://cdn.svgporn.com/logos/mantine-icon.svg',
  //     },
  //     {
  //       label: 'Typescript',
  //       src: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
  //     },
  //   ],
  //   githubLink: 'https://github.com/urquico/unreels-longs',
  // },
  // {
  //   title: 'Elgemo',
  //   date: 'Ongoing',
  //   client: 'N/A',
  //   description: ['An Omegle Alternative'],
  //   isInProgress: true,
  //   associatedExperience: 'Circle Dev',
  //   role: 'Lead Front-End Developer',
  //   stacks: [
  //     {
  //       label: 'Next JS',
  //       src: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
  //     },
  //     {
  //       label: 'React',
  //       src: 'https://cdn.svgporn.com/logos/react.svg',
  //     },
  //     {
  //       label: 'Mantine UI',
  //       src: 'https://cdn.svgporn.com/logos/mantine-icon.svg',
  //     },
  //     {
  //       label: 'Tailwind CSS',
  //       src: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
  //     },
  //     {
  //       label: 'shadcn/ui',
  //       src: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
  //     },
  //     {
  //       label: 'Web Socket',
  //       src: 'https://cdn.svgporn.com/logos/websocket.svg',
  //     },
  //   ],
  // },
  {
    title:
      'PLM Computerized Registration System (CRS) at Pamantasan ng Lungsod ng Maynila',
    date: '2024',
    client: 'Pamantasan ng Lungsod ng Maynila',
    description: ['A Web-Based CRS project for CSE 2 Web Development'],
    isInProgress: false,
    associatedExperience: 'School Project',
    role: 'Full-Stack Developer',
    stacks: [
      {
        label: 'Next JS',
        src: 'https://cdn.svgporn.com/logos/nextjs-icon.svg',
      },
      {
        label: 'React',
        src: 'https://cdn.svgporn.com/logos/react.svg',
      },
      {
        label: 'Mantine UI',
        src: 'https://cdn.svgporn.com/logos/mantine-icon.svg',
      },
      {
        label: 'Tailwind CSS',
        src: 'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
      },
      {
        label: 'shadcn/ui',
        src: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4',
      },
      {
        label: 'Laravel API',
        src: 'https://cdn.svgporn.com/logos/laravel.svg',
      },
      {
        label: 'MariaDB',
        src: 'https://cdn.svgporn.com/logos/mariadb-icon.svg',
      },
      {
        label: 'Microsoft Azure',
        src: 'https://cdn.svgporn.com/logos/microsoft-azure.svg',
      },
    ],
    previewLink: 'https://plm-crs.vercel.app/login',
  },

  {
    title: 'Haribon E-Wall at Pamantasan ng Lungsod ng Maynila',
    date: '2023',
    client: 'Pamantasan ng Lungsod ng Maynila',
    description: [
      'A Web-Based Grievance Forum for SSC STRAW Grievance Committee',
    ],
    isInProgress: false,
    associatedExperience: 'School Project',
    role: 'Lead Programmer | UI/UX Lead',
    stacks: [
      {
        label: 'Firebase',
        src: 'https://cdn.svgporn.com/logos/firebase.svg',
      },
      {
        label: 'Express JS',
        src: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
      },
      {
        label: 'React',
        src: 'https://cdn.svgporn.com/logos/react.svg',
      },
      {
        label: 'Node JS',
        src: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
      },
      {
        label: 'Mantine UI',
        src: 'https://cdn.svgporn.com/logos/mantine-icon.svg',
      },
      {
        label: 'Email JS',
        src: 'https://img.stackshare.io/service/6209/default_082f0619f4d49a25f75896e370cc67c9a3f0a4fe.jpg',
      },
    ],
    githubLink: 'https://github.com/urquico/grievance-forum',
    previewLink: 'https://haribon-e-wall.web.app/',
  },
];
