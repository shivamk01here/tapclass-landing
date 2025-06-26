import React from 'react'; // It's good practice to import React if you're using JSX
import { CheckCircle, Target, BookOpen, Building } from 'lucide-react'; // Import icons

const AboutUs = () => (
  <div className="min-h-screen bg-gray-800 text-white p-6">
    <div className="max-w-5xl mx-auto pt-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Revolutionizing Education Management
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From Excel sheets to enterprise-grade automation. We're building the future of coaching academies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gray-700/30 p-8 rounded-xl border border-gray-600">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">🚨 The Problem We Solve</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Coaching owners still run everything on WhatsApp & Excel</li>
            <li>• Parents call constantly for class updates and fee status</li>
            <li>• Teachers manually share links, schedules, homework</li>
            <li>• Payments scattered across cash and multiple UPI accounts</li>
            <li>• Zero visibility, zero automation, zero scalability</li>
          </ul>
        </div>

        <div className="bg-gray-700/30 p-8 rounded-xl border border-gray-600">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">✅ Our Solution</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Student & Staff Onboarding</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Smart Batch Scheduling</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Automated Fee Collection</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Performance Tracking</li>
            <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Multi-channel Notifications</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-8">🧑‍💼 Who We Serve</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-purple-600/20 p-6 rounded-lg border border-purple-500/50">
            <Target className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
            <h3 className="font-bold mb-2">Coaching Institutes</h3>
            <p className="text-sm text-gray-300">NEET, JEE, UPSC, CA, SSC preparation centers</p>
          </div>
          <div className="bg-blue-600/20 p-6 rounded-lg border border-blue-500/50">
            <BookOpen className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
            <h3 className="font-bold mb-2">Tuition Centers</h3>
            <p className="text-sm text-gray-300">K-12 academic support and skill development</p>
          </div>
          <div className="bg-green-600/20 p-6 rounded-lg border border-green-500/50">
            <Building className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <h3 className="font-bold mb-2">Franchise Academies</h3>
            <p className="text-sm text-gray-300">Multi-location chains needing centralized control</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs; // This line exports the component