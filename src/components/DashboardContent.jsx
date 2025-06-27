import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Globe, 
  MessageSquare, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Bell, 
  Zap,
  Target,
  TrendingUp,
  Shield,
  Smartphone
} from 'lucide-react';

const DashboardContent = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-gray-600 text-lg">Loading your dashboard...</div>
      </div>
    );
  }

  const completedFeatures = [
    { icon: Users, title: "Student & Staff Management", description: "Add and manage students, teachers, and administrative staff with detailed profiles" },
    { icon: BookOpen, title: "Subjects & Packages", description: "Create comprehensive subject catalogs and structured learning packages" },
    { icon: Target, title: "Batch Management", description: "Organize students into batches with flexible scheduling and capacity management" },
    { icon: Calendar, title: "Class Scheduling", description: "Intelligent class scheduling with conflict detection and automated notifications" }
  ];

  const upcomingFeatures = [
    { icon: Globe, title: "Online Booking Portal", description: "Public-facing website where students can browse and purchase packages directly" },
    { icon: Bell, title: "Smart Announcements", description: "Broadcast important updates to students, parents, and staff with targeted messaging" },
    { icon: MessageSquare, title: "WhatsApp Integration", description: "Automated notifications and two-way communication via WhatsApp Business API" },
    { icon: CreditCard, title: "Payment Gateway", description: "Integrated payment processing with multiple payment methods and automated receipts" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Comprehensive insights on student performance, attendance, and business metrics" },
    { icon: Smartphone, title: "Mobile App", description: "Native mobile applications for students, parents, and teachers" },
    { icon: Shield, title: "Advanced Security", description: "Multi-factor authentication, role-based access, and data encryption" },
    { icon: Zap, title: "AI-Powered Features", description: "Smart scheduling, predictive analytics, and automated administrative tasks" }
  ];

  return (
    <div className="min-h-screen bg-white ">
      <div className="px-1 sm:px-1 lg:px-1 py-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-10">
              Welcome back, <span className="text-blue-600">{user.name || user.email}</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Your comprehensive education management platform is ready to transform your institution.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard icon={<CheckCircle className="text-green-500" />} label="Active Features" value="4" />
            <StatCard icon={<Clock className="text-yellow-500" />} label="Coming Soon" value="8" />
            <StatCard icon={<TrendingUp className="text-green-600" />} label="Platform Status" value="Operational" />
            <StatCard icon={<Settings className="text-blue-600" />} label="Quick Actions" value="Available" />
          </div>

          {/* Completed Features */}
          <Section title="Active Features" icon={CheckCircle} iconColor="text-green-600">
            <FeatureGrid features={completedFeatures} color="green" />
          </Section>

          {/* Upcoming Features */}
          <Section title="Coming Soon" icon={Clock} iconColor="text-yellow-500">
            <FeatureGrid features={upcomingFeatures} color="yellow" soon />
          </Section>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl p-10 border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to get started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Begin by setting up your students and staff, then create your subjects and packages. 
              Your educational management journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">Add Students & Staff</button>
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition">Create Subjects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
        {icon}
      </div>
    </div>
  </div>
);

const Section = ({ title, icon: Icon, iconColor, children }) => (
  <div className="mb-12">
    <div className="flex items-center mb-6">
      <Icon className={`w-6 h-6 ${iconColor} mr-3`} />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    {children}
  </div>
);

const FeatureGrid = ({ features, color, soon }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {features.map((feature, index) => (
      <div key={index} className="group bg-white border border-gray-200 hover:shadow-lg rounded-2xl p-6 transition">
        <div className="flex items-start space-x-4">
          <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center`}>
            <feature.icon className={`w-6 h-6 text-${color}-600`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className={`text-lg font-semibold text-gray-800 group-hover:text-${color}-600 transition`}>
                {feature.title}
              </h3>
              {soon && (
                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-600`}>
                  Soon
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default DashboardContent;
