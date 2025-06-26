import { 
    UserPlus, 
    Users, 
    Calendar, 
    MessageSquare, 
    CreditCard, 
    Megaphone, 
    FileText, 
    BarChart3,
    Check
  } from 'lucide-react';
  
  const Features = () => {
    const features = [
      {
        icon: UserPlus,
        title: 'Student Onboarding',
        description: 'Add students in seconds with name, phone & batch.',
        color: 'bg-blue-500',
      },
      {
        icon: Users,
        title: 'Staff & Teacher Management',
        description: 'Assign subjects, track performance, manage schedules.',
        color: 'bg-green-500',
      },
      {
        icon: Calendar,
        title: 'Class Scheduling',
        description: 'Set and share class timings with auto notifications.',
        color: 'bg-purple-500',
      },
      {
        icon: MessageSquare,
        title: 'WhatsApp & SMS Alerts',
        description: 'Instant reminders for classes, fees, or announcements.',
        color: 'bg-pink-500',
      },
      {
        icon: CreditCard,
        title: 'Fee Collection & Reminders',
        description: 'Online payments with auto-follow-ups. No chasing.',
        color: 'bg-yellow-500',
      },
      {
        icon: Megaphone,
        title: 'Announcements & Notices',
        description: 'Send batch-wise updates instantly.',
        color: 'bg-red-500',
      },
      {
        icon: FileText,
        title: 'Test Creation & Results',
        description: 'Create tests, record marks, and notify parents.',
        color: 'bg-indigo-500',
      },
      {
        icon: BarChart3,
        title: 'Dashboard & Reports',
        description: 'All metrics, one dashboard. No more Excel.',
        color: 'bg-teal-500',
      },
    ];
  
    return (
      <section id="features" className="section-padding bg-white">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
              💡 What We Do
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Latest advanced technologies to ensure everything you needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hosting your team's productivity and security with our all-in-one, user-friendly contract management system.
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check className="w-4 h-4 mr-1" />
                  Available
                </div>
              </div>
            ))}
          </div>
  
          {/* Dashboard Preview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Dashboard Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dynamic dashboard</h3>
              <p className="text-gray-600 mb-8">
                Create workspace faster, streamline your workflow and watch insights 
                and connect new students easily. All data and information are stored safely
                to navigate take performance compliance.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Real-time student data tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Automated fee collection reports</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Performance analytics & insights</span>
                </div>
              </div>
  
              <button className="btn-primary">
                Learn more
              </button>
            </div>
  
            {/* Right - Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900">Academy Kh...</h4>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="h-48 bg-gray-50 rounded-lg mb-6 flex items-end justify-center space-x-2 p-4">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75].map((height, index) => (
                    <div
                      key={index}
                      className={`w-8 rounded-t ${
                        index === 6 ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
  
                {/* Stats */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">+12 more</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">2,847</div>
                    <div className="text-sm text-gray-500">Total Students</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;