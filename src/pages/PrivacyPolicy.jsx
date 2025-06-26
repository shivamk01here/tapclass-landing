
import React from 'react'; // Good practice to import React
import { Shield , CheckCircle , Award , Building , Mail  } from 'lucide-react';
const PrivacyPolicy = () => (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Privacy & Security First
          </h1>
          <p className="text-xl text-gray-300">Your academy's data security is our top priority</p>
        </div>
  
        <div className="space-y-8">
          <div className="bg-gray-700/30 p-8 rounded-xl border border-gray-600">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold">Enterprise-Grade Security</h2>
            </div>
            <p className="text-gray-300 mb-4">
              TapClass implements bank-level security protocols to protect your academy's sensitive data. We use industry-standard encryption, secure cloud infrastructure, and regular security audits.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-600/30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🔐 Data Encryption</h3>
                <p className="text-sm text-gray-300">256-bit AES encryption for data at rest and TLS 1.3 for data in transit</p>
              </div>
              <div className="bg-gray-600/30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🛡️ Access Control</h3>
                <p className="text-sm text-gray-300">Role-based permissions and multi-factor authentication</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gray-700/30 p-8 rounded-xl border border-gray-600">
            <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>
            <p className="text-gray-300 mb-4">
              We collect only the minimum data necessary to provide our educational management services:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />Student academic records and attendance</li>
              <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />Payment and billing information</li>
              <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />Communication logs and notifications</li>
              <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />System usage analytics for optimization</li>
            </ul>
          </div>
  
          <div className="bg-gray-700/30 p-8 rounded-xl border border-gray-600">
            <h2 className="text-2xl font-bold mb-4">Compliance & Standards</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-600/20 rounded-lg">
                <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="font-semibold">GDPR Compliant</h3>
                <p className="text-xs text-gray-300">European data protection standards</p>
              </div>
              <div className="text-center p-4 bg-green-600/20 rounded-lg">
                <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="font-semibold">ISO 27001</h3>
                <p className="text-xs text-gray-300">Information security management</p>
              </div>
              <div className="text-center p-4 bg-purple-600/20 rounded-lg">
                <Building className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h3 className="font-semibold">SOC 2 Type II</h3>
                <p className="text-xs text-gray-300">Operational security controls</p>
              </div>
            </div>
          </div>
  
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-8 rounded-xl border border-purple-500/50">
            <h2 className="text-2xl font-bold mb-4">Your Data Rights</h2>
            <p className="text-gray-300 mb-4">
              You have complete control over your academy's data. Request access, corrections, or deletion at any time.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
              Data Protection Officer <Mail className="w-4 h-4 inline ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  export default PrivacyPolicy; 