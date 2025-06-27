import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Users, Calendar, CheckCircle } from 'lucide-react';

const CTA = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Zap, text: '10-min setup', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, text: 'Zero training', color: 'from-blue-500 to-cyan-500' },
    { icon: Sparkles, text: 'Free forever', color: 'from-purple-500 to-pink-500' },
  ];

  const stats = [
    { value: '2021', label: 'Founded' },
    { value: '50K+', label: 'Users' },
    { value: '1K+', label: 'Partners' }
  ];

  return (
    <section className="relative py-16 -mt-8 px-4 bg-gradient-to-b from-gray-800 via-purple-900 to-gray-900 overflow-hidden">
      {/* Consistent Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
          🚀 Ready to Start?
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Automate Your Academy Today
        </h2>

        {/* Subheadline */}
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Join thousands of coaching centers already using TapClass to streamline their operations
        </p>

        {/* Animated Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                activeFeature === index
                  ? 'bg-white/15 border-white/30 scale-105'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className={`p-1.5 rounded-full bg-gradient-to-r ${feature.color} ${
                activeFeature === index ? 'animate-pulse' : ''
              }`}>
                <feature.icon className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg px-8 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="text-white/90 hover:text-white font-medium text-lg px-8 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
            Book Demo
          </button>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicator */}
        <div className="mt-6 flex items-center justify-center space-x-2 text-white/60">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span className="text-sm">Secure • Trusted • No commitment</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;