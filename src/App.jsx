// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

import BookingPage from './pages/BookingPage/index';

// Pages wrapped in layout
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Solutions from './pages/Solutions';
import PrivacyPolicy from './pages/PrivacyPolicy';

import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>

      {/* Public routes with Header/Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Route>

      <Route path="/in/:instituteName/*" element={<BookingPage />} />

      {/* Routes without layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />

      {/* Protected Dashboard (without layout) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
