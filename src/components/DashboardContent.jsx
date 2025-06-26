import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const DashboardContent = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Welcome, {user.name || user.email}!</h2>
      {/* Add more user info here if needed */}
    </div>
  );
};

export default DashboardContent;
