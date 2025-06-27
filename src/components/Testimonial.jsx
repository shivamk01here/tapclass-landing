import { Quote, Star, Users, CreditCard, Building } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonial = () => {
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: "2.5K+", label: "Students", color: "from-blue-500 to-cyan-500" },
    { icon: CreditCard, value: "₹1Cr+", label: "Payments", color: "from-green-500 to-emerald-500" },
    { icon: Building, value: "50+", label: "Academies", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section className="relative py-16 -mt-8 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-slate-900 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
            ❤️ Loved by Coaching Owners
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="text-center pt-6">
            <blockquote className="text-lg md:text-xl font-medium text-white/90 leading-relaxed mb-6">
              "From 4 different apps to just one. TapClass handles everything — fees, updates, everything on mobile. It's like having a virtual manager!"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                A
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white">Aakash Sir</h4>
                <p className="text-white/60 text-sm">Director, Galaxy Institute</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xs text-white/50">Perfect 5.0 rating</p>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm border transition-all duration-500 ${
                currentStat === index 
                  ? 'border-white/30 scale-105 bg-white/10' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Glow Effect */}
              {currentStat === index && (
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 rounded-2xl blur-sm`}></div>
              )}
              
              <div className="relative text-center">
                <div className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2 ${
                  currentStat === index ? 'animate-pulse' : ''
                }`}>
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {stats.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentStat === index ? 'bg-white w-6' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;