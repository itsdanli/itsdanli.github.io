import { ProjectCard } from '../ProjectCard';
import type { Project } from '@shared/schema';

export default function ProjectCardExample() {
  const project: Project = {
    id: "1",
    title: "Portfolio Website",
    description: "A modern, performant personal website built with React and TypeScript. Features a blog system with markdown support, project showcase, and optimized for Lighthouse scores.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/itsdanli/itsdanli.github.io",
    demoUrl: "https://itsdanli.github.io",
    featured: true,
  };

  return (
    <div className="p-4 max-w-sm">
      <ProjectCard project={project} />
    </div>
  );
}
