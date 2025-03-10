// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ServEase. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/ContactUs" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
