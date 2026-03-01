import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  name: string;
  status: string;
  description: string;
  img?: string;
  techStack: string[];
  highlights?: string[];
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors bg-background/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
        {/* Image Space */}
        <div className="relative w-full md:w-2/5 aspect-video bg-muted/10 rounded-xl border border-border flex items-center justify-center overflow-hidden flex-shrink-0">
          {project.img ? (
            <Image
              src={project.img}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="text-muted">Project Images</span>
          )}
        </div>

        <div className="flex flex-col gap-8 flex-1 w-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold">{project.name}</h2>
              <span
                className={`px-2 py-0.5 text-xs rounded-full border ${
                  project.status === "done"
                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                    : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-foreground text-lg">{project.description}</p>

            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="list-disc list-inside text-sm text-muted space-y-1 pt-2">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex-shrink-0">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                view project ↗
              </Link>
            ) : (
              <span className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-dashed border-muted/30 bg-muted/5 text-muted cursor-not-allowed select-none font-medium">
                coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
