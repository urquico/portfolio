import { ReactNode } from 'react';

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
  date: string;
};

export type ExperienceData = {
  title: string;
  date: string;
  location: string;
  description: string[];
  active: boolean;
  projects: string[];
};

export type StackData = {
  label: string;
  src: string;
};

export type LinksType = {
  label: string;
  path: string;
};

export type SocialsType = {
  label: string;
  path: string;
  icon: ReactNode;
};

export type MaintenanceMessage = {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
};

export type ProjectData = {
  title: string;
  date: string;
  client: string;
  description: string[];
  isInProgress: boolean;
  associatedExperience: string;
  role: string;
  stacks?: StackData[];
  githubLink?: string;
  previewLink?: string;
  images?: string[];
};
