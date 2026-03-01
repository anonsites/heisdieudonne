import { education } from "@/data/education";

export default function EducationTimeline() {
  return (
    <section className="container py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="mb-4">Experience</h1>
        <p className="text-foreground">
          Academic foundation and structured learning path.
        </p>
      </div>

      <div className="relative border-l border-border pl-8 space-y-12">
        {education.map((item, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-accent" />

            <h2 className="text-xl font-semibold mb-1 text-orange-500 flex flex-wrap items-center gap-2">
              {item.title}
              <span className="px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 backdrop-blur text-xs font-normal">
                {item.period} <span className="text-white">|</span> {item.status}
              </span>
            </h2>

            <p className="text-sm text-foreground mb-2">
              {item.institution}
            </p>

            <ul className="list-disc list-inside text-foreground space-y-1">
              {item.focusAreas.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
