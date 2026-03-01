import Link from "next/link";
import Image from "next/image";
import { socials } from "@/data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
      
      {/* Left */}
      <h6 className="text-foreground text-center md:text-left">
        © {year} Heisdieudonne
      </h6>

      {/* Center - Social Links */}
      <div className="flex items-center gap-6">
        {socials.map((social) => (
          <Link
            key={social.platform}
            href={social.url}
            target="_blank"
            className="text-muted hover:text-foreground transition-colors"
          >
            {social.platform}
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center justify-center md:justify-end">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border bg-muted/20">
          <Image
            src="/developer/bucura-icon.jpg"
            alt="Heisdieudonne"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
