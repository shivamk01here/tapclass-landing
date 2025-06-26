import React from 'react'; // Good practice to import React
import { MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';
const ContactUs = () => (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Let's Transform Your Academy
          </h1>
          <p className="text-xl text-gray-300">Ready to automate your coaching business? We're here to help.</p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">📞 Reach Out to Us</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg">
                <div className="bg-green-500 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp Business</h3>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Business Email</h3>
                  <p className="text-gray-300">founders@tapclass.in</p>
                </div>
              </div>
  
              <div className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg">
                <div className="bg-purple-500 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Direct Line</h3>
                  <p className="text-gray-300">1800-TAPCLASS (24/7)</p>
                </div>
              </div>
            </div>
  
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/50">
              <h3 className="font-bold mb-3">🚀 Schedule a Demo</h3>
              <p className="text-sm text-gray-300 mb-4">See TapClass in action with your own academy data</p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                Book Free Demo <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </div>
          </div>
  
          <div className="bg-gray-700/30 p-8 rounded-xl border border-gray-600">
            <h3 className="text-xl font-bold mb-6">💬 Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Academy Name</label>
                <input type="text" className="w-full p-3 bg-gray-600/50 border border-gray-500 rounded-lg text-white focus:border-purple-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" className="w-full p-3 bg-gray-600/50 border border-gray-500 rounded-lg text-white focus:border-purple-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
                <input type="tel" className="w-full p-3 bg-gray-600/50 border border-gray-500 rounded-lg text-white focus:border-purple-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">How can we help?</label>
                <textarea rows="4" className="w-full p-3 bg-gray-600/50 border border-gray-500 rounded-lg text-white focus:border-purple-500 transition-colors"></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default ContactUs; 