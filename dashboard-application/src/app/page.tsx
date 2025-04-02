"use client";

import { SignIn } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "react-feather";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CTA from "./components/CTA";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0E0E10] text-white min-h-screen">
      <nav className="flex justify-between items-center py-4 px-6 bg-[#121217] shadow-md border-b border-gray-800 relative">
        <h1 className="text-2xl font-bold text-[#8B38D7]">AGOLITE</h1>
        <div className="hidden md:flex space-x-6">
          {["Products", "Solutions", "Resources", "Docs"].map((item) => (
            <button
              key={item}
              className="px-4 py-2 bg-[#1A1A1D] text-gray-300 rounded-lg hover:bg-[#29292D] hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>
        <Link href="/sign-in">
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#8B38D7] to-[#5D2AAC] text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div
          className={`absolute top-16 left-0 w-full bg-[#121217] border-t border-gray-800 p-6 flex flex-col space-y-4 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {["Products", "Solutions", "Resources", "Docs"].map((item) => (
            <button
              key={item}
              className="py-3 text-gray-300 text-lg bg-[#1A1A1D] rounded-lg hover:bg-[#29292D] hover:text-white transition"
            >
              {item}
            </button>
          ))}
          <button className="px-6 py-3 bg-gradient-to-r from-[#8B38D7] to-[#5D2AAC] text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </nav>
      <HeroSection />
      <Features />
      <CTA />
      <footer className="py-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </footer>
    </div>
  );
}
