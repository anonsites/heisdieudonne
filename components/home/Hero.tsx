import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { name, tagline, status, currentFocus, wrappedStats } = profile;
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="container py-24">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        {/* Image */}
        <div className="flex-shrink-0">
          <Image
            src={profile.profilePicture}
            alt="Profile Picture"
            width={228}
            height={228}
            className="w-48 h-48 md:w-52 md:h-52 shadow-md object-cover border-4 border-gray-800 rounded-3xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-6">{name}</h1>

          <p className="text-lg md:text-xl text-foreground mb-6">{tagline}</p>

          {/* Status badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:justify-start">
            {status.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm rounded-full border border-green-500/20 bg-green-500/10 text-green-400 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Wrapped stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 backdrop-blur p-6 text-center hover:bg-green-500/10 transition-colors">
          <h2 className="text-sm text-foreground mb-2">Fields Explored</h2>
          <p className="text-3xl font-bold text-white">
            {wrappedStats.fieldsExplored}+
          </p>
        </div>

        <div className="rounded-xl border border-green-500/20 bg-green-500/5 backdrop-blur p-6 text-center hover:bg-green-500/10 transition-colors">
          <h2 className="text-sm text-foreground mb-2">Tools Used</h2>
          <p className="text-3xl font-bold text-white">
            {wrappedStats.toolsUsed}+
          </p>
        </div>

        <div className="rounded-xl border border-green-500/20 bg-green-500/5 backdrop-blur p-6 text-center hover:bg-green-500/10 transition-colors">
          <h2 className="text-sm text-foreground mb-2">Projects Shipped</h2>
          <p className="text-3xl font-bold text-white">
            {wrappedStats.projectsShipped}
          </p>
        </div>

        <div className="rounded-xl border border-green-500/20 bg-green-500/5 backdrop-blur p-6 text-center hover:bg-green-500/10 transition-colors">
          <h2 className="text-sm text-foreground mb-2">Age</h2>
          <p className="text-3xl font-bold text-white">
            {wrappedStats.birthDate} 
          </p>
        </div>
      </div>

      {/* Focus areas */}
      <div className="mt-20 max-w-2xl">
        <h2 className="mb-6">Current Focus</h2>

        <ul className="space-y-3">
          {currentFocus.map((focus) => (
            <li
              key={focus}
              className="flex items-center gap-3 text-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              {focus}
            </li>
          ))}
        </ul>
        <p className="text-lg md:text-xl text-foreground mb-5 mt-8">
          Always exploring what&apos;s new in technology — What technology can&apos;t do doesn&apos;t exist.
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mt-24">
          <h2 className="mb-8">Published Projects</h2>
          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="animate-slide-up-fade"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
            >
              View more projects <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
