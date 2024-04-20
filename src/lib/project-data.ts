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