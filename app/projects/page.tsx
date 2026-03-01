import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="container py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="mb-6">Projects</h1>
        <p className="text-xl text-foreground">
          Published Projects. Real systems, shipped.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}