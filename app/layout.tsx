import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

// You can swap Inter later if you want something more expressive
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
// Correct the cooljazz name if you want to use Cooljazz font
const rosemary = localFont({
  src: "../public/fonts/Cooljazz.ttf",
  variable: "--font-Cooljaz",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heisdieudonne — portifolio",
  description:
    "Networking student and developer. Learning, building, and shipping real projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${rosemary.variable} font-sans bg-background text-foreground antialiased`}
      >
        {/* App wrapper */}
        <div className="min-h-screen flex flex-col">
          {/* Navbar will live here */}
          <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b">
            <Navbar />
          </header>

          {/* Main content */}
          <main className="flex-1">{children}</main>

          {/* Footer will live here */}
          <footer className="border-t">
            <Footer />
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
