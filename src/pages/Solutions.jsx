import { Shield , CheckCircle , Award , Building , Users, Calendar, CreditCard, Bell  , Target , Smartphone , ArrowRight   } from 'lucide-react';
const Solutions = () => (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Complete Academy Automation
          </h1>
          <p className="text-xl text-gray-300">Everything you need to run a modern coaching business</p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600 hover:border-purple-500/50 transition-all group">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Student Lifecycle Management</h3>
            <p className="text-gray-300 text-sm mb-4">From inquiry to alumni - complete student journey automation with smart onboarding workflows.</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Digital admission process</li>
              <li>• Automated document collection</li>
              <li>• Parent-student portal access</li>
            </ul>
          </div>
  
          <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all group">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Intelligent Scheduling</h3>
            <p className="text-gray-300 text-sm mb-4">AI-powered batch scheduling with conflict detection and resource optimization.</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Smart time-table generation</li>
              <li>• Teacher availability sync</li>
              <li>• Room & resource booking</li>
            </ul>
          </div>
  
          <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600 hover:border-green-500/50 transition-all group">
            <div className="bg-gradient-to-r from-green-600 to-green-800 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Payment Automation</h3>
            <p className="text-gray-300 text-sm mb-4">End-to-end fee management with smart reminders and multiple payment gateways.</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Automated fee reminders</li>
              <li>• UPI, card, net banking</li>
              <li>• Financial reporting</li>
            </ul>
          </div>
  
          <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600 hover:border-yellow-500/50 transition-all group">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Bell className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Multi-Channel Communication</h3>
            <p className="text-gray-300 text-sm mb-4">Reach parents & students instantly via WhatsApp, SMS, email, and push notifications.</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• WhatsApp Business integration</li>
              <li>• Bulk SMS & email campaigns</li>
              <li>• Real-time announcements</li>
            </ul>
          </div>
  
          <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600 hover:border-red-500/50 transition-all group">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
            <p className="text-gray-300 text-sm mb-4">Real-time insights into student performance, attendance, and business metrics.</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Student progress tracking</li>
              <li>• Teacher performance metrics</li>
              <li>• Revenue analytics</li>
            </ul>
          </div>
  
          <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600 hover:border-indigo-500/50 transition-all group">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Smartphone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile-First Platform</h3>
            <p className="text-gray-300 text-sm mb-4">Native mobile apps for iOS & Android with offline capability and instant sync.</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Branded academy apps</li>
              <li>• Offline attendance marking</li>
              <li>• Parent engagement features</li>
            </ul>
          </div>
        </div>
  
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-8 rounded-xl border border-purple-500/50">
          <h2 className="text-2xl font-bold mb-4">Ready to Scale Your Academy?</h2>
          <p className="text-gray-300 mb-6">Join 500+ coaching centers already using TapClass</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
            Start Free Trial <ArrowRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );

  export default Solutions; 