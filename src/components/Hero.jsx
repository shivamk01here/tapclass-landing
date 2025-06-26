import { Play, ArrowRight, MessageSquare, Phone, Mail, CreditCard, Code, Shield, Zap, Database } from 'lucide-react';
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
      position: { top: '20%', left: '10%' },
      delay: '0s',
      size: 'w-12 h-12',
      color: 'from-slate-600 to-slate-800'
    },
    { 
      icon: Shield, 
      position: { top: '15%', right: '15%' },
      delay: '1s',
      size: 'w-10 h-10',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      icon: Code, 
      position: { top: '35%', left: '8%' },
      delay: '2s',
      size: 'w-14 h-14',
      color: 'from-slate-700 to-slate-900'
    },
    { 
      icon: Zap, 
      position: { top: '25%', right: '8%' },
      delay: '0.5s',
      size: 'w-11 h-11',
      color: 'from-amber-500 to-orange-600'
    },
    { 
      icon: MessageSquare, 
      position: { bottom: '35%', left: '12%' },
      delay: '1.5s',
      size: 'w-10 h-10',
      color: 'from-emerald-600 to-emerald-800'
    },
    { 
      icon: CreditCard, 
      position: { bottom: '25%', right: '12%' },
      delay: '3s',
      size: 'w-12 h-12',
      color: 'from-purple-600 to-purple-800'
    }
  ];

  const DemoForm = () => (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-200">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Book Your Demo</h3>
          <p className="text-slate-600">Experience TapClass in action</p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-50"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-50"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-50"
          />
          <input
            type="text"
            placeholder="Academy Name"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-slate-50"
          />
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setShowDemoForm(false)}
              className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                setShowDemoForm(false);
                alert('Demo booking submitted! We will contact you soon.');
              }}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-xl hover:shadow-lg transition-all"
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
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>

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
                animationDelay: item.delay,
                transitionDelay: item.delay 
              }}
            >
              <div className={`${item.size} rounded-2xl bg-gradient-to-r ${item.color} shadow-lg border border-white/20 backdrop-blur-sm animate-float-slow flex items-center justify-center group hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white drop-shadow-sm" />
                <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          );
        })}

        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-screen text-center pt-20">
            
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight max-w-5xl">
              <span className="text-slate-900">
                Everything your academy needs{' '}
              </span>
              <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent relative">
                Managed in one tap.
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 to-slate-800 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium">
            From student onboarding to payments, reminders to tests — TapClass automates it all so you can focus on teaching.
            </p>

            {/* Premium Features Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['99.9% Uptime', 'Bank-Grade Security', 'Real-time Analytics', 'AI-Powered Insights'].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button 
                onClick={() => window.open('/register', '_blank')}
                className="bg-gradient-to-r from-slate-800 to-slate-900 text-white text-lg px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-700 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Enterprise Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => setShowDemoForm(true)}
                className="bg-white/90 backdrop-blur-sm text-slate-800 text-lg px-8 py-4 rounded-2xl font-semibold border border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl pt-12 border-t border-slate-200">
              {/* Left - Company Stats */}
              <div className="text-left mb-8 lg:mb-0">
                <div className="text-sm font-bold text-slate-900 mb-1">Trusted by 500+</div>
                <div className="text-sm text-slate-600">premium academies worldwide</div>
              </div>

              {/* Right - Tech Stack Indicators */}
              <div className="flex items-center space-x-8 lg:space-x-12">
                <div className="flex flex-col items-center">
                  <div className="text-xs font-semibold text-slate-400 mb-1">POWERED BY</div>
                  <div className="flex items-center space-x-4 opacity-60">
                    <div className="text-lg font-bold text-slate-500">AWS</div>
                    <div className="text-lg font-bold text-slate-500">Redis</div>
                    <div className="text-lg font-bold text-slate-500">PostgreSQL</div>
                    <div className="text-lg font-bold text-slate-500">Stripe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-slate-200/20 to-slate-300/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-slate-300/10 to-slate-400/10 blur-3xl"></div>
      </section>

      {showDemoForm && <DemoForm />}

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-6px) rotate(1deg); 
          }
          50% { 
            transform: translateY(-8px) rotate(0deg); 
          }
          75% { 
            transform: translateY(-4px) rotate(-1deg); 
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;