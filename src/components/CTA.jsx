// src/components/CTA.jsx

import React from 'react';
import { ArrowRight, Sparkles, Zap, Users } from 'lucide-react';
import '../index.css'; // make sure this path is correct if your CSS file is elsewhere

const CTA = () => {
  const benefits = [
    { icon: Zap, text: 'Set up in under 10 minutes' },
    { icon: Users, text: 'No training required' },
    { icon: Sparkles, text: 'Free forever plan available' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
      </div>

      <div className="container-max relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
            ⚡ Start Your Journey
          </div>

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to automate your academy?
          </h2>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Transform your coaching center with TapClass - the professional way to manage everything.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-white/90">
                <div className="p-1 rounded-full bg-white/10">
                  <benefit.icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="bg-white text-purple-700 hover:bg-gray-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-2xl hover:shadow-white/20 hover:scale-105">
              Get Started – It's Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-white/80 font-medium text-lg px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 hover:bg-white/5 transition-all duration-200">
              Schedule Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">2021</div>
              <div className="text-white/70 text-sm">Founded</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">50K+</div>
              <div className="text-white/70 text-sm">Happy Users</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-bold text-white mb-1">1K+</div>
              <div className="text-white/70 text-sm">Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/5 rounded-full animate-pulse blur-sm"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/5 rounded-full animate-pulse blur-sm" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-white/5 rounded-full animate-pulse blur-sm" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CTA;