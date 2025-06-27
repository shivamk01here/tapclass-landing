import React from 'react';
import { useParams, Routes, Route, Navigate } from 'react-router-dom';
import InstituteHome from './InstituteHome';
import SubjectDetail from './SubjectDetail';
import CartPage from './CartPage';
import Header from './components/Header';
import Footer from './components/Footer';

const BookingPage = () => {
  const { instituteName } = useParams();

  return (
    <div className="min-h-screen flex flex-col bg-white-900 text-black">
      <Header instituteName={instituteName} />

      <main className="flex-1">
      <Routes>
        <Route path="/" element={<InstituteHome />} />
        <Route path="subject/:subjectId" element={<SubjectDetail />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    </main>


      <Footer />
    </div>
  );
};

export default BookingPage;
