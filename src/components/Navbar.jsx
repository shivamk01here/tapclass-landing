import React from 'react';
import { Search, Bell, User, ExternalLink, Home  } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';


const Navbar = ({ user, activeTab, setActiveTab }) => { 
  const navigate = useNavigate();
  return (
    <nav className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
      {/* Brand/Home Button - Now dynamic based on activeTab */}
      <div className="flex items-center space-x-6">
        <button
          onClick={() => setActiveTab('dashboard')} // Assuming 'dashboard' is your main home tab
          className={`flex items-center text-lg font-bold transition-colors duration-200
            ${activeTab === 'dashboard' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
        >
          <Home size={22} className="mr-2" /> {/* Changed icon to Home */}
          Dashboard
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center flex-1 max-w-lg mx-6"> {/* Centered search a bit more */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm transition-all duration-300" // Changed focus ring to gray-400
          />
        </div>
      </div>

      <button
        onClick={() => navigate('/in/tapclass')}
        className={`flex items-center text-lg font-semibold transition-colors duration-200 ${
          activeTab === 'booking' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <ExternalLink  size={20} className="mr-2" />
        Booking 
      </button>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button className="relative p-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition"> {/* Changed hover color to gray-800 */}
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium shadow"> {/* Simplified notification badge color */}
            3
          </span>
        </button>

        <div className="flex items-center space-x-3 bg-gray-100 rounded-xl p-2"> {/* Changed background to gray-100 */}
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">{user?.name || 'Guest'}</p> {/* Added fallback for user name */}
            <p className="text-xs text-gray-600 capitalize">{user?.role?.name || 'User'}</p> {/* Changed text-gray-500 to gray-600 */}
          </div>

          <button
            onClick={() => setActiveTab('profile')}
            className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition shadow-md hover:shadow-lg transform hover:scale-105" // Changed to gray-800 and its hover
            title="Profile"
          >
            <User size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;