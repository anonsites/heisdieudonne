import { education } from "@/data/education";
import { work } from "@/data/work";

export default function FullExperience() {
  return (
    <section className="container py-24">
      <div className="max-w-3xl mb-16">
        <h1 className="mb-4">Experience</h1>
        <p className="text-foreground">
          Academic foundation and professional journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Background */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            Education Background
          </h3>
          <div className="relative border-l border-border pl-8 space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-accent" />
                <h4 className="text-xl font-semibold mb-1 text-orange-500 flex flex-wrap items-center gap-2">
                  {item.title}
                </h4>
                <span className="inline-block px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 backdrop-blur text-xs">
                  {item.period} <span className="text-white">|</span> {item.status}
                </span>
                <p className="text-sm text-blue-400 mb-2">
                  {item.institution}
                </p>
                <ul className="list-disc list-inside text-foreground space-y-1 text-sm">
                  {item.focusAreas.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Work Background */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            Work Background
          </h3>
          <div className="relative border-l border-border pl-8 space-y-12">
            {work.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-accent" />
                <h4 className="text-xl font-semibold mb-1 text-yellow-500 flex flex-wrap items-center gap-2">
                  {item.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 backdrop-blur text-xs font-normal">
                    {item.period}
                  </span>
                  <span className="px-2 py-0.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 backdrop-blur text-xs font-normal">
                    {item.type}
                  </span>
                </div>
                <h2 className="text-sm  font-medium mb-1">{item.company}</h2>
                <p className="text-sm text-foreground opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}