export interface Project {
  _id: string;
  title: string;
  techStack: string[];
  keyFeatures: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}
