import { FaRobot, FaChartLine, FaLock, FaCogs, FaBell, FaBrain } from "react-icons/fa";

const features = [
  {
    icon: <FaRobot className="text-[#8B38D7] text-5xl" />,
    title: "Automated Trading",
    description: "Leverage AI-powered bots to execute trades with precision and efficiency."
  },
  {
    icon: <FaChartLine className="text-[#8B38D7] text-5xl" />,
    title: "Real-Time Analytics",
    description: "Gain deep insights into market trends with our advanced analytics engine."
  },
  {
    icon: <FaLock className="text-[#8B38D7] text-5xl" />,
    title: "Secure & Reliable",
    description: "Built with industry-grade security to keep your data and assets safe."
  },
  {
    icon: <FaCogs className="text-[#8B38D7] text-5xl" />,
    title: "Custom Strategies",
    description: "Design, test, and deploy trading strategies tailored to your needs."
  },
  {
    icon: <FaBell className="text-[#8B38D7] text-5xl" />,
    title: "24/7 Monitoring",
    description: "Stay informed with real-time alerts and automated risk management."
  },
  {
    icon: <FaBrain className="text-[#8B38D7] text-5xl" />,
    title: "AI-Powered Insights",
    description: "Predict market trends with AI-driven sentiment analysis and ML models."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0D0D14] to-[#0A0A12]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#8B38D7] mb-6 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          Why Choose Us?
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto opacity-0 animate-[fadeIn_1.2s_ease-out_0.5s_forwards]">
          Our advanced AI-driven solutions empower you with data-driven insights, seamless automation, and next-gen trading capabilities.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#13131A] p-8 rounded-2xl text-center shadow-xl border border-[#8B38D7]/20 hover:scale-105 transition-transform duration-300 opacity-0 animate-[fadeInUp_1.5s_ease-out_0.6s_forwards]"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
