import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { faqs } from "@/data/faqs";
import Faq from "@/components/faqs/Faq";
import Link from "next/link";

function getBrandColor(platform: string) {
  const p = platform.toLowerCase();
  switch (p) {
    case "whatsapp":
      return "#25D366";
    case "instagram":
      return "#E1306C";
    case "linkedin":
      return "#0A66C2";
    default:
      return null;
  }
}

function getSocialIcon(platform: string) {
  const p = platform.toLowerCase();
  const iconClass = "w-6 h-6";

  switch (p) {
    case "whatsapp":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={iconClass}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      );
    case "phone":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      );
    case "email":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={iconClass}><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
      );
    case "github":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={iconClass}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.495.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      );
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={iconClass}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
      );
    default:
      return <span className="text-xl">🔗</span>;
  }
}

export default function ContactPage() {
  return (
    <section className="container py-24 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-3xl">
        <h1 className="mb-8">Contact</h1>
        <p className="text-2xl text-foreground mb-12">
          Open to learning, collaborating, and building real things.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {socials.map((social) => {
            const brandColor = getBrandColor(social.platform);
            return (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all group"
              >
                <div
                  className={`p-3 rounded-full border transition-colors ${
                    brandColor
                      ? "text-white border-transparent"
                      : "bg-background border-border group-hover:border-accent/50"
                  }`}
                  style={brandColor ? { backgroundColor: brandColor } : undefined}
                >
                  {getSocialIcon(social.platform)}
                </div>
                <div>
                  <p className="text-sm text-muted font-medium uppercase tracking-wider">
                    {social.platform}
                  </p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {social.username}
                  </p>
                </div>
              </Link>
            );
          })}

          <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-background/30">
             <div className="p-3 rounded-full bg-background border border-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
             </div>
             <div>
                <p className="text-sm text-muted font-medium uppercase tracking-wider">
                  Location
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {profile.location}
                </p>
             </div>
          </div>

          <div className="flex items-center gap-4 p-6 rounded-xl border border-border bg-background/30">
             <div className="p-3 rounded-full bg-background border border-border">
                <span className="text-xl">🟢</span>
             </div>
             <div>
                <p className="text-sm text-muted font-medium uppercase tracking-wider">
                  Availability
                </p>
                <p className="text-lg font-semibold text-foreground">
                  24/7 Available
                </p>
             </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <Faq items={faqs} />
        </div>
      </div>
    </section>
  );
}