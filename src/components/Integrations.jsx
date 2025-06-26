import { 
  MessageCircle, 
  CreditCard, 
  Mail, 
  Calendar, 
  Users, 
  BarChart3,
  Zap,
  Globe,
  Database,
  Shield,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Integrations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const integrations = [
    { icon: MessageCircle, name: 'WhatsApp', color: 'from-green-400 to-green-600', shadow: 'shadow-green-500/30' },
    { icon: CreditCard, name: 'Payments', color: 'from-purple-400 to-purple-600', shadow: 'shadow-purple-500/30' },
    { icon: Mail, name: 'Email', color: 'from-red-400 to-red-600', shadow: 'shadow-red-500/30' },
    { icon: Calendar, name: 'Calendar', color: 'from-blue-400 to-blue-600', shadow: 'shadow-blue-500/30' },
    { icon: Users, name: 'CRM', color: 'from-indigo-400 to-indigo-600', shadow: 'shadow-indigo-500/30' },
    { icon: BarChart3, name: 'Analytics', color: 'from-teal-400 to-teal-600', shadow: 'shadow-teal-500/30' },
    { icon: Globe, name: 'Web Portal', color: 'from-cyan-400 to-cyan-600', shadow: 'shadow-cyan-500/30' },
    { icon: Database, name: 'Storage', color: 'from-gray-400 to-gray-600', shadow: 'shadow-gray-500/30' },
    { icon: Shield, name: 'Security', color: 'from-emerald-400 to-emerald-600', shadow: 'shadow-emerald-500/30' },
    { icon: Zap, name: 'Automation', color: 'from-orange-400 to-orange-600', shadow: 'shadow-orange-500/30' },
  ];

  const features = [
    { 
      icon: MessageCircle, 
      title: 'Smart Notifications', 
      desc: 'Multi-channel messaging', 
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    { 
      icon: CreditCard, 
      title: 'Unified Payments', 
      desc: 'All gateways, one place', 
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    { 
      icon: BarChart3, 
      title: 'Real-time Analytics', 
      desc: 'Data-driven insights', 
      color: 'from-teal-500 to-green-500',
      bgColor: 'from-teal-50 to-green-50'
    }
  ];

  return (
    <section className="relative min-h-screen bg-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-300 text-sm font-medium mb-8 group hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            SEAMLESS INTEGRATIONS
            <div className="ml-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-ping"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text mb-8 leading-tight">
            Connect Everything
            <span className="block text-4xl md:text-5xl font-light mt-2 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text">
              Beautifully
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One platform to rule them all. Seamlessly integrate with your favorite tools 
            and watch the magic happen in real-time.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${integration.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-75 group-hover:scale-110`}></div>
              
              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                {/* Icon Container */}
                <div className={`w-20 h-20 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ${integration.shadow} group-hover:shadow-2xl`}>
                  <integration.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-100 text-center group-hover:text-white transition-colors duration-300">
                  {integration.name}
                </h3>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Feature Dashboard */}
        <div className="relative">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 rounded-4xl blur-2xl"></div>
          
          <div className="relative bg-gray-800/80 backdrop-blur-2xl rounded-4xl p-12 border border-gray-700/50 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Features */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                    All-in-One Dashboard
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${feature.bgColor} p-6 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 cursor-pointer`}
                    >
                      {/* Background Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative flex items-center space-x-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                            {feature.desc}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Visualization */}
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl"></div>
                
                <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-3xl p-10 text-white shadow-2xl">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Connected Hub</h4>
                    <p className="text-white/80">Real-time synchronization</p>
                  </div>
                  
                  {/* Integration Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {integrations.slice(0, 6).map((integration, index) => (
                      <div 
                        key={index} 
                        className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${
                          animationPhase === Math.floor(index / 2) ? 'animate-pulse bg-white/20' : ''
                        }`}
                      >
                        <integration.icon className="w-8 h-8 text-white mx-auto mb-2" />
                        <span className="text-xs text-white/90 font-medium">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="text-center">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-400/20 backdrop-blur-sm border border-green-400/30 text-green-100">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping"></div>
                      <span className="font-semibold">All systems operational</span>
                      <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;