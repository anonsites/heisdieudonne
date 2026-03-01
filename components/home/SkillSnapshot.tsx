import { skills } from "@/data/skills";
import SkillBar from "@/components/experience/SkillBar";
import Link from "next/link";

export default function SkillSnapshot() {
  // Take first 3 categories only for Home preview
  const previewCategories = skills.slice(0, 3);

  return (
    <section className="container py-24">
      <div className="max-w-3xl mb-12">
        <h2 className="mb-4">Skill Snapshot</h2>
        <p className="text-foreground">
          Ranked by time spent learning and building — not inflated confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {previewCategories.map((category) => (
          <div
            key={category.category}
            className="rounded-xl border border-border p-6 bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors"
          >
            <h3 className="mb-6 text-lg font-semibold">
              {category.category}
            </h3>

            <div className="space-y-6">
              {category.items.slice(0, 3).map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={i}
                  sources={category.sources}
                />
              ))}
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Sources: </span>
              <span className="text-blue-500">{category.sources.join(", ")} </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors group"
        >
          View more skills <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  );
}
