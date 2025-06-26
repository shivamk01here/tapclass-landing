import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import googleLogo from '../assets/google.png';
import { loginInstitution } from '../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const { login, user, isAuthenticated, logout } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await loginInstitution(formData);
      const { token, user } = data.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      login(token, user);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 font-inter relative">
      {/* Mobile background blur */}
      <div 
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/5.jpg')",
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="absolute inset-0 md:hidden bg-gray-900/70" />
      
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-transparent md:bg-gray-800 relative z-10">
        {/* Back to website button - hidden on mobile */}
        <button
          onClick={() => window.location.href = '/'}
          className="hidden md:block absolute top-6 left-6 px-4 py-2 text-base font-medium text-white/90 hover:text-white backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
        >
          ← Back to website
        </button>

        {isAuthenticated ? (
          <div className="text-center space-y-4 md:space-y-6 text-white max-w-sm w-full">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome back!
              </h2>
              <p className="text-sm md:text-base text-gray-300 font-medium">
                {user?.name || user?.email}
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full max-w-xs py-2.5 md:py-3 px-4 md:px-6 text-sm md:text-base font-semibold rounded-xl shadow-lg backdrop-blur-sm bg-gradient-to-r from-gray-800/80 via-gray-700/80 to-gray-800/80 border border-gray-600/50 hover:from-gray-700/80 hover:via-gray-600/80 hover:to-gray-700/80 hover:border-gray-500/50 transition-all duration-300 hover:scale-105"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                className="w-full max-w-xs py-2.5 md:py-3 px-4 md:px-6 text-sm md:text-base font-semibold rounded-xl shadow-lg backdrop-blur-sm bg-gradient-to-r from-gray-800/60 via-gray-900/60 to-gray-800/60 border border-gray-700/50 text-gray-300 hover:text-white hover:from-gray-700/60 hover:via-gray-800/60 hover:to-gray-700/60 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 md:space-y-5">
            <div className="text-center space-y-1 md:space-y-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Login to your account</h2>
              <p className="text-sm md:text-base text-gray-400">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/register')}
                  type="button"
                  className="text-purple-400 hover:text-purple-300 underline font-medium"
                >
                  Register
                </button>
              </p>
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 pr-10 md:pr-12 text-sm md:text-base bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2.5 md:py-3 px-4 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 disabled:opacity-50 hover:scale-105 shadow-lg"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <div className="text-center">
              <p className="text-gray-500 text-xs md:text-sm my-3 md:my-4">Or sign in with</p>
              <button
                type="button"
                className="w-full flex items-center justify-center space-x-2 md:space-x-3 bg-white/95 hover:bg-white text-gray-800 py-2 md:py-2.5 px-4 rounded-xl shadow-md text-sm md:text-base font-medium transition-all duration-200 hover:scale-105"
              >
                <img src={googleLogo} alt="Google" className="w-4 h-4 md:w-5 md:h-5" />
                <span>Login with Google</span>
              </button>
            </div>
          </form>
        )}
      </div>

      <div
      className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: "url('/5.jpg')" }}
      >
      </div>
    </div>
  );
};

export default Login;