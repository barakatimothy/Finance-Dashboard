import React from "react";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CTA from "./components/CTA";

export default function LandingPage() {
  return (
    <div className="bg-[#0E0E10] text-white min-h-screen">
      <nav className="flex justify-between items-center py-4 px-6 bg-[#121217] shadow-md border-b border-gray-800">
        <h1 className="text-2xl font-bold text-[#8B38D7]">AGOLITE</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#1A1A1D] text-gray-300 rounded-lg hover:bg-[#29292D] hover:text-white transition">
            Products
          </button>
          <button className="px-4 py-2 bg-[#1A1A1D] text-gray-300 rounded-lg hover:bg-[#29292D] hover:text-white transition">
            Solutions
          </button>
          <button className="px-4 py-2 bg-[#1A1A1D] text-gray-300 rounded-lg hover:bg-[#29292D] hover:text-white transition">
            Resources
          </button>
          <button className="px-4 py-2 bg-[#1A1A1D] text-gray-300 rounded-lg hover:bg-[#29292D] hover:text-white transition">
            Docs
          </button>
        </div>
        <button className="px-6 py-2 bg-gradient-to-r from-[#8B38D7] to-[#5D2AAC] text-white font-semibold rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
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
