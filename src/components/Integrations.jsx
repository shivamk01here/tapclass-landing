import { 
    Smartphone, 
    MessageCircle, 
    CreditCard, 
    Mail, 
    Calendar, 
    Users, 
    BookOpen, 
    BarChart3,
    Zap,
    Globe,
    Database,
    Shield
  } from 'lucide-react';
  
  const Integrations = () => {
    const integrations = [
      { icon: MessageCircle, name: 'WhatsApp', color: 'bg-green-500' },
      { icon: Smartphone, name: 'SMS Gateway', color: 'bg-blue-500' },
      { icon: CreditCard, name: 'Payment Gateway', color: 'bg-purple-500' },
      { icon: Mail, name: 'Email Service', color: 'bg-red-500' },
      { icon: Calendar, name: 'Google Calendar', color: 'bg-yellow-500' },
      { icon: Users, name: 'Student Portal', color: 'bg-indigo-500' },
      { icon: BookOpen, name: 'Learning Management', color: 'bg-pink-500' },
      { icon: BarChart3, name: 'Analytics', color: 'bg-teal-500' },
      { icon: Zap, name: 'Automation', color: 'bg-orange-500' },
      { icon: Globe, name: 'Web Portal', color: 'bg-cyan-500' },
      { icon: Database, name: 'Cloud Storage', color: 'bg-gray-500' },
      { icon: Shield, name: 'Security', color: 'bg-emerald-500' },
    ];
  
    return (
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-4">
              🔗 INTEGRATIONS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Don't replace. Integrate.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the burden of learning new tools can be a real process. 
              That's why we integrate with every service at one app for the work.
            </p>
          </div>
  
          {/* Integrations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 text-center">
                    {integration.name}
                  </h3>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
  
          {/* Integration Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                All integrations. One dashboard.
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Smart Notifications</h4>
                    <p className="text-gray-600">Send automated reminders via WhatsApp, SMS, and email from one platform.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Unified Payments</h4>
                    <p className="text-gray-600">Accept payments through multiple gateways with automatic reconciliation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-4 h-4 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h4>
                    <p className="text-gray-600">Get insights from all your integrated services in one comprehensive dashboard.</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right - Integration Visualization */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                {/* Central Hub */}
                <div className="relative flex items-center justify-center mb-8">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
  
                {/* Connected Services */}
                <div className="grid grid-cols-3 gap-4">
                  {integrations.slice(0, 6).map((integration, index) => (
                    <div
                      key={index}
                      className="relative bg-gray-50 rounded-lg p-3 flex flex-col items-center"
                    >
                      <div className={`w-8 h-8 ${integration.color} rounded-lg flex items-center justify-center mb-2`}>
                        <integration.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-gray-600 text-center">
                        {integration.name}
                      </span>
                      
                      {/* Connection Line */}
                      <div className="absolute top-1/2 left-1/2 w-px h-8 bg-primary-300 transform -translate-x-1/2 -translate-y-full"></div>
                    </div>
                  ))}
                </div>
  
                {/* Status Indicator */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    All systems connected
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