import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: If you have a logout API call, call it here
    // await api.post('/logout');

    logout(); // clears localStorage + context
    navigate('/login'); // redirect
  }, [logout, navigate]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <p className="text-xl">Logging you out...</p>
    </div>
  );
};

export default Logout;
