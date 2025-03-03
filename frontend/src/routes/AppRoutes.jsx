import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProvidersPage from '../pages/ProviderPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPageCustomer';
import ProviderDetailsPage from '../pages/ProviderDetailsPage';
import Header from '../components/Header';
import SignUpPageProvider from '../pages/SignUpProvider';
import Footer from '../components/Footer';
import ContactUs from '../pages/ContactUs';


const AppRoutes = () => {
  return (
      <Router >
          <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="/providers/:id" element={<ProviderDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/tasker" element={<SignUpPageProvider />} />
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
