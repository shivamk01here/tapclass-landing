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
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
      </div>

      <div className="container-max relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
            ⚡ Final Call-To-Action
          </div>

          {/* Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to automate your academy?
          </h2>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Start using TapClass and run your coaching center like a pro.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-white/90">
                <benefit.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-white text-primary-700 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 flex items-center gap-2 shadow-xl">
              Get Started – It's Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-white/80 font-medium text-lg px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/50 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">2021</div>
              <div className="text-white/80">Founded Year</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Happy Users</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">1K+</div>
              <div className="text-white/80">Growing Partners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CTA;
