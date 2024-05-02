import { ProjectData } from '../types';
import {
  AUTH_JS,
  ELECTRON,
  EMAIL_JS,
  EXPRESS,
  FIREBASE,
  LARAVEL,
  LEAFLET_API,
  MANTINE_UI,
  MARIA_DB,
  MS_AZURE,
  MYSQL,
  NEXT_JS,
  NODE_JS,
  PRISMA_ORM,
  REACT,
  SHADCN,
  TAILWIND,
  TYPESCRIPT,
  VITE_JS,
} from './stack-data';

export const projectData: ProjectData[] = [
  {
    title: 'OMMS-Next',
    date: '2024',
    client: 'One Man Merchandising',
    description: ['A Web-Based Application for One Man Merchandising'],
    isInProgress: false,
    associatedExperience: 'Freelance',
    role: 'Full-Stack Developer',
    stacks: [NEXT_JS, REACT, MANTINE_UI, TAILWIND, PRISMA_ORM, AUTH_JS, MYSQL],
    images: [
      '/projects/omms-1.png',
      '/projects/omms-2.png',
      '/projects/omms-3.png',
      '/projects/omms-4.png',
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
    githubLink: 'https://github.com/urquico/mapa',
    stacks: [REACT, VITE_JS, LEAFLET_API, MANTINE_UI],
    images: ['/projects/maps.png'],
  },
  {
    title: 'InternConnect: ORASAN',
    date: '2023',
    client: 'Gothong Southern Shipping Lines Inc.',
    description: ['A Web-Based OJT-Monitoring System for GSSLI'],
    isInProgress: false,
    associatedExperience: 'Internship at GSSLI',
    role: 'Lead Programmer',
    githubLink: 'https://github.com/urquico/orasan-admin-client',
    stacks: [REACT, VITE_JS, MANTINE_UI, NODE_JS, EXPRESS, MYSQL],
    images: ['/projects/orasan-1.png', '/projects/orasan-2.png'],
  },
  {
    title: 'HealthVault',
    date: '2023',
    client: 'Gothong Southern Shipping Lines Inc.',
    description: ['A Web-Based Health Information Management System for GSSLI'],
    isInProgress: false,
    associatedExperience: 'Internship at GSSLI',
    role: 'Lead Programmer',
    githubLink: 'https://github.com/urquico/HealthVault-CLIENT',
    stacks: [
      ELECTRON,
      TYPESCRIPT,
      REACT,
      VITE_JS,
      MANTINE_UI,
      NODE_JS,
      EXPRESS,
      MYSQL,
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
      NEXT_JS,
      REACT,
      MANTINE_UI,
      TAILWIND,
      SHADCN,
      LARAVEL,
      MARIA_DB,
      MS_AZURE,
    ],
    previewLink: 'https://plm-crs.vercel.app/login',
    images: [
      '/projects/crs-1.png',
      '/projects/crs-2.png',
      '/projects/crs-3.png',
    ],
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
    stacks: [FIREBASE, EXPRESS, REACT, NODE_JS, MANTINE_UI, EMAIL_JS],
    githubLink: 'https://github.com/urquico/grievance-forum',
    previewLink: 'https://haribon-e-wall.web.app/',
    images: [
      '/projects/haribon-1.png',
      '/projects/haribon-2.png',
      '/projects/haribon-3.png',
    ],
  },
];
