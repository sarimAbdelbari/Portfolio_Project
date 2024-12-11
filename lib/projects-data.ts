import { promises as fs } from 'fs';
import path from 'path';

export interface Project {
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  features: string[];
  role: string;
  duration: string;
  company: string;
}

export interface ProjectsData {
  projects: Project[];
}

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: ProjectsData = JSON.parse(fileContents);
  return data.projects;
}