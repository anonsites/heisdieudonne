"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Bio", href: "/bio" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="container flex items-center justify-center py-4">
      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`relative text-sm uppercase font-bold transition-colors ${
              isActive(link.href)
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {link.name === "Home" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            ) : (
              link.name
            )}
            <span
              className={`absolute left-0 -bottom-1 w-full h-[2px] bg-foreground rounded-full transition-transform duration-300 ease-out origin-left ${
                isActive(link.href) ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
