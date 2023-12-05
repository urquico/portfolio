import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from '@tabler/icons-react';

export const links = [
  {
    label: 'Kurt',
    path: '/me/kurt',
  },
  {
    label: 'About',
    path: '/me/about',
  },
  {
    label: 'Projects',
    path: '/me/projects',
  },
  {
    label: 'Stacks',
    path: '/me/stacks',
  },
  {
    label: 'Contact',
    path: '/me/contacts',
  },
];

export const socials = [
  {
    label: 'GitHub',
    path: 'https://github.com/urquico',
    icon: <IconBrandGithub size={14} />,
  },
  {
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/kurturquico/',
    icon: <IconBrandLinkedin size={14} />,
  },
  {
    label: 'Read.CV',
    path: 'https://read.cv/urquico',
    icon: <IconFileCv size={14} />,
  },
];
