import { Play, ArrowRight, MessageSquare, Phone, Mail, CreditCard, Code, Shield, Zap, Database, Sparkles, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const floatingElements = [
    { 
      icon: Database, 
      position: { top: '18%', left: '8%' },
      delay: '0s',
      size: 'w-10 h-10 md:w-12 md:h-12',
      color: 'from-gray-700 to-gray-800'
    },
    { 
      icon: Shield, 
      position: { top: '12%', right: '12%' },
      delay: '1s',
      size: 'w-8 h-8 md:w-10 md:h-10',
      color: 'from-blue-600 to-blue-700'
    },
    { 
      icon: Code, 
      position: { top: '32%', left: '6%' },
      delay: '2s',
      size: 'w-12 h-12 md:w-14 md:h-14',
      color: 'from-purple-600 to-purple-700'
    },
    { 
      icon: Zap, 
      position: { top: '22%', right: '6%' },
      delay: '0.5s',
      size: 'w-9 h-9 md:w-11 md:h-11',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: MessageSquare, 
      position: { bottom: '32%', left: '10%' },
      delay: '1.5s',
      size: 'w-8 h-8 md:w-10 md:h-10',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: Globe, 
      position: { bottom: '22%', right: '10%' },
      delay: '3s',
      size: 'w-10 h-10 md:w-12 md:h-12',
      color: 'from-blue-600 to-purple-600'
    }
  ];

  const DemoForm = () => (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-gray-100 transform animate-modal-in">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Book Your Demo</h3>
          <p className="text-sm text-gray-600">Experience TapClass in action</p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm transition-all"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm transition-all"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm transition-all"
          />
          <input
            type="text"
            placeholder="Academy Name"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 text-sm transition-all"
          />
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowDemoForm(false)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                setShowDemoForm(false);
                alert('Demo booking submitted! We will contact you soon.');
              }}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all text-sm font-medium"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="relative min-h-screen bg-gray-800 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-gray-800"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-gray-800/50"></div>

        {/* Floating Premium Icons */}
        {floatingElements.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`absolute hidden lg:block transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                ...item.position,
                transitionDelay: item.delay 
              }}
            >
              <div className={`${item.size} rounded-2xl bg-gradient-to-br ${item.color} shadow-xl border border-white/10 backdrop-blur-sm group hover:scale-110 transition-all duration-500 flex items-center justify-center relative overflow-hidden`}>
                <Icon className="w-4 h-4 md:w-6 md:h-6 text-white drop-shadow-sm relative z-10" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          );
        })}

        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-screen text-center pt-16 md:pt-20">
            
            {/* Premium Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-200">Enterprise Academy Management</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 leading-tight max-w-5xl">
              <span className="text-white">
                Everything your academy needs{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent relative inline-block">
                Managed in one tap.
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 animate-underline"></div>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-2xl font-medium px-4">
              From student onboarding to payments, reminders to tests — TapClass automates it all so you can focus on teaching.
            </p>

            {/* Premium Features Badges */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4">
              {['99.9% Uptime', 'Bank-Grade Security', 'Real-time Analytics', 'AI-Powered Insights'].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-300 hover:bg-white/10 transition-all duration-300">
                  {feature}
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl pt-8 md:pt-12 border-t border-white/10 px-4">
              {/* Left - Company Stats */}
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <div className="text-sm font-bold text-white mb-1">Trusted by 500+</div>
                <div className="text-sm text-gray-400">premium academies worldwide</div>
              </div>

              {/* Right - Tech Stack Indicators */}
              <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-12">
                <div className="flex flex-col items-center">
                  <div className="text-xs font-semibold text-gray-500 mb-2">POWERED BY</div>
                  <div className="flex items-center space-x-3 md:space-x-4 opacity-60">
                    <div className="text-sm md:text-lg font-bold text-gray-400 hover:text-white transition-colors">AWS</div>
                    <div className="text-sm md:text-lg font-bold text-gray-400 hover:text-white transition-colors">Redis</div>
                    <div className="text-sm md:text-lg font-bold text-gray-400 hover:text-white transition-colors">PostgreSQL</div>
                    <div className="text-sm md:text-lg font-bold text-gray-400 hover:text-white transition-colors">Stripe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geometric Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 rounded-full bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </section>

      {showDemoForm && <DemoForm />}

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.05); }
        }
        @keyframes underline {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes modal-in {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-underline {
          animation: underline 2s ease-out 1s forwards;
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Hero;