export enum ProjectStatus{
  InProgress = 'inProgress',
  Upcoming = 'upcoming',
  Completed = 'completed',
}

export interface ProjectStat{
  inProgress: number;
  upcoming: number;
  completed: number;
  totalProjects: number;
}

export interface Project{
  id: number;
  title: string;
  description: string;
  status: ProjectStatus;
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface Stat{
  label: string;
  value: number;
  icon?: string;
}