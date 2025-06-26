import React from 'react';
import { useAuth } from '../contexts/AuthContext'; 

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>
      {isAuthenticated && <p>Mr {user?.email}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Item 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Total Students</h2>
          <p className="text-3xl font-bold text-purple-400">128</p>
        </div>

        {/* Item 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Active Classes</h2>
          <p className="text-3xl font-bold text-blue-400">5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
