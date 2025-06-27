import React from 'react';
import {
  Home,
  Users,
  BookOpen,
  BarChart3,
  FileText,
  Settings,
  HelpCircle,
  LogOut,
  Book,
  School,
  Globe,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { logout, currentUser } = useAuth();
  console.log('user 2 : ', currentUser?.roleID);

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'People', icon: Users, label: 'People' },
    { id: 'Subject', icon: Book, label: 'Subject' },
    { id: 'Class', icon: School, label: 'Class' },
    { id: 'onlineBooking', icon: BookOpen, label: 'Online Booking' }, // Changed ID for consistency
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'reports', icon: FileText, label: 'Reports' },
  ];

  const bottomSidebarItems = [
    { id: 'websiteBooking', icon: Globe, label: 'Website Booking' }, // Renamed to avoid ID conflict
    { id: 'settings', icon: Settings, label: 'Settings' }, // Changed ID for consistency
    { id: 'help', icon: HelpCircle, label: 'Help' }, // Changed ID for consistency
  ];

  return (
    <div className="fixed left-0 top-0  mt-10 h-screen w-14 bg-white border-r border-gray-100 flex flex-col items-center py-4 z-40 shadow-sm space-y-4">
      {/* Logo Block - Updated to gray-900 theme */}
      {/* <div className="w-10 h-10 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
        <div className="w-5 h-5 border-2 border-white rounded-lg relative">
          <div className="absolute inset-0.5 bg-white rounded-sm opacity-80"></div> */}
          {/* <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-gray-800 rounded-full"></div> Changed to gray-800 */}
          {/* <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-gray-800 rounded-full"></div> Changed to gray-800 */}
          {/* <div className="absolute bottom-0.5 left-0.5 right-0.5 h-0.5 bg-gray-800 rounded-full"></div> Changed to gray-800 */}
        {/* </div>
      </div> */}

      {/* Menu Items (Top Section) */}
      <div className="flex flex-col space-y-3 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-gray-800 text-white shadow-md' // Changed to solid gray-800
                    : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} />
              </button>

              {/* Tooltip for top menu items */}
              <div className="absolute left-[52px] top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Items (Settings, Help, Logout) */}
      <div className="flex flex-col space-y-3">
        {bottomSidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-gray-800 text-white shadow-md' // Changed to solid gray-800
                    : 'text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon size={18} />
              </button>

              {/* Tooltip for bottom menu items */}
              <div className="absolute left-[52px] top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                {item.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          );
        })}

        {/* Logout Button (kept separate for distinct styling/action) */}
        <div className="relative group">
          <button
            onClick={logout}
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
          >
            <LogOut size={18} />
          </button>

          {/* Tooltip for Logout */}
          <div className="absolute left-[52px] top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
            Logout
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;