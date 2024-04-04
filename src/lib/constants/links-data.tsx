import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from '@tabler/icons-react';

type LinksType = {
  label: string;
  path: string;
};

type SocialsType = {
  label: string;
  path: string;
  icon: unknown;
};

export const links: LinksType[] = [
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
];

export const socials: SocialsType[] = [
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
  {
    label: 'Email',
    path: 'mailto:urquico.dev@gmail.com',
    icon: '@',
  },
];
