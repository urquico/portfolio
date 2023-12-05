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
  { label: 'GitHub', path: '/', icon: <IconBrandGithub size={14} /> },
  { label: 'LinkedIn', path: '/', icon: <IconBrandLinkedin size={14} /> },
  { label: 'Read.CV', path: '/', icon: <IconFileCv size={14} /> },
];
