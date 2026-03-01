"use client";

import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* App wrapper */}
      <div
        className={`${inter.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased`}
      >
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
    </>
  );
}
