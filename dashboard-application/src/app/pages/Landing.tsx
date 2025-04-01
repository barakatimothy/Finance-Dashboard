import Button from "../components/ui/Button";
import { Card,CardContent    } from "../components/ui/Card";
import { UserCircle, BarChart2, DollarSign } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Your Smart Investment Dashboard</h1>
        <p className="text-lg text-gray-400 mb-6">
          Track your investments, analyze market trends, and grow your portfolio.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
      </section>
      
      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 text-center py-12">
        <Card className="bg-gray-900 p-6">
          <UserCircle size={40} className="mx-auto text-purple-500" />
          <CardContent>
            <h3 className="text-xl font-semibold mt-4">User-Friendly Interface</h3>
            <p className="text-gray-400 mt-2">Navigate seamlessly with our clean and modern UI.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 p-6">
          <BarChart2 size={40} className="mx-auto text-blue-500" />
          <CardContent>
            <h3 className="text-xl font-semibold mt-4">Real-Time Analytics</h3>
            <p className="text-gray-400 mt-2">Stay ahead with live market updates and trends.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 p-6">
          <DollarSign size={40} className="mx-auto text-red-500" />
          <CardContent>
            <h3 className="text-xl font-semibold mt-4">Secure Transactions</h3>
            <p className="text-gray-400 mt-2">Your investments are protected with top-tier security.</p>
          </CardContent>
        </Card>
      </section>
      
      {/* Statistics Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Investment Portfolio</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center text-xl font-bold">77%</div>
            <p className="mt-2 text-gray-400">$92,980 Investments</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-bold">51%</div>
            <p className="mt-2 text-gray-400">$24,700 Bonds</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full border-4 border-red-500 flex items-center justify-center text-xl font-bold">27%</div>
            <p className="mt-2 text-gray-400">$14,980 Crypto</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </footer>
    </div>
  );
}