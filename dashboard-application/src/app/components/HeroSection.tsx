import React from "react";
import { FaRobot, FaChartLine, FaCogs, FaBrain } from "react-icons/fa";
import Button from "./ui/Button";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-black to-[#0f0f1a] opacity-95"></div>
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#38d7b2] opacity-20 blur-3xl rounded-full animate-[pulse_4s_infinite]"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-700 opacity-25 blur-3xl rounded-full animate-[pulse_6s_infinite]"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-7xl gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight opacity-0 animate-[fadeIn_1.2s_ease-out_0.2s_forwards]">
            Build & Automate{" "}
            <span className="text-[#38d7b2]">Smarter Trading Systems</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-lg opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards]">
            Develop cutting-edge trading bots, automate strategies, and leverage
            AI-powered sentiment analysis for superior market insights.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-400 opacity-0 animate-[fadeIn_1.8s_ease-out_0.8s_forwards]">
            {[
              {
                icon: <FaRobot className="text-[#38d7b2] text-3xl" />,
                text: "Build no-code strategies with Algo-Lite",
              },
              {
                icon: <FaChartLine className="text-purple-500 text-3xl" />,
                text: "AI-driven R&D for financial market trends",
              },
              {
                icon: <FaCogs className="text-[#38d7b2] text-3xl" />,
                text: "Custom automation & client integrations",
              },
              {
                icon: <FaBrain className="text-purple-500 text-3xl" />,
                text: "NLP-based sentiment tools for alpha generation",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 transition-transform duration-300 hover:scale-105"
              >
                {feature.icon}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center md:justify-start gap-4 opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards]">
            <Link href="/sign-in">
              {" "}
              <Button className="px-6 py-3 bg-[#38d7b2] text-black font-semibold rounded-full transition-transform duration-300 hover:bg-[#2ab598] hover:scale-105 shadow-md">
                Get Started
              </Button>{" "}
            </Link>
            <Button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-full transition-transform duration-300 hover:bg-gray-700 hover:scale-105 shadow-md">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/Hero.png"
            alt="Trading Dashboard"
            className="w-full max-w-2xl md:max-w-3xl rounded-lg shadow-lg opacity-0 animate-[fadeIn_2.2s_ease-out_1.2s_forwards] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
            100% { opacity: 0.2; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
