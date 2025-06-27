import { useState, useEffect } from 'react';
import {
  MessageCircle,
  Mail,
  Calendar,
  Zap,
  CreditCard,
  Users,
  BarChart3,
  CheckCircle,
} from 'lucide-react';

const Integrations = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      title: 'Payments',
      subtitle: 'We got you covered',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-600',
      apps: [
        { name: 'Razorpay', color: 'bg-blue-600', icon: '💳' },
        { name: 'Google Pay', color: 'bg-red-500', icon: '🔴' },
        { name: 'PayPal', color: 'bg-blue-500', icon: '💙' },
        { name: 'Paytm', color: 'bg-blue-700', icon: '📱' },
        { name: 'Stripe', color: 'bg-purple-600', icon: '💜' },
        { name: 'PhonePe', color: 'bg-purple-700', icon: '📞' },
      ],
    },
    {
      title: 'Communication',
      subtitle: 'Connect seamlessly',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-600',
      apps: [
        { name: 'WhatsApp', color: 'bg-green-500', icon: '📱' },
        { name: 'Telegram', color: 'bg-blue-400', icon: '✈️' },
        { name: 'Gmail', color: 'bg-red-500', icon: '📧' },
        { name: 'Slack', color: 'bg-purple-600', icon: '💬' },
        { name: 'Teams', color: 'bg-blue-600', icon: '🔷' },
        { name: 'Discord', color: 'bg-indigo-600', icon: '🎮' },
      ],
    },
    {
      title: 'Automation',
      subtitle: 'Work smarter',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      apps: [
        { name: 'Zapier', color: 'bg-orange-500', icon: '⚡' },
        { name: 'IFTTT', color: 'bg-black', icon: '🔗' },
        { name: 'Notion', color: 'bg-gray-800', icon: '📝' },
        { name: 'Airtable', color: 'bg-yellow-500', icon: '📊' },
        { name: 'Calendly', color: 'bg-blue-500', icon: '📅' },
        { name: 'Hubspot', color: 'bg-orange-600', icon: '🎯' },
      ],
    },
  ];

  const ActiveIcon = categories[activeCategory].icon;

  return (
    <section className="relative py-16 relative py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-7=800 to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium mb-4">
            <CheckCircle className="w-3 h-3 mr-1" />
            INTEGRATIONS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Everything You Need
          </h2>
          <p className="text-sm text-white/70 max-w-md mx-auto">
            Seamlessly connect with your favorite tools and platforms
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Content */}
        <div className="transition-all duration-500 ease-out">
          <div className="text-center mb-6">
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${categories[activeCategory].color} mb-3 shadow-lg animate-pulse`}
            >
              <ActiveIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {categories[activeCategory].title}
            </h3>
            <p className="text-sm text-white/60">
              {categories[activeCategory].subtitle}
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
            {categories[activeCategory].apps.map((app, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10 cursor-pointer">
                  <div
                    className={`w-8 h-8 ${app.color} rounded-lg flex items-center justify-center text-white text-sm mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {app.icon}
                  </div>
                  <div className="text-xs text-white/70 text-center font-medium group-hover:text-white/90 transition-colors">
                    {app.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
              <span className="text-xs font-medium">All connected & ready</span>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {categories.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeCategory === index ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
