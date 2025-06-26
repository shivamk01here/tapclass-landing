import { 
  UserPlus, 
  Users, 
  Calendar, 
  CreditCard, 
  Megaphone, 
  FileText, 
  BarChart3,
  Check,
  TrendingUp,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: UserPlus,
      title: 'Student Onboarding',
      description: 'Add students instantly with smart forms and batch assignment.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Users,
      title: 'Staff Management',
      description: 'Manage teachers, track performance, and optimize schedules.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automated class timings with instant notifications.',
      color: 'from-blue-600 to-purple-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
        </svg>
      ),
      title: 'WhatsApp Integration',
      description: 'Send automated reminders and updates via WhatsApp.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: CreditCard,
      title: 'Smart Payments',
      description: 'Online fee collection with automated follow-ups.',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Megaphone,
      title: 'Announcements',
      description: 'Send batch-wise updates and notifications instantly.',
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: FileText,
      title: 'Test Management',
      description: 'Create tests, record marks, and notify parents automatically.',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and comprehensive reporting.',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-sm text-blue-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Premium Features
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Advanced technologies for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              everything you need
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Boost your academy's productivity and security with our comprehensive, user-friendly management system.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const IconComponent = typeof feature.icon === 'function' ? feature.icon : feature.icon;
            return (
              <div
                key={index}
                className={`group p-4 md:p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border ${feature.borderColor} hover:bg-gray-900/80 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {typeof feature.icon === 'function' ? (
                    <feature.icon />
                  ) : (
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  )}
                </div>
                
                <h3 className="text-base md:text-lg font-semibold text-white mb-2 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10">
                  <Check className="w-4 h-4 mr-1" />
                  Active
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Preview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Dashboard Features */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Real-time Dashboard
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
              Dynamic insights at your fingertips
            </h3>
            <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              Create workflows faster, streamline operations and watch real-time insights. 
              Connect with students easily while keeping all data secure and compliant.
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 text-sm md:text-base">Real-time student data tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 text-sm md:text-base">Automated fee collection reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300 text-sm md:text-base">Performance analytics & insights</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm md:text-base">
              Explore Dashboard
            </button>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-700/50 relative overflow-hidden">
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              
              <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10">
                <h4 className="font-semibold text-white text-sm md:text-base">TapClass Analytics</h4>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="h-32 md:h-48 bg-gray-800/50 rounded-lg mb-4 md:mb-6 flex items-end justify-center space-x-1 md:space-x-2 p-3 md:p-4 relative z-10 backdrop-blur-sm border border-gray-700/30">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75].map((height, index) => (
                  <div
                    key={index}
                    className={`w-4 md:w-8 rounded-t transition-all duration-500 ${
                      index === 6 ? 'bg-gradient-to-t from-blue-600 to-purple-500' : 'bg-gray-600'
                    }`}
                    style={{ 
                      height: `${height}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-gray-800"
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs md:text-sm text-gray-400">+12 more</span>
                </div>
                <div className="text-right">
                  <div className="text-lg md:text-xl font-bold text-white">2,847</div>
                  <div className="text-xs md:text-sm text-gray-400">Total Students</div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-green-400">↗ 24%</div>
              <div className="text-xs text-gray-400">Growth</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-blue-400">98.5%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;