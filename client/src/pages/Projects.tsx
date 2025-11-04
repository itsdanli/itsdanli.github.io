import { ProjectCard } from "@/components/ProjectCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main id="main-content" className="flex-1">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <AnimatedSection>
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-projects-heading">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose leading-relaxed">
              A collection of projects I've built and contributed to. Each project represents
              a unique challenge and learning opportunity.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
