import type { Project } from "@shared/schema";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A modern, performant personal website built with React and TypeScript. Features a blog system with markdown support, project showcase, and optimized for Lighthouse scores.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/itsdanli/itsdanli.github.io",
    demoUrl: "https://itsdanli.github.io",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace features.",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    githubUrl: "https://github.com/itsdanli",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "An elegant weather dashboard that displays current conditions, forecasts, and historical data with beautiful visualizations.",
    techStack: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    githubUrl: "https://github.com/itsdanli",
    demoUrl: "https://example.com",
    featured: false,
  },
];
