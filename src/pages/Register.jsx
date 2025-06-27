import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import googleLogo from '../assets/google.png'; 
import { registerInstitution } from '../services/authService'; 

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const { user, isAuthenticated, logout  } = useAuth();

  const [formData, setFormData] = useState({
    institution_name: '',
    owner_name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeTerms) return alert('Please agree to terms and conditions');
    if (formData.password !== formData.confirmPassword)
      return alert('Passwords do not match');

    setLoading(true);
    try {
      const data = await registerInstitution(formData);
      const { token, user } = data.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      login(token, user);
      navigate('/dashboard');
    } catch (error) {
      alert(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black-1000 font-inter">
      {/* Left Side */}
      <div
        className="md:w-1/2 w-full h-64 md:h-auto bg-cover bg-center relative"
        style={{ backgroundImage: "url('/2.jpg')" }}
      >
        <button
          onClick={() => window.location.href = '/'}
          className="absolute top-4 left-4 md:top-6 md:left-6 px-4 py-2 text-sm md:text-base font-medium text-white/90 hover:text-white backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
        >
          ← Back to website
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 bg-gray-800">
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
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 md:space-y-5">
            <div className="text-center space-y-1 md:space-y-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Create an account</h2>
              <p className="text-sm md:text-base text-gray-400">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  type="button"
                  className="text-purple-400 hover:text-purple-300 underline font-medium"
                >
                  Log in
                </button>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <input
                type="text"
                name="institution_name"
                placeholder="Institution Name"
                value={formData.institution_name}
                onChange={handleChange}
                required
                className="px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
              />
              <input
                type="text"
                name="owner_name"
                placeholder="Owner Name"
                value={formData.owner_name}
                onChange={handleChange}
                required
                className="px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
              />
            </div>

            <input
              type="text"
              name="surname"
              placeholder="Surname (optional)"
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
            />

            {/* Password Field */}
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

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
            />

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
              />
              <label htmlFor="terms" className="text-xs md:text-sm text-gray-400 leading-relaxed">
                I agree to the{' '}
                <button
                  onClick={() => window.location.href = '/terms'}
                  type="button"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Terms & Conditions
                </button>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2.5 md:py-3 px-4 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 disabled:opacity-50 hover:scale-105 shadow-lg"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>

            {/* OR Google */}
            <div className="text-center">
              <p className="text-gray-500 text-xs md:text-sm my-3 md:my-4">Or register with</p>
              <button
                type="button"
                className="w-full flex items-center justify-center space-x-2 md:space-x-3 bg-white/95 hover:bg-white text-gray-800 py-2 md:py-2.5 px-4 rounded-xl shadow-md text-sm md:text-base font-medium transition-all duration-200 hover:scale-105"
              >
                <img src={googleLogo} alt="Google" className="w-4 h-4 md:w-5 md:h-5" />
                <span>Register with Google</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;