import { skills } from "@/data/skills";
import SkillBar from "./SkillBar";

export default function FullSkills() {
  return (
    <section className="container py-24 border-t">
      <div className="max-w-3xl mb-12">
        <h2 className="mb-4">Skills & Tools</h2>
        <p className="text-foreground">
          Based on time invested building and learning real systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((category) => (
          <div
            key={category.category}
            className="rounded-xl border border-border p-6 bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors"
          >
            <h3 className="mb-6 text-xl font-semibold">
              {category.category}
            </h3>

            <div className="space-y-6">
              {category.items.map((skill, i) => (
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
    </section>
  );
}
