import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, X, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Don't show header on login, register, dashboard
  const hideHeaderRoutes = ['/login', '/register', '/dashboard'];
  if (hideHeaderRoutes.includes(location.pathname)) {
    return null;
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
    // Scroll to top when clicking navigation links
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700/50">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:scale-105 transition-transform focus:outline-none group"
            onClick={handleNavClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              TapClass
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`text-gray-300 hover:text-white font-medium transition-all duration-300 relative group px-2 py-1 rounded-lg ${
                  location.pathname === item.path ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20' : ''
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              onClick={handleNavClick}
              className="text-gray-300 hover:text-white font-medium px-4 py-2 transition-all duration-300 rounded-lg hover:bg-gray-700/50"
            >
              Log in
            </Link>
            <Link
              to="/register"
              onClick={handleNavClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-700/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-700/50 bg-gray-800/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`text-left font-medium px-4 py-3 transition-all duration-300 rounded-lg mx-2 ${
                    location.pathname === item.path 
                      ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700/50 px-2">
                <Link
                  to="/login"
                  onClick={handleNavClick}
                  className="text-left text-gray-300 hover:text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  onClick={handleNavClick}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;