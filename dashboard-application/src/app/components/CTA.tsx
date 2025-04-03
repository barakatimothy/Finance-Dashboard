import { SignInButton } from "@clerk/nextjs";
export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#8B38D7] to-[#7029A8] text-center text-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* CTA Heading */}
        <h2 className="text-4xl font-bold leading-tight opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          Join the Future of Trading 🚀
        </h2>

        {/* CTA Description */}
        <p className="text-lg mt-4 opacity-0 animate-[fadeIn_1.2s_ease-out_0.5s_forwards]">
          Get exclusive access to AI-powered trading strategies and real-time
          analytics. Start your journey today.
        </p>

        {/* CTA Button */}
        <SignInButton>
          <button className="mt-8 px-8 py-4 bg-white text-[#8B38D7] font-semibold rounded-full text-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg opacity-0 animate-[fadeIn_1.5s_ease-out_0.8s_forwards]">
            Get Started Now
          </button>
        </SignInButton>
      </div>

      {/* Floating Graphics (Optional) */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-16 right-16 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>

      {/* Tailwind Animations */}
      <style>
        {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}
      </style>
    </section>
  );
}
