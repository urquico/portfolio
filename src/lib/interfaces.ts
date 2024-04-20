import React from 'react';

import { ExperienceData, ProjectData } from './types';

export interface NameDisplayProps {
  text: string[];
}

export interface CustomButtonProps {
  icon: React.ReactNode;
  path: string;
  label: string;
  className?: string;
  size?: string;
}

export interface TimelineType {
  experienceData?: ExperienceData[];
  projectData?: ProjectData[];
}

export interface MaintenanceProps {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface StackProps {
  src: string;
  label: string;
}

export interface TabsProps {
  tabList: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }[];
  verticalAlign?: boolean;
  className?: string;
  parentPath: string;
  children: React.ReactNode;
}
